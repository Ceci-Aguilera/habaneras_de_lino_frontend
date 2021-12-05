import Link from "next/link";
import Image from "next/image";
import styles from "../styles/ProductsGrid.module.css";
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

const ProductsGrid = ({ products }) => {

console.log(products)

    return products == null ? (
        <div></div>
    ) : (
        <Container className={styles.productsGridContainer}>
            <Row className={styles.row}>
                {products.map((prod, index) => {
                    return (
                        <Col
                            key={index}
                            xs={12}
                            sm={12}
                            md={4}
                            lg={3}
                            className={styles.productCol}
                        >
                            <Link href={`/product/${prod.id}/`}>
                                <Card className={styles.card}>
                                    <div className={styles.img_container}>
                                    <Card.Img variant="top" src={prod.image} className={styles.card_image}/>
                                    <Card.Img variant="top" src={prod.s_image} className={styles.card_image_s}/>
                                    </div>
                               
                                    <Card.Footer className={styles.card_footer}>
                                        ${prod.price}
                                    </Card.Footer>
                                </Card>
                            </Link>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

export default ProductsGrid;