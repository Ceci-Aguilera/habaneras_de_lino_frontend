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

const CollectionGrid = ({ collections }) => {

    console.log(collections)

    return collections == null ? (
        <div></div>
    ) : (
        <Container className={`${styles.categoryGridContainer}`}>
            <h2 className={styles.about_title}><span className={styles.about_title_span}>Collections</span></h2>
            <Carousel className={styles.carousel}>
                {collections.map((coll, index) => {
                    return (<Carousel.Item key={index}>
                        <Row className={styles.row}>
                            {coll.all_products_per_collection.map((prod_per_coll, prod_index) => {
                                if (prod_index < 3) {
                                    return (
                                        <Col
                                            key={prod_index}
                                            xs={12}
                                            sm={12}
                                            md={4}
                                            lg={4}
                                            className={styles.categoryCol}
                                        >
                                            {/* <Link href={`/collection/${coll.id}/`}> */}
                                            <Card className={styles.card}>
                                                <Card.Img variant="top" src={prod_per_coll.image} className={styles.card_coll_image} />
                                            </Card>
                                            {/* </Link> */}
                                        </Col>
                                    );
                                }
                            })}
                        </Row>
                        <h3 className={styles.collection_title}>
                            {coll.title}
                        </h3>
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