import Link from "next/link";
import Image from "next/image";
import styles from "../styles/CartDetail.module.css";
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
import { useCart } from "../context/CartContext";

const CartDetail = () => {

    const { cart, delete_product, delete_cart } = useCart()

    const onDeleteClickHandler = async (e, index) => {
        e.preventDefault();
        const product = cart.products[index]
        await delete_product(product.id)
    }

    const onDeleteCartHandler = async (e) => {
        e.preventDefault();
        await delete_cart()
    }

    return cart == null ? (
        <div></div>
    ) : (
        <Container className={styles.cartDetailContainer}>
            <Card className={styles.card_main}>
                <Card.Header className={styles.card_main_header}>
                    <h2 className={styles.about_title}><span className={styles.about_title_span}>Cart</span></h2>
                </Card.Header>
                <Card.Body>

                    {cart.products.map((prod, index) => {
                        return (
                            <Card key={index} className={styles.product_card}>
                                <Row key={index}>

                                    <Col xs={12} sm={12} md={6} lg={4} className={styles.image_col}>
                                        <Card.Img variant="top" src={prod.product.image} className={styles.card_image} />
                                    </Col>
                                    <Col xs={12} sm={12} md={6} lg={8}>
                                        <Row className={styles.row_name_of_product}><p >{prod.product.title}</p></Row>
                                        <Row className={styles.row_product_vars}>
                                            <Col xs={6} sm={6} md={6} lg={6}>

                                                <p> Talla de Ropa: {prod.clothing_s}</p>
                                                {prod.product.subtag === "ARRIBA" ? (
                                                    <>
                                                        <p> Largo de Manga: {prod.size_of_sleeve}</p>
                                                        <p> Corte: {prod.fit}</p>
                                                    </>
                                                ) : <div></div>}
                                            </Col>
                                            <Col xs={6} sm={6} md={6} lg={6}>

                                                <p>Cantidad: {prod.cant}</p>
                                                <p>Precio: ${prod.price}</p>
                                            </Col>

                                        </Row>

                                        <Row className={styles.row_buttons}>
                                            <Col xs={12} sm={12} md={6} lg={6}>
                                                <Link href={`/custom_product/${prod.id}/`}>
                                                    <Button className={`${styles.button_main} ${styles.edit_button}`}>
                                                        Edit
                                                    </Button>
                                                </Link>
                                            </Col>
                                            <Col xs={12} sm={12} md={6} lg={6}>
                                                <Button className={`${styles.button_main} ${styles.delete_button}`} onClick={(e) => onDeleteClickHandler(e, index)}>
                                                    Delete
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                            </Card>

                        )
                    })}

                    <h2 className={styles.about_title}></h2>

                    <Row className={styles.row_final_price}>
                        <p>Precio Total: ${cart.cost}</p>
                    </Row>

                    <Row className={styles.row_final_buttons}>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <Link href={`/order/`}>
                                <Button className={`${styles.button_main} ${styles.order_button}`}>
                                    Hacer Compra
                                </Button>
                            </Link>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <Button className={`${styles.button_main} ${styles.delete_order_button}`} onClick={(e) => onDeleteCartHandler(e)}>
                                Delete
                            </Button>
                        </Col>
                    </Row>

                </Card.Body>
            </Card>

        </Container>
    );
};




export default CartDetail;