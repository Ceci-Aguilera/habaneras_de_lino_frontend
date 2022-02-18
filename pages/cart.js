import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";
import CartDetail from "../components/CartDetail";
import SecondaryNavbar from "../components/SecondaryNavbar";
import NextNavbar from "../components/NextNavbar";
import stylesT from '../styles/CategoryID.module.css'

export default function Home() {
  const { cart } = useCart();

  return cart == null ? (
    <div className={styles.container}>
        <Head>
          <title>Cart - Habaneras de Lino</title>
          <meta
            name="description"
            content="The purchase of a client at Habaneras de Lino which is an online store specializes in linen and cotton clothes such as guayaberas and guayamisas"
          />
          <meta property="og:title" content="Cart - Habaneras de Lino" />
          <meta
            property="og:description"
            content="The purchase of a client at Habaneras de Lino which is an online store specializes in linen and cotton clothes such as guayaberas and guayamisas"
          />
          <meta property="og:url" content="https://habanerasdelino/cart" />
          <meta property="og:type" content="website" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        </Head>

        <NextNavbar navy={false}/>
      <SecondaryNavbar navbarShow={false} navy={false}/>

      <main className={styles.main}>
      <div className={stylesT.background_div} style={{ backgroundImage: `url('/images/Navbar/LUX8A.jpg')` }}>
        <div className={stylesT.title_div}>
        <h2 className={stylesT.about_title_catch}><span className={stylesT.about_title_span_catch}>Comfort, Luxury, and Modernity</span></h2>
        </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  ) : (
    <div className={styles.container}>
        <Head>
          <title>Cart - Habaneras de Lino</title>
          <meta
            name="description"
            content="The purchase of a client at Habaneras de Lino which is an online store specializes in linen and cotton clothes such as guayaberas and guayamisas"
          />
          <meta property="og:title" content="Cart - Habaneras de Lino" />
          <meta
            property="og:description"
            content="The purchase of a client at Habaneras de Lino which is an online store specializes in linen and cotton clothes such as guayaberas and guayamisas"
          />
          <meta property="og:url" content="https://habanerasdelino/cart" />
          <meta property="og:type" content="website" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        </Head>

        <NextNavbar navy={false}/>
      <SecondaryNavbar navbarShow={false} navy={false}/>

      <main className={styles.main}>
      <div className={stylesT.background_div} style={{ backgroundImage: `url('/images/Navbar/LUX8A.jpg')` }}>
        <div className={stylesT.title_div}>
        <h2 className={stylesT.about_title_catch}><span className={stylesT.about_title_span_catch}>Comfort, Luxury, and Modernity</span></h2>
        </div>
        </div>
        <CartDetail />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
