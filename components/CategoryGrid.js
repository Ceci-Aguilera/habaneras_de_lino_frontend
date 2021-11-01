import Link from "next/link";
import Image from "next/image";
import styles from "../styles/CategoryGrid.module.css";
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

const CategoryGrid = ({ categories }) => {

    console.log(categories)
    return categories == null ? (
        <div></div>
    ) : (
        <Container className={styles.categoryGridContainer}>
            <Row className={styles.row}>
                {categories.map((cat, index) => {
                    return (
                        <Col
                            key={index}
                            xs={12}
                            sm={12}
                            md={4}
                            lg={4}
                            className={styles.categoryCol}
                        >
                            <Link href={`/category/${cat.id}/`}>
                                <Card className={styles.card}>
                                <Card.Img variant="top" src={cat.image} className={styles.card_image}/>
                                    <Card.Footer className={styles.card_footer}>
                                        {cat.title}
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

export default CategoryGrid;