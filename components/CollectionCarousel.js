import Link from "next/link";
import Image from "next/image";
import styles from "../styles/CollectionCarousel.module.css";
import {
  Container,
  Button,
  Card,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import router from "next/router";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useLanguage } from "../context/LanguageContext";

const domain = process.env.NEXT_PUBLIC_API_DOMAIN_NAME;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 2, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const CollectionCarousel = ({ collection }) => {
  const [collectionInfo, setCollectionInfo] = useState(null);
  const { language } = useLanguage();

  useEffect(() => {
    getCollection(collection, setCollectionInfo);
  }, []);

  const languageTranslate = (coll_name) => {
    if (language == "en") {
      return coll_name + " Collection";
    } else {
      return "Colección " + coll_name;
    }
  };


  return collectionInfo == null ? (
    <div />
  ) : (
    <div className={styles.collectionCarouselDiv} id={`${collection}`}>
      <h2 className={styles.coll_name}>{languageTranslate(collection)}</h2>

      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={10000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass={styles.container_carousel}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={"desktop"}
        dotListClass={styles.custom_dot_list_style}
        className={styles.carousel}
        partialVisible={false}
      >
        {collectionInfo.all_products_per_collection
          .map((prod, prod_index) => {
            return (
              <div key={prod_index} className={styles.carousel_item_div}>
                <Link href={`/product/${prod.id}/`}>
                  <Card className={styles.card}>
                    <div className={styles.card_image_div}>
                    <Card.Img
                      variant="top"
                      src={prod.image}
                      className={styles.card_coll_image}
                      alt={prod.title}
                    />
                    </div>
                    <Card.Body className={styles.carousel_info_div}>
                     <p className={styles.carousel_item_info}>
                      {prod.title}
                     </p>
                     <p className={styles.carousel_item_info}>
                        ${parseFloat(prod.price).toFixed(2)}
                     </p>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            );
          })}
      </Carousel>


      <div className={styles.link_div}>
        <Link
          className={styles.coll_link}
          href={`/collection/${collectionInfo.id}/`}
        >
          <Button className={styles.coll_link_button} variant="primary">
            {language == "en" ? "VIEW MORE" : "VER MAS"}
          </Button>
        </Link>
      </div>
    </div>
  );
};

const getCollection = async (collection, setCollectionInfo) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  console.log("debuggg");
  console.log(collections_url);

  const collections_url = domain + `store/collection/title/${collection}/`;
  axios
    .get(collections_url, config)
    .then(async (res) => {
      console.log(res);
      const result = await res.data["Collection"];
      setCollectionInfo(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default CollectionCarousel;
