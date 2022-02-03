import Link from "next/link";
import Image from "next/image";
import styles from "../styles/ShippingInfo.module.css";
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
import { useState, useEffect } from "react";
import axios from "axios";
import router from "next/router";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";

import Stepper from 'react-stepper-horizontal';

const domain = process.env.NEXT_PUBLIC_API_DOMAIN_NAME;

const ShippingInfo = () => {
  const { cart, coupon } = useCart();
  const { language } = useLanguage();

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const body = JSON.stringify({
    order: {
      user_first_name: first_name,
      user_last_name: last_name,
      address1,
      address2,
      email,
      phone,
    }
  });

  const sendShippingInfoHandler = async (e) => {
    e.preventDefault();
    if( !first_name.trim().length ) {
      // only white-spaces
    }

    else if( !last_name.trim().length ) {
      // only white-spaces
      }

      else if( !email.trim().length ) {
        // only white-spaces
      }

      else if( !phone.trim().length ) {
        // only white-spaces
      }

    else{
     const result =  await sendShippingInfo(body, cart.token);
    }
  };

  return cart == null ? (
    <div />
  ) : (
    <Container className={styles.checkoutContainer}>
    
    <div className={styles.stepper_div}>
      <Stepper steps={ [{title: 'Shipping Info'}, {title: 'Make Payment'}] } 
      activeStep={ 0 }
      activeColor="#244c77"
      completeColor="#244c77"
      activeTitleColor="244c77"
      completeTitleColor="244c77"
      titleFontSize={20}
         />
    </div>

      <Card className={styles.card}>
        <Card.Header className={styles.card_header}>
          {language == "en" ? "Shipping Information" : "Información del Envío"}
        </Card.Header>
        <Card.Body>
          <Container className={styles.orderDetailContainer}>
            <Form className={styles.form} onSubmit={e => {sendShippingInfoHandler(e)}}>
              <Row>
                <Col className={styles.col} xs={6}>
                  <InputGroup className={styles.formGroupLeftCol}>
                    <Form.Label className={styles.formLabel}><span className={styles.mandatory_field}>*</span></Form.Label>
                    <Form.Control
                      className={styles.formControl}
                      autoFocus
                      placeholder={language == "en" ? "First Name" : "Nombre"}
                      type="text"
                      value={first_name}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </InputGroup>
                </Col>

                <Col xs={6}>
                  <InputGroup className={styles.formGroupRightCol}>
                  <Form.Label className={styles.formLabel}><span className={styles.mandatory_field}>*</span></Form.Label>
                  <Form.Control
                      className={styles.formControl}
                      autoFocus
                      placeholder={language == "en" ? "Last Name" : "Apellido"}
                      type="text"
                      value={last_name}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </InputGroup>
                </Col>
              </Row>

              <InputGroup className={styles.formGroup}>
              <Form.Label className={styles.formLabel}><span className={styles.mandatory_field}>*</span></Form.Label>
              <Form.Control
                  className={styles.formControl}
                  autoFocus
                  placeholder={
                    language == "en" ? "Address line 1" : "Dirección linea 1"
                  }
                  type="text"
                  value={address1}
                  onChange={(e) => setAddress1(e.target.value)}
                />
              </InputGroup>

              <InputGroup className={styles.formGroup}>
              <Form.Label className={styles.formLabel}><span className={styles.non_mandatory_field}>*</span></Form.Label>
                <Form.Control
                  className={styles.formControl}
                  autoFocus
                  placeholder={
                    language == "en"
                      ? "Address line 2 (optional)"
                      : "Dirección linea 2 (opcional)"
                  }
                  type="text"
                  value={address2}
                  onChange={(e) => setAddress2(e.target.value)}
                />
              </InputGroup>

              <InputGroup className={styles.formGroup}>
              <Form.Label className={styles.formLabel}><span className={styles.mandatory_field}>*</span></Form.Label>
                <Form.Control
                  className={styles.formControl}
                  autoFocus
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputGroup>

              <InputGroup className={styles.formGroup}>
              <Form.Label className={styles.formLabel}><span className={styles.mandatory_field}>*</span></Form.Label>
              <Form.Control
                  className={styles.formControl}
                  autoFocus
                  placeholder={
                    language == "en" ? "Phone Number" : "Número de Telf"
                  }
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </InputGroup>


              <div className={styles.orderNowButtonDiv}>
                <Button
                type="submit"
                  // onClick={(e) => sendShippingInfoHandler()}
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
  );
};

const sendShippingInfo = async (body, cart_token) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const order_url = domain + `store/shipping-info/${cart_token}/`;
  axios
    .post(order_url, body, config)
    .then(async (res) => {
      const result = await res.data["Result"];
      if (result === "Success") {
        // return "Success"
        router.push("/checkout-paypal")
      } else {
        console.log("Error in Shipping Info")
      }
    })
    .catch((error) => {
      alert("Some Error")
      return "Error";
    });
};


export default ShippingInfo;

