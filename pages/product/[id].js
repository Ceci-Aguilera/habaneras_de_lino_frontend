import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { useRouter } from "next/router";
import axios from 'axios'
import ProductDetail from '../../components/ProductDetail';
import SecondaryNavbar from '../../components/SecondaryNavbar';
import NextNavbar from '../../components/NextNavbar';

const domain = process.env.NEXT_PUBLIC_API_DOMAIN_NAME;

import stylesT from '../../styles/CategoryID.module.css'

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const getStaticPaths = async () => {

  const res = await axios.get(domain + 'store/products/', config);
  const paths = await res.data.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };

};

export const getStaticProps = async (ctx) => {

  const product_id = ctx.params?.id;
    
  const response = await axios.get(domain + `store/products/${product_id}/`, config);

  return {
    props: {
      product: response.data,
    },
  };
};


export default function ProductDetailFunction({product}) {

  const router = useRouter();


  return (product == undefined)?<div></div>:(
    <div className={styles.container}>
      <Head>
        <title>{product.title} - Habaneras de Lino</title>
        <meta
          name="description"
          content={`Description of the product ${product.title} from the online store Habanera de Lino which is an online store specializes in linen and cotton clothes such as guayaberas and guayamisas`}
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={`${product.title} - Habaneras de Lino`} />
        <meta
          property="og:description"
          content={`Description of the product ${product.title} from the online store Habaneras de Lino which is an online store specializes in linen and cotton clothes such as guayaberas and guayamisas`}
        />
        <meta property="og:url" content={`https://habanerasdelino.com/product/${product.id}`} />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      <NextNavbar navy={false}/>
      <SecondaryNavbar navbarShow={false} navy={false}/>
      <main className={styles.main}>
      <div className={stylesT.background_div} style={{ backgroundImage: `url('/images/Navbar/LUX8A.jpg')` }}>
        <div className={stylesT.title_div}>
        <h2 className={stylesT.about_title_catch}><span className={stylesT.about_title_span_catch}>Comfortable, Luxurious, and Modern ...</span></h2>
        </div>
        </div>
        <ProductDetail product={product} />
      </main>
    </div>
  )
}