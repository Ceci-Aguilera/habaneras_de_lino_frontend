import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import CategoryGrid from "../components/CategoryGrid";
import styles from "../styles/Home.module.css";
import stylesi from "../styles/index.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";
import NextCarousel from "../components/Carousel";
import About from "../components/About";
import CollectionGrid from "../components/CollectionGrid";
import SecondaryNavbar from "../components/SecondaryNavbar";
import CollectionCarousel from "../components/CollectionCarousel";

import { Row, Col } from "react-bootstrap";

import enzo_men_image from "../public/images/Enzo Men/Enzo_Men_artbfq_c_scale,w_600.jpg";
import enzo_women_image from "../public/images/Enzo Women.jpg";
import Offers from "../components/Offers";
import AboutUs from "../components/AboutUs";
import NextNavbar from "../components/NextNavbar";

import stylesT from '../styles/CategoryID.module.css'

import navbarImage from "../public/images/Navbar/LUX4A.jpg";

const domain = process.env.NEXT_PUBLIC_API_DOMAIN_NAME;

const language_dictionary = {
  slogan: {
    en:
      "The linen and cotton clothes that offer comfort, luxury, and modernity",
    es: "La ropa de lino y algodón que ofrece confort, lujo y modernidad",
  },
};

export default function Home() {
  const { cart } = useCart();
  const { language } = useLanguage();

  const [categories, setCategories] = useState(null);
  const [collections, setCollections] = useState(null);

  useEffect(async () => {
    await getCategories(setCategories);
    await getCollections(setCollections);
  }, []);

  const languageTranslate = (phrase) => {
    return language_dictionary[phrase][language];
  };

  return (
    <div className={stylesi.container}>
      <Head>
        <title>Habaneras de Lino</title>
        <meta
          name="description"
          content="Habaneras de Lino is an e-commerce that sells high quality linen and cotton clothing, and that specializes in Caribbean guayaberas and guayamisas"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Habaneras de Lino" />
        <meta
          property="og:description"
          content="Habaneras de Lino is an e-commerce that sells high quality linen and cotton clothing, and that specializes in Caribbean guayaberas and guayamisas"
        />
        <meta property="og:url" content="https://habanerasdelino.com/" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      <NextNavbar navy={false}/>

      <SecondaryNavbar navbarShow={false} navy={false} linkBackShow={false} />


      <main className={styles.main}>

      
      <div className={stylesi.background_div} style={{ backgroundImage: `url('/images/Navbar/LUX8A.jpg')` }}>
        <div className={stylesi.title_div}>
        <h2 className={stylesi.about_title}>
          <span className={stylesi.about_title_span}>Comfort, Luxury, and Modernity</span>
        </h2>
        </div>
        </div>
        
        {/* <NextCarousel /> */}

        {/* <h1 className={stylesi.title_h1}>Habaneras de Lino</h1>

        <h2 className={stylesi.catch_phrase_h2}>
          {languageTranslate("slogan")}
        </h2> */}



        {/* <Row className={stylesi.tag_div}>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Link href={`/enzo-men/`}>
              <div className={stylesi.enzo_men_div}>
                <Image
                  // sizes="(max-width: 400px) 100vw, 400px"
                  src={enzo_men_image}
                  alt="Enzo Men Clothes Image"
                  // width="80%"
                  // height="90%"
                  className={styles.enzo_men_img}
                />
              </div>
            </Link>
          </Col> */}

          {/* <Col xs={12} sm={12} md={6} lg={6}>
            <Link href={`/enzo-women/`}>
              <div className={stylesi.enzo_women_div}>
                <Image
                  sizes="(max-width: 259px) 100vw, 259px"
                  //                 srcset="
                  // /../public/images/Enzo Women/Enzo_Women_dmlhc7_c_scale,w_200 200w,
                  // /../public/images/Enzo Women/Enzo_Women_dmlhc7_c_scale,w_256.png 256w"
                  src={enzo_women_image}
                  alt="Enzo Women Clothes Image"
                  width="80%"
                  height="100%"
                />
              </div>
            </Link>
          </Col> */}
        {/* </Row> */}

        <div className={stylesi.small_br} />

        <div className={stylesi.collection_carousel_wrapper_div}>


        <CollectionCarousel collection={"Luxury"} />
        <CollectionCarousel collection={"Etnik"} />
        <CollectionCarousel collection={"Cittadino"} />

        <CollectionCarousel collection={"Romance"} />
        <CollectionCarousel collection={"Navy"} />

        </div>
        <Offers />

        <AboutUs />

        <About />
      </main>
    </div>
  );
}

const getCategories = (setCategories) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const categories_url = domain + "store/categories/";
  axios
    .get(categories_url, config)
    .then(async (res) => {
      const result = await res.data;
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

  const collections_url = domain + "store/collections/";
  axios
    .get(collections_url, config)
    .then(async (res) => {
      const result = await res.data;
      setCollections(result);
    })
    .catch((error) => {
      console.log(error);
    });
};
