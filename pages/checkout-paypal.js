import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/CheckoutPaypal.module.css'
import {useEffect, useState} from 'react'
import axios from 'axios'
import { useCart } from '../context/CartContext'
import OrderResume from '../components/OrderResume'
import ShippingInfo from '../components/ShippingInfo'
import {
  Col,
  Row,
} from "react-bootstrap";
import SecondaryNavbar from '../components/SecondaryNavbar'
import Stepper from 'react-stepper-horizontal';
import { PayPalButton } from "react-paypal-button-v2";
import { useRouter } from 'next/router'
import NextNavbar from '../components/NextNavbar' 


const domain = process.env.NEXT_PUBLIC_API_DOMAIN_NAME;

export default function OrderCheckout() {

  let router  = useRouter()

  const {cart, coupon} = useCart()
  const [price, setPrice] = useState(0);
  
  useEffect(() => {
    if(coupon != null && coupon.discount_type == "POR CIENTO" && cart!=null){
     setPrice(parseFloat(
        cart.cost -
          cart.cost * coupon.discount +
          (cart.cost - cart.cost * coupon.discount) * 0.07
      ).toFixed(2));
    }

    else if(coupon != null && coupon.discount_type == "FIJO" && cart!=null){
      setPrice(parseFloat(
        cart.cost -
          coupon.discount +
          (cart.cost - coupon.discount) * 0.07
      ).toFixed(2))
    }
    else if(cart != null){
      setPrice(parseFloat(cart.cost + cart.cost * 0.07).toFixed(2))
    }

  }, [])

  
  return (
    <div className={styles.container}>
      <Head>
          <title>Resume of Order and Purchase - Habaneras de Lino</title>
          <meta
            name="description"
            content="Resume of order and purchase of linen and cotton clothes at Habaneras de Lino"
          />
          <meta property="og:title" content="Resume of Order and Purchase" />
          <meta
            property="og:description"
            content="Resume of order and purchase of linen and cotton clothes at Habaneras de Lino"
          />
          <meta property="og:url" content="https://habanerasdelino/order" />
          <meta property="og:type" content="website" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        </Head>

        <NextNavbar navy={true}/>
      <SecondaryNavbar navbarShow={false} navy={true}/>

      <main className={styles.main}>

      <h1 className={styles.header_title}>
        Make Payment
      </h1>

    <Row>
      <Col xs={12} sm={12} md={6} lg={6}>
       <div className={styles.paypal_div}>

        <div className={styles.stepper_div}>
          <Stepper steps={ [{title: 'Shipping Info'}, {title: 'Make Payment'}] } 
          activeStep={ 1 }
          activeColor="#244c77"
          completeColor="#244c77"
          activeTitleColor="244c77"
          completeTitleColor="244c77"
          titleFontSize={20}
            />
        </div>

        <PayPalButton
                    amount={price}
                    onSuccess={(details, data) => {

                      const config = {
                        headers: {
                          "Content-Type": "application/json",
                        },
                      };

                      const body = JSON.stringify({
                        online_payment_id: details.purchase_units[0].payments.captures[0].id,
                        amount: price
                      });

                      axios
                        .post( domain + `store/checkout-paypal/${cart.token}/`, body, config)
                        .then((res) => {
                          router.replace("/order-made")
                        })
                        .catch((error) => {
                          // Error during the create meeting step on the server using paypal method.
                          console.log(error);
                        });
                    }}
                    options={{
                      clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
                    }}
                  />
                  
      
      </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
          <div className={styles.order_resume_div}>
              <OrderResume />
          </div>
          </Col>
      </Row>
      
      
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

