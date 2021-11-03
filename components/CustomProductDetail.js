import Link from "next/link";
import Image from "next/image";
import styles from "../styles/CustomProductDetail.module.css";
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

const CustomProductDetail = ({ product, original_product }) => {

    const {cart, update_product} = useCart()

    const [cant, setCant] = useState(1);
    const [clothing_s, setClothingS] = useState('S');
    const [sleeve, setSleeve] = useState('Corta');
    const [fit, setFit] = useState('Regular Fit');
    const [price, setPrice] = useState(product.price)

    useEffect(async()=>{
        setCant(product.cant)
        setClothingS(product.clothing_s)
        setSleeve(product.size_of_sleeve)
        setFit(product.fit)
    },[])

    var body = JSON.stringify({
        cant,
        clothing_s,
        size_of_sleeve: sleeve,
        fit,
        original_product_id: original_product.id,
        price: original_product.price*cant,
        id: product.id,
        pk: product.pk,
    })

    console.log(product)

    const onSaveClickedHandler = async(e) => {
        e.preventDefault();
        if(cant > 0){
             if(product.product.subtag === "ABAJO"){
                if(clothing_s === "S"){
                    body = JSON.stringify({
                        cant,
                        clothing_s: "32",
                        size_of_sleeve: "-1",
                        fit: "-1",
                        original_product_id: original_product.id,
                        price: original_product.price*cant,
                        id: product.id,
                        pk: product.pk,
                    })
                }
            }

            else if(product.product.subtag !== "ARRIBA"){
                body = JSON.stringify({
                    cant,
                    clothing_s,
                    size_of_sleeve: "-1",
                    fit: "-1",
                    original_product_id: original_product.id,
                    price: original_product.price*cant,
                    id: product.id,
                    pk: product.pk,
                })
            }
            console.log(body)
            await update_product(product.id, body)
        }
        
    } 

    return product == null ? (
        <div></div>
    ) : (
        <Container className={styles.customProductsDetailContainer}>
            <Row className={styles.row}>
                <Col
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    className={styles.productCol}
                >
                    <Card>
                        <Card.Img variant="top" src={product.product.image} className={styles.card_image} />
                    </Card>
                </Col>
                <Col
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    className={styles.productCol}
                >
                    <Card className={styles.card}>
                    <Card.Body className={styles.card_body}>
                    {product.product.subtag === "ARRIBA" ? (
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Talla de Ropa</Form.Label>
                                    <Form.Select aria-label="Default select example" onChange={(e) => setClothingS(e.target.value)}>
                                        <option value={product.clothing_s}>{product.clothing_s}</option>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                    </Form.Select>
                                </Form.Group>
                            ) : (
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Talla de Ropa</Form.Label>
                                    <Form.Select aria-label="Default select example" onChange={(e) => setClothingS(e.target.value)}>
                                    <option value={product.clothing_s}>{product.clothing_s}</option>
                                        <option value="32">32</option>
                                        <option value="34">34</option>
                                        <option value="36">36</option>
                                    </Form.Select>
                                </Form.Group>
                            )}

                            {product.product.subtag === "ARRIBA" ? (
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Corte</Form.Label>
                                    <Form.Select aria-label="Default select example" onChange={(e) => setFit(e.target.value)}>
                                        <option value={product.fit}>{product.fit}</option>
                                        <option value="Regular Fit">Regular Fit</option>
                                        <option value="Slim Fit">Slim Fit</option>
                                    </Form.Select>
                                </Form.Group>
                            ) : <div></div>}

                            {product.product.subtag === "ARRIBA" ? (
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Largo de Manga</Form.Label>
                                    <Form.Select aria-label="Default select example" onChange={(e) => setSleeve(e.target.value)}>
                                        <option value={product.size_of_sleeve}>{product.size_of_sleeve}</option>
                                        <option value="Corta">Corta</option>
                                        <option value="Larga">Larga</option>
                                    </Form.Select>
                                </Form.Group>
                            ) : <div></div>}
                            
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Cantidad</Form.Label>
                                <Form.Control type="number" onChange={(e) => setCant(e.target.value)} value={cant}/>
                            </Form.Group>

                        </Card.Body>
                        <Card.Footer className={styles.card_footer}>
                        <Button className={styles.button} onClick={(e)=>onSaveClickedHandler(e)}>Save</Button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};



export default CustomProductDetail;