import Link from "next/link";
import Image from "next/image";
import styles from "../styles/CategoryGrid.module.css";
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
} from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import router from "next/router";


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
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

const CategoryGrid = ({ categories, tag='a' }) => {


    return categories == null ? (
        <div></div>
    ) : (
        <Container className={`${styles.categoryGridContainer}`}>
       <div className={styles.br} />
            {/* <h2 className={styles.about_title}><span className={styles.about_title_span}>Categories</span></h2> */}
            <Row className={styles.row}>
                {categories.map((cat, index) => {
                    return(
                    <div key={index}>
                    <h3 className={styles.collection_title}>{cat.title}</h3>
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
                            {cat.products.map((prod, prod_index) => {
                                return (
                                    <div key={prod_index}>
                                        {(tag == 'a') ? (
                                            <div className={styles.carousel_item_div}>

                                                <Link href={`/product/${prod.id}/`}>
                                                    <Card className={styles.card}>
                                                        <Card.Img variant="top" src={prod.image} className={styles.card_coll_image} />
                                                    </Card>
                                                </Link>
                                            </div>

                                        ) : <div></div>}

                                        {(tag == 'w' && prod.extra_tag == "WOMEN") ? (
                                            <div className={styles.carousel_item_div}>

                                                <Link href={`/product/${prod.id}/`}>
                                                    <Card className={styles.card}>
                                                        <Card.Img variant="top" src={prod.image} className={styles.card_coll_image} />
                                                    </Card>
                                                </Link>
                                            </div>

                                        ) : <div></div>}

                                        {(tag == 'm' && prod.extra_tag == "MEN") ? (
                                            <div className={styles.carousel_item_div}>

                                                <Link href={`/product/${prod.id}/`}>
                                                    <Card className={styles.card}>
                                                        <Card.Img variant="top" src={prod.image} className={styles.card_coll_image} />
                                                    </Card>
                                                </Link>
                                            </div>

                                        ) : <div></div>}
                                    </div>
                                );
                            })}
                        </Carousel>
                        <div className={styles.link_div}>
                        {tag == 'a'?(
                            <Link className={styles.coll_link} href={`/category/${cat.id}/`}>
                                <Button className={styles.coll_link_button} variant='primary'>More {cat.title}</Button>
                            </Link>
                        ):<div></div>}

                        {tag == 'w'?(
                            <Link className={styles.coll_link} href={`/category/${cat.id}/`}>
                                <Button className={styles.coll_link_button} variant='primary'>More {cat.title}</Button>
                            </Link>
                        ):<div></div>}

                        {tag == 'm'?(
                             <Link className={styles.coll_link} href={`/category/${cat.id}/`}>
                                <Button className={styles.coll_link_button} variant='primary'>More {cat.title}</Button>
                            </Link>
                        ):<div></div>}
                        </div>
                        </div>
                    )
                })}
            </Row>
        </Container>
    );
};

export default CategoryGrid;