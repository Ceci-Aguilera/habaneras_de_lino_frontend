import Link from "next/link";
import Image from "next/image";
import styles from "../styles/CollectionGrid.module.css";
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
    Carousel,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import router from "next/router";

const CollectionGrid = ({ collections, tag = 'a' }) => {

    console.log(collections)

    return collections == null ? (
        <div></div>
    ) : (
        <Container className={`${styles.categoryGridContainer}`}>
            <h2 className={styles.about_title}>Collections</h2>
            <Carousel variant="dark" className={styles.carousel}>
                {collections.map((coll, index) => {
                    var temp = 0;
                    return (<Carousel.Item key={index}>
                        <h3 className={styles.collection_title}>
                            <span className={styles.collection_title_span}>{coll.title}</span>
                        </h3>
                        <Row className={styles.row}>
                            {coll.all_products_per_collection.map((prod_per_coll, prod_index) => {
                                if (temp < 3 && (prod_per_coll.extra_tag=='MEN' && tag=='m')) {
                                    temp = temp + 1;
                                    return (
                                        <Col
                                            key={prod_index}
                                            xs={12}
                                            sm={12}
                                            md={4}
                                            lg={4}
                                            className={styles.categoryCol}
                                        >
                                            <Link href={`/collection/enzo-men/${coll.id}/`}>
                                            <Card className={styles.card}>
                                                <Card.Img variant="top" src={prod_per_coll.image} className={styles.card_coll_image} />
                                            </Card>
                                            </Link>
                                        </Col>
                                    );
                                }
                                else if (temp < 3 && (prod_per_coll.extra_tag=='WOMEN' && tag=='w')) {
                                    temp = temp + 1;
                                    return (
                                        <Col
                                            key={prod_index}
                                            xs={12}
                                            sm={12}
                                            md={4}
                                            lg={4}
                                            className={styles.categoryCol}
                                        >
                                            <Link href={`/collection/enzo-women/${coll.id}/`}>
                                            <Card className={styles.card}>
                                                <Card.Img variant="top" src={prod_per_coll.image} className={styles.card_coll_image} />
                                            </Card>
                                            </Link>
                                        </Col>
                                    );
                                }
                            })}
                        </Row>
                        <Carousel.Caption>
                            {/* <h3>{coll.title}</h3>
                            <p>{coll.description}</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    )
                })}
            </Carousel>
        </Container>
    );
};

export default CollectionGrid;