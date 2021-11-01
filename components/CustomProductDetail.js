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

const CustomProductDetail = ({ product }) => {

    const {cart, update_product} = useCart()

    const [cant, setCant] = useState(1);
    const [clothing_s, setClothingS] = useState('S');
    const [price, setPrice] = useState(product.price)

    useEffect(()=>{
        setCant(product.cant)
        setClothingS(product.clothing_s)
    },[])

    const body = JSON.stringify({
        cant,
        clothing_s,
        original_product_id: product.id,
        price: product.price*cant,
        id: product.id,
        pk: product.pk,
    })

    const onSaveClickedHandler = async(e) => {
        e.preventDefault();
        if(cant > 0){
            // await onSaveClick(product.id, body)
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
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Talla de Ropa</Form.Label>
                                <Form.Select aria-label="Default select example" onChange={(e) => setClothingS(e.target.value)}>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                            </Form.Select>
                            </Form.Group>
                            
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