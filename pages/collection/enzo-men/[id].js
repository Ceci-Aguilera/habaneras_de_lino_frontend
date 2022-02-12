import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/Home.module.css'
import { useRouter } from "next/router";
import axios from 'axios'
import stylesT from '../../../styles/CategoryID.module.css'
import ProductsGrid from '../../../components/ProductsGrid';
import SecondaryNavbar from '../../../components/SecondaryNavbar';
import NextNavbar from '../../../components/NextNavbar';

const domain = process.env.NEXT_PUBLIC_API_DOMAIN_NAME;


const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const getStaticPaths = async () => {

  const res = await axios.get(domain +'store/collections/men/', config);
  const paths = await res.data["Collections"].map((collection) => ({
    params: { id: collection.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };

};

export const getStaticProps = async (ctx) => {

  const collection_id = ctx.params?.id;
    
  const response = await axios.get(domain + `store/collections/${collection_id}/`, config);

  return {
    props: {
      collection: response.data,
    },
  };
};


export default function ColletionDetailFunction({collection}) {

  const router = useRouter();

  return (collection == undefined)?<div></div>:(
    <div className={styles.container}>
       <Head>
        <title>Collection {collection.title} - Habaneras de Lino</title>
        <meta
          name="description"
          content={`Collection ${collection.title} for men at Habaneras de Lino which is an online store specializes in linen and cotton clothes such as guayaberas and guayamisas`}
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={`Collection ${collection.title} - Habaneras de Lino`} />
        <meta
          property="og:description"
          content={`Collection ${collection.title} for men at Habaneras de Lino which is an online store specializes in linen and cotton clothes such as guayaberas and guayamisas`}
        />
        <meta property="og:url" content={`https://habanerasdelino.com/collection/enzo-men/${collection.id}`} />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>


      <NextNavbar navy={false}/>
      <SecondaryNavbar navbarShow={false} navy={false}/>

      <main className={styles.main}>
      <div className={stylesT.background_div} style={{ backgroundImage: `url(${collection.image})` }}>
        <div className={stylesT.title_div}>
        <h2 className={stylesT.about_title}><span className={stylesT.about_title_span}>{collection.title}</span></h2>
        </div>
        </div>
          <ProductsGrid products={collection.all_products_per_collection} tag='m'/>
      </main>
    </div>
  )
}