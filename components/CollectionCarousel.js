import Link from "next/link";
import Image from "next/image";
import styles from "../styles/CollectionCarousel.module.css";
import {
    Nav,
    Navbar,
    NavDropdown,
    Container,
    Form,
    FormControl,
    FormGroup,
    InputGroup,
    Button,
    Col,
    Row,
    ControlLabel,
    Card,
    // Carousel,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import router from "next/router";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const domain = process.env.NEXT_PUBLIC_API_DOMAIN_NAME;


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};






const CollectionCarousel = ({ collection }) => {

    const [collectionInfo, setCollectionInfo] = useState(null);

    useEffect(() => {
        getCollection(collection, setCollectionInfo);
    }, [])

    // console.log("DSAKLJDKAJDJKAJDKJ KJSAKJD KASJDK JAJDA SK")
    // console.log(collection)
    // console.log(collectionInfo)

    return collectionInfo == null ? (
        <div></div>
    ) : (

        <Container className={styles.collectionCarouselDiv} id={`${collection}`}>

            <h2 className={styles.coll_name}>{collection} Collection</h2>



            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={"desktop"}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"

                className={styles.carousel}>
                {collectionInfo.all_products_per_collection.slice(0, collectionInfo.all_products_per_collection.length / 2).map((prod, prod_index) => {
                    return (
                        <div key={prod_index} className={styles.carousel_item_div}>

                            <Link href={`/product/${prod.id}/`}>
                                <Card className={styles.card}>
                                    <Card.Img variant="top" src={prod.image} className={styles.card_coll_image} />
                                </Card>
                            </Link>
                        </div>
                    );
                })}
            </Carousel>

            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={"desktop"}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"

                className={styles.carousel}>


                {collectionInfo.all_products_per_collection.slice(collectionInfo.all_products_per_collection.length / 2, collectionInfo.all_products_per_collection.length).map((prod, prod_index) => {
                    return (
                        <div key={prod_index} className={styles.carousel_item_div}>

                            <Link href={`/product/${prod.id}/`}>
                                <Card className={styles.card}>
                                    <Card.Img variant="top" src={prod.image} className={styles.card_coll_image} />
                                </Card>
                            </Link>
                        </div>
                    );
                })}
            </Carousel>

            <div className={styles.link_div}>
                <Link className={styles.coll_link} href={`/collection/${collectionInfo.id}/`}>
                    <Button className={styles.coll_link_button} variant='primary'>View More of {collectionInfo.title}</Button>
                </Link>
            </div>


        </Container>

    );
};


const getCollection = async (collection, setCollectionInfo) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    console.log("debuggg")
    console.log(collections_url)

    const collections_url = domain + `store/collection/title/${collection}/`;
    axios
        .get(collections_url, config)
        .then(async (res) => {
            console.log(res)
            const result = await res.data['Collection'];
            setCollectionInfo(result);
        })
        .catch((error) => {
            console.log(error);
        });
}

export default CollectionCarousel;