import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";
import OrderSuccessfullyMade from "../components/OrderSuccessfullyMade";
import SecondaryNavbar from "../components/SecondaryNavbar";
import NextNavbar from "../components/NextNavbar";

export default function OderMade() {
  const { cart } = useCart();

  return (
    <div className={styles.container}>
      <Head>
        <title>Order Made Successfully - Habaneras de Lino</title>
        <meta
          name="description"
          content="Order Made Successfully of linen and cotton clothes at Habaneras de Lino"
        />
        <meta
          property="og:title"
          content="Order Made Successfully - Habaneras de Lino"
        />
        <meta
          property="og:description"
          content="Order Made Successfully of linen and cotton clothes at Habaneras de Lino"
        />
        <meta property="og:url" content="https://habanerasdelino/order-made" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      <NextNavbar navy={true}/>
      <SecondaryNavbar navbarShow={false} navy={true}/>

      <main className={styles.main}>
        <OrderSuccessfullyMade />
      </main>

      <footer className={styles.footer} />
    </div>
  );
}
