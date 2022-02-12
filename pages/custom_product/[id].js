import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { useRouter } from "next/router";
import axios from 'axios'
import CustomProductDetail from '../../components/CustomProductDetail';
import SecondaryNavbar from '../../components/SecondaryNavbar';
import { useEffect, useState } from 'react';
import NextNavbar from '../../components/NextNavbar';


const domain = process.env.NEXT_PUBLIC_API_DOMAIN_NAME;

export default function CustomProductDetailFunction() {

  const router = useRouter();
  
  const { id } = router.query

  const [product, setProduct] = useState(null);

  useEffect (async() => {
    await getProduct(id, setProduct);
  },[])

  return (product == undefined)?<div></div>:(
    <div className={styles.container}>
       <Head>
        <title>{product.product.title} - Habaneras de Lino</title>
        <meta
          name="description"
          content={`Customization of the product ${product.product.title} at Habaneras de Lino which is an online store specializes in linen and cotton clothes such as guayaberas and guayamisas`}
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={`${product.product.title} - Habaneras de Lino`} />
        <meta
          property="og:description"
          content={`Customization of the product ${product.product.title} at Habaneras de Lino which is an online store specializes in linen and cotton clothes such as guayaberas and guayamisas`}
        />
        <meta property="og:url" content={`https://habanerasdelino.com/custom_product/${id}`} />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      <NextNavbar navy={true}/>
      <SecondaryNavbar navbarShow={false} navy={true}/>

      <main className={styles.main}>
        <CustomProductDetail product={product} original_product={product.product} />
      </main>
    </div>
  )
}

const getProduct = async(id, setProduct) =>{

  
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

  const product_url = domain + `store/custom-products/${id}/`;

  axios
        .get(product_url, config)
        .then(async (res) => {
          const result = await res.data["Product"]
          setProduct(result)
        })
        .catch((error) => {
          setProduct(null)
        });
}