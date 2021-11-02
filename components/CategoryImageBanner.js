import Link from "next/link";
import Image from "next/image";
import styles from "../styles/CategoryImageBanner.module.css";
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

const CategoryImageBanner = ({ category_title, category_image }) => {

    return (category_title == null || category_image == null) ? (
        <div>Error uppps</div>
    ) : (
        <Container className={styles.containerImageBanner}>
            <Row>
                <Col xs={12} sm={12} md={12} lg={6}>
            <img alt={category_title} src={category_image} className={styles.imageBanner} />

                </Col>
                <Col xs={12} sm={12} md={12} lg={6}>
            {category_title}
                </Col>
            </Row>
        </Container>
    );
};

export default CategoryImageBanner;