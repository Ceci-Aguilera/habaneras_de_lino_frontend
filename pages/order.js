import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useEffect, useState} from 'react'
import axios from 'axios'
import { useCart } from '../context/CartContext'
import OrderResume from '../components/OrderResume'
import CheckoutForm from '../components/CheckoutForm'
import {
  Col,
  Row,
} from "react-bootstrap";
import SecondaryNavbar from '../components/SecondaryNavbar'

export default function OrderCheckout() {

  const {cart} = useCart()
  
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

      <SecondaryNavbar navbarShow={false} />

      <main className={styles.main}>
      <Row>
                <Col xs={12} sm={12} md={12} lg={6}>
        <CheckoutForm />

                </Col>
                <Col xs={12} sm={12} md={12} lg={6}>
                    
        <OrderResume />
                </Col>
            </Row>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

