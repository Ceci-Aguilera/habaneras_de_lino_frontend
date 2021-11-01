import Link from "next/link";
import Image from "next/image";
import styles from "../styles/OrderResume.module.css";
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

const OrderResume = () => {

    const { cart } = useCart()

    return cart == null ? (
        <div></div>
    ) : (
        <Container className={styles.orderResumeContainer}>
            <Card className={styles.card}>
                <Card.Header className={styles.card_header}>Cart</Card.Header>
                <Card.Body className={styles.card_body}>
                    <p>
                        Subtotal: ${cart.cost}
                    </p>
                    <p>
                        Taxes: 0.7%
                    </p>
                    <p>
                        Precio total (envio + taxes): ${cart.cost + (cart.cost * 0.07)}
                    </p>

                </Card.Body>
            </Card>

        </Container>
    );
};




export default OrderResume;