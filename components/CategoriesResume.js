import Link from "next/link";
import Image from "next/image";
import styles from "../styles/CollectionsResume.module.css";
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

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { useLanguage } from "../context/LanguageContext";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};

const CategoriesResume = ({ categories, tag = "a" }) => {
    const { language } = useLanguage();

    return categories == null ? (
        <div />
    ) : (
        <>
            <Container className={styles.collections_div}>
                <h2 className={styles.collections_resume_h2}>
                    Categories
                </h2>
                <Row className={styles.row}>
                    {categories.map((categoriesInfo, index) => {
                        return (
                            <Col key={index} className={styles.col} xs={12} sm={6} md={6} lg={3}>
                                <div >
                                    <div className={`${styles.categoryGridContainer}`}>

                                        <div className={styles.card_div}>
                                            <div className={styles.carousel_item_div}>
                                                <Link href={`/category/${categoriesInfo.id}/`}>
                                                    <Card className={styles.card}>
                                                        <Card.Img
                                                            variant="top"
                                                            src={categoriesInfo.image}
                                                            className={styles.card_coll_image}
                                                            alt={categoriesInfo.title}
                                                        />
                                                        <Card.Footer className={styles.card_footer}> {categoriesInfo.title}</Card.Footer>
                                                    </Card>
                                                </Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </>
    );
};

export default CategoriesResume;
