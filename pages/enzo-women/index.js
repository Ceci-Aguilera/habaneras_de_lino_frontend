import Head from 'next/head'
import Image from 'next/image'
import CategoryGrid from '../../components/CategoryGrid'
import styles from '../../styles/Enzo.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useCart } from '../../context/CartContext'
import CollectionGrid from '../../components/CollectionGrid'
import SecondaryNavbar from '../../components/SecondaryNavbar'
import NextNavbar from '../../components/NextNavbar'

import { Row, Col } from 'react-bootstrap'

const domain = process.env.NEXT_PUBLIC_API_DOMAIN_NAME;

export default function WomenIndex() {

  const { cart } = useCart()

  const [categories, setCategories] = useState(null);
  const [collections, setCollections] = useState(null);

  useEffect(async () => {
    await getCategories(setCategories);
    await getCollections(setCollections);
  }, []);


  return (
    <div className={styles.container}>
      <Head>
        <title>Women Linen and Cotton Clothes - Habaneras de Lino</title>
        <meta
          name="description"
          content={`Women linen and cotton clothes at Habaneras de Lino which is an online store specializes in linen and cotton clothes such as guayaberas and guayamisas`}
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Women Linen and Cotton Clothes - Habaneras de Lino"/>
        <meta
          property="og:description"
          content={`Women linen and cotton clothes at Habaneras de Lino which is an online store specializes in linen and cotton clothes such as guayaberas and guayamisas`}
        />
        <meta property="og:url" content={`https://habanerasdelino.com/enzo-women`} />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>


      <NextNavbar navy={true}/>
      <SecondaryNavbar navbarShow={false} navy={true}/>

      <h1 className={styles.enzo_women_title}>
        WOMEN 
      </h1>


      <main className={styles.main}>
        <div id='enzo_woman_collection'>
          <CollectionGrid collections={collections} tag={'w'} />
        </div>

        <h3 className={styles.about_title}>Categories</h3>

        <div id='enzo_woman_category'>
          <CategoryGrid categories={categories} tag={'w'} />
        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

const getCategories = (setCategories) => {

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const categories_url = domain + "store/categories/women/";
  axios
    .get(categories_url, config)
    .then(async (res) => {
      const result = await res.data['Categories'];
      setCategories(result);
    })
    .catch((error) => {
      console.log(error);
    });
};


const getCollections = (setCollections) => {

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const collections_url = domain + "store/collections/women/";
  axios
    .get(collections_url, config)
    .then(async (res) => {
      const result = await res.data['Collections'];
      setCollections(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

