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

    const {cart, delete_product, delete_cart} = useCart()

    const onDeleteClickHandler = async(e, index) =>{
        e.preventDefault();
        const product = cart.products[index]
        await delete_product(product.id)
    }

    const onDeleteCartHandler = async(e) => {
        e.preventDefault();
        await delete_cart()
    }

    return cart == null ? (
        <div></div>
    ) : (
        <Container className={styles.cartDetailContainer}>
            <Card>
                <Card.Header>Cart</Card.Header>
                <Card.Body>

                    {cart.products.map((prod, index) => {
                        return (
                            <Card key={index}>
                                <Row key={index}>

                                    <Col xs={12} sm={12} md={6} lg={6}>
                                        <Card.Img variant="top" src={prod.product.image} className={styles.card_image}/>
                                    </Col>
                                    <Col xs={12} sm={12} md={6} lg={6}>
                                        <Row><p >{prod.product.title}</p></Row>
                                        <Row>
                                            Talla de Ropa: <p>{prod.clothing_s}</p>
                                        </Row>
                                        <Row>
                                            Cantidad: <p>{prod.cant}</p>
                                        </Row>
                                        <Row>
                                            Precio: <p>{prod.price}</p>
                                        </Row>
 
                                        <Row>
                                            <Col xs={12} sm={12} md={6} lg={6}>
                                                <Link href={`/custom_product/${prod.id}/`}>
                                                <Button>
                                                  Edit  
                                                </Button>
                                                </Link>
                                            </Col>
                                            <Col xs={12} sm={12} md={6} lg={6}>
                                                <Button onClick={(e) => onDeleteClickHandler(e, index)}>
                                                  Delete  
                                                </Button>
                                                </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                            <p>Precio Total: {cart.cost}</p>
                                        </Row>
 
                                        <Row>
                                            <Col xs={12} sm={12} md={6} lg={6}>
                                                <Link href={`/order/`}>
                                                <Button>
                                                  Hacer Compra  
                                                </Button>
                                                </Link>
                                            </Col>
                                            <Col xs={12} sm={12} md={6} lg={6}>
                                                <Button onClick={(e) => onDeleteCartHandler(e)}>
                                                  Delete  
                                                </Button>
                                                </Col>
                                        </Row>
                            </Card>

                        )
                    })}

                </Card.Body>
            </Card>

        </Container>
    );
};




export default CartDetail;