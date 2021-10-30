import Link from "next/link";
import Image from "next/image";
import styles from "../styles/ProductDetail.module.css";
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

const ProductDetail = ({ product }) => {

    const [cant, setCant] = useState(1);
    const [clothing_s, setClothingS] = useState('S');

    console.log(product)
    return product == null ? (
        <div></div>
    ) : (
        <Container className={styles.productsDetaulContainer}>
            <Row className={styles.row}>
                <Col
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    className={styles.productCol}
                >
                    <Card>
                        <Card.Img variant="top" src={product.image} className={styles.card_image} />
                    </Card>
                </Col>
                <Col
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    className={styles.productCol}
                >
                    <Card>
                        <Card.Body>
                            <Form.Select aria-label="Default select example">
                                <option>Talla de Ropa</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                            </Form.Select>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Cantidad</Form.Label>
                                <Form.Control type="number" placeholder="1" />
                            </Form.Group>

                        </Card.Body>
                        <Card.Footer>
                            <Button>Comprar</Button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;