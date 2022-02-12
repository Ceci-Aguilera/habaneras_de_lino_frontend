import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/Home.module.css'
import { useRouter } from "next/router";
import axios from 'axios'
import ProductsGrid from '../../../components/ProductsGrid';
import stylesT from '../../../styles/CategoryID.module.css'
import SecondaryNavbar from '../../../components/SecondaryNavbar';
import NextNavbar from '../../../components/NextNavbar';


const domain = process.env.NEXT_PUBLIC_API_DOMAIN_NAME;


const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const getStaticPaths = async () => {

  const res = await axios.get(domain +'store/categories/women/', config);
  const paths = await res.data["Categories"].map((category) => ({
    params: { title: category.title.toString() },
  }));

  return {
    paths,
    fallback: false,
  };

};

export const getStaticProps = async (ctx) => {

  const category_title = ctx.params?.title;
    
  const response = await axios.get(domain + `store/category/title/women/${category_title}/`, config);

  return {
    props: {
      category: response.data['Category'],
      products: response.data['Products'],
    },
  };
};


export default function CategoryTitleWomanDetailFunction({category, products}) {

  const router = useRouter();


  return (category == undefined)?<div></div>:(
    <div className={styles.container}>
      <Head>
        <title>Category {category.title} - Habaneras de Lino</title>
        <meta
          name="description"
          content={`Description of the category ${category.title} made of linen and cotton for women at Habaneras de Lino which is an online store specializes in linen and cotton clothes such as guayaberas and guayamisas`}
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={`Category ${category.title} - Habaneras de Lino`} />
        <meta
          property="og:description"
          content={`Description of the category ${category.title} made of linen and cotton for women at Habaneras de Lino which is an online store specializes in linen and cotton clothes such as guayaberas and guayamisas`}
        />
        <meta property="og:url" content={`https://habanerasdelino.com/category-title/enzo-women/${category.title}`} />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      <NextNavbar navy={false}/>
      <SecondaryNavbar navbarShow={false} navy={false}/>
      <main className={styles.main}>
      <div className={stylesT.background_div} style={{ backgroundImage: `url(${category.image})` }}>
        <div className={stylesT.title_div}>
        <h2 className={stylesT.about_title}><span className={stylesT.about_title_span}>{category.title}</span></h2>
        </div>
        </div>
          <ProductsGrid products={products}/>
      </main>
    </div>
  )
}