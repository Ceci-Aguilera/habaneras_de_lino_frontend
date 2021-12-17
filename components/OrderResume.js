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

    const { cart, coupon } = useCart()

    return cart == null ? (
        <div></div>
    ) : (
        <Container className={styles.orderResumeContainer}>
            <Card className={styles.card}>
                <Card.Header className={styles.card_header}>Purchase Information</Card.Header>
                <Card.Body className={styles.card_body}>
                    <p>
                        Subtotal: ${cart.cost}
                    </p>
                    <p>
                        Taxes: 0.07%
                    </p>
                    {(coupon == null)?<><p>No coupon Applied</p>
                    <p>
                        Total Price (shipping + taxes): ${parseFloat(cart.cost + (cart.cost * 0.07)).toFixed(2)}
                    </p></>:<div></div>}
                    {(coupon !== null && coupon.discount_type == "POR CIENTO")?(<><p>Coupon: {coupon.discount} %</p>
                    <p>
                        Total Price (shipping + taxes + coupon): ${parseFloat(cart.cost - (cart.cost * coupon.discount) + ((cart.cost - (cart.cost * coupon.discount)) * 0.07) ).toFixed(2)}
                    </p>
                    </>)
                    :<div></div>}

                    {(coupon !== null && coupon.discount_type == "FIJO")?(<><p>Coupon: ${coupon.discount}</p>
                    <p>
                        Total Price (shipping + taxes + coupon): ${parseFloat(cart.cost - (coupon.discount) + ((cart.cost - (coupon.discount) ) * 0.07) ).toFixed(2)}
                    </p>
                    </>)
                    :<div></div>}

                </Card.Body>
            </Card>

        </Container>
    );
};




export default OrderResume;