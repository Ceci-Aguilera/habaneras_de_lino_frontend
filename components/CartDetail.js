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

const CartDetail = ({ cart }) => {

    console.log(cart)

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
                                <Card.Img variant="top" src={prod.product.image} className={styles.card_image}/>
                            </Card>
                            // <Row key={index}>

                            //     <Col xs={12} sm={12} md={6} lg={6}>
                            //         <img alt={prod.product.title} src={prod.product.image} />
                            //     </Col>
                            //     <Col xs={12} sm={12} md={6} lg={6}>
                            //         <p >{prod.product.title}</p>
                            //     </Col>
                            // </Row>
                        )
                    })}

                </Card.Body>
            </Card>

        </Container>
    );
};



export default CartDetail;