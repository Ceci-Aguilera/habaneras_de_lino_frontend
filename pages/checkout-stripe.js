import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/CheckoutPaypal.module.css'
import {useEffect, useState} from 'react'
import axios from 'axios'
import { useCart } from '../context/CartContext'
import OrderResume from '../components/OrderResume'
import ShippingInfo from '../components/ShippingInfo'
import {
    Nav,
    Navbar,
    NavDropdown,
    Container,
    Form,
    FormControl,
    FormGroup,
    InputGroup,
    Button,
    Col,
    Row,
    ControlLabel,
    Card,
  } from "react-bootstrap";
import SecondaryNavbar from '../components/SecondaryNavbar'
import Stepper from 'react-stepper-horizontal';
import { PayPalButton } from "react-paypal-button-v2";
import { useRouter } from 'next/router'
import NextNavbar from '../components/NextNavbar';
import { useLanguage } from "../context/LanguageContext";


const domain = process.env.NEXT_PUBLIC_API_DOMAIN_NAME;

export default function OrderCheckout() {

  let router  = useRouter()
  const { language } = useLanguage();

  const {cart, coupon} = useCart()
  const [price, setPrice] = useState(0);
  const [card_num, setCardNum] = useState("");
  const [exp_month, setExpMonth] = useState("");
  const [exp_year, setExpYear] = useState("");
  const [cvc, setCvc] = useState("");
  
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

  const body = JSON.stringify({
      card_num,
      exp_month,
      exp_year,
      cvc,
      amount: price,
  });


  const makePaymentHandler = async () => {
    await makePayment(body, cart.token, router);
  };
  
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

        <Container className={styles.checkoutContainer}>
      <Card className={styles.card}>
        <Card.Header className={styles.card_header}>
          {language == "en" ? "Payment Information" : "Información del Pago"}
        </Card.Header>
        <Card.Body>
          <Container className={styles.orderDetailContainer}>
            <Form className={styles.form}>

              <InputGroup className={styles.cardFormGroup}>
                {/* <Form.Label className={styles.formLabel}>Address (Optional)</Form.Label> */}
                <FormControl
                  className={styles.formControl}
                  autoFocus
                  placeholder={
                    language == "en" ? "Card Number" : "Número de la Tarjeta"
                  }
                  type="text"
                  value={card_num}
                  onChange={(e) => setCardNum(e.target.value)}
                />
              </InputGroup>

              <Row>
                <Col className={styles.col} xs={6}>
                  <InputGroup className={styles.formGroupLeftCol}>
                    {/* <Form.Label className={styles.formLabel}>First Name</Form.Label> */}
                    <FormControl
                      className={styles.formControl}
                      autoFocus
                      placeholder={
                        language == "en" ? "Exp Month" : "Mes de Exp"
                      }
                      type="text"
                      value={exp_month}
                      onChange={(e) => setExpMonth(e.target.value)}
                    />
                  </InputGroup>
                </Col>

                <Col xs={6}>
                  <InputGroup className={styles.formGroupRightCol}>
                    {/* <Form.Label className={styles.formLabel}>Address (Optional)</Form.Label> */}
                    <FormControl
                      className={styles.formControl}
                      autoFocus
                      placeholder={language == "en" ? "Exp Year" : "Año de Exp"}
                      type="text"
                      value={exp_year}
                      onChange={(e) => setExpYear(e.target.value)}
                    />
                  </InputGroup>
                </Col>
              </Row>

              <InputGroup className={styles.formGroup}>
                {/* <Form.Label className={styles.formLabel}>Address (Optional)</Form.Label> */}
                <FormControl
                  className={styles.formControl}
                  autoFocus
                  placeholder="CVC"
                  type="text"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                />
              </InputGroup>

              <div className={styles.orderNowButtonDiv}>
                <Button
                  onClick={(e) => makePaymentHandler()}
                  className={styles.orderNowButton}
                >
                  {language == "en" ? "MAKE PAYMENT" : "HACER PAGO"}
                </Button>
              </div>
            </Form>
          </Container>
        </Card.Body>
      </Card>
    </Container>
                  
      
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

const makePayment = async (body, cart_token, router) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    const order_url = domain + `store/order/${cart_token}/`;
    axios
      .post(order_url, body, config)
      .then(async (res) => {
        router.replace("/order-made")
      })
      .catch((error) => {
        return "Error";
      });
  };

