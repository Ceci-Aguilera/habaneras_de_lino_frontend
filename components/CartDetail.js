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
import { useLanguage } from "../context/LanguageContext";

const CartDetail = () => {
  const { cart, delete_product, delete_cart, coupon, addCoupon } = useCart();
  const { language } = useLanguage();

  const [user_email, setUserEmail] = useState("");
  const [code, setCode] = useState("");
  const [amount_of_products, setAmountOfProducts] = useState(0);

  useEffect(() => {
    if (cart != null) {
      var temp_amount = 0;
      cart.products.map((item, index) => {
        temp_amount += item.cant;
      });
    }
    setAmountOfProducts(temp_amount);
  }, []);

  const onDeleteClickHandler = async (e, index) => {
    e.preventDefault();
    const product = cart.products[index];
    await delete_product(product.id);
  };

  const onDeleteCartHandler = async (e) => {
    e.preventDefault();
    await delete_cart();
  };

  const addCouponHandler = async (e) => {
    e.preventDefault();
    await addCoupon(user_email, code);
  };

  return cart == null || amount_of_products == 0 ? (
    <div />
  ) : (
    <Container className={styles.cartDetailContainer}>
      <Card className={styles.card_main}>
        <Card.Header className={styles.card_main_header}>
          <h2 className={styles.about_title}>
            <span className={styles.about_title_span}>
              {language == "en" ? "Cart" : "Carrito"}
            </span>
          </h2>
        </Card.Header>
        <Card.Body>
          {cart.products.map((prod, index) => {
            return (
              <Card key={index} className={styles.product_card}>
                <Row key={index}>
                  <Col
                    xs={12}
                    sm={12}
                    md={6}
                    lg={4}
                    className={styles.image_col}
                  >
                    <Card.Img
                      variant="top"
                      src={prod.product.image}
                      className={styles.card_image}
                      alt={prod.product.title}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={8}>
                    {/* <Row className={styles.row_name_of_product}>
                      <p>{prod.product.title}</p>
			  </Row> */}
                    <Row className={styles.row_product_vars}>
                      <Col xs={6} sm={6} md={6} lg={6} className={styles.col_prod}>
                        <p>
                          {" "}
                          {language == "en" ? "Size:" : "Talla:"}{" "}
                          {prod.clothing_s}
                        </p>
                        {prod.product.subtag === "ARRIBA" ? (
                          <>
                            <p>
                              {" "}
                              {language == "en"
                                ? "Type Of Sleeve:"
                                : "Largo de Manga:"}{" "}
                              {language == "en" &&
                              prod.size_of_sleeve == "Corta"
                                ? "Short"
                                : ""}
                              {language == "en" &&
                              prod.size_of_sleeve == "Larga"
                                ? "Long"
                                : ""}
                              {language == "es" ? prod.size_of_sleeve : ""}
                            </p>
                            <p>
                              {" "}
                              {language == "en" ? "Fit" : "Corte"}: {prod.fit}
                            </p>
                          </>
                        ) : (
                          <div />
                        )}
 
                      </Col>
                      <Col xs={6} sm={6} md={6} lg={6} className={styles.col_prod}>

                      

                        <p>
                          {language == "en" ? "Amount" : "Cantidad"}:{" "}
                          {prod.cant}
                        </p>
                        {prod.color == "Default" ? (
                          <p>Color: Default</p>
                        ) : (
                          <div className={styles.color_box_wrapper}>
                            <div className={styles.color_box_div}>
                              <p className={styles.color_box_p}>Color: </p>
                              <div
                                style={{
                                  backgroundColor: prod.color,
                                  height: "20px",
                                  width: "20px",
                                  border: "1px solid royalblue",
                                  borderRadius: "30px",
                                }}
                              />
                            </div>
                          </div>
                        )}
                        <p>
                          {" "}
                          {language == "en" ? "Code:" : "Codigo:"}{" "}
                          {prod.product.code}
                        </p>
                        <p>
                          {language == "en" ? "Price" : "Precio"}: ${parseFloat(
                            prod.price
                          ).toFixed(2)}
                        </p>
                      </Col>
                    </Row>

                    <Row className={styles.row_buttons}>
                      <Col xs={12} sm={12} md={6} lg={6}>
                        <Link href={`/custom_product/${prod.id}/`}>
                          <Button
                            className={`${styles.button_main} ${
                              styles.edit_button
                            }`}
                          >
                            {language == "en" ? "Edit" : "Editar"}
                          </Button>
                        </Link>
                      </Col>
                      <Col xs={12} sm={12} md={6} lg={6}>
                        <Button
                          className={`${styles.button_main} ${
                            styles.delete_button
                          }`}
                          onClick={(e) => onDeleteClickHandler(e, index)}
                        >
                          {language == "en" ? "Delete" : "Eliminar"}
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card>
            );
          })}

          <h2 className={styles.about_title} />

          {coupon == null ? (
            <>
              <Row className={styles.row_final_price}>
                <p>
                  {language == "en" ? "Total Price" : "Precio Total"}: ${parseFloat(
                    cart.cost
                  ).toFixed(2)}
                </p>
              </Row>
              <Row className={styles.coupon_div}>
                <Col
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  className={styles.coupon_div_col}
                >
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>
                      {language == "en"
                        ? "Email address"
                        : "Dirección de correo"}
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      value={user_email}
                      onChange={(e) => setUserEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicCode">
                    <Form.Label>
                      {language == "en" ? "Coupon's Code" : "Código del Cupón"}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Code"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                    />
                  </Form.Group>
                  <Button
                    className={styles.add_coupon_button}
                    variant="success"
                    onClick={(e) => addCouponHandler(e)}
                  >
                    {" "}
                    {language == "en" ? "Add Coupon" : "Adicionar Cupón"}
                  </Button>
                </Col>
                <Col
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  className={styles.coupon_info}
                >
                  {language == "en" ? (
                    <p>
                      To obtain a wholesaler coupon for a purchase of at last 12
                      units, contact us at our{" "}
                      <span style={{ color: "#244c77" }}>
                        email (sales@habanerasdelino.com)
                      </span>{" "}
                      or by{" "}
                      <span style={{ color: "#244c77" }}>
                        WhatsApp/Phone (+1 941 447 5126)
                      </span>
                    </p>
                  ) : (
                    <p>
                      Para obtener un cupón de descuento como comprador
                      mayorista para una compra de al menos 12 unidades puede
                      contactarnos a nuestro{" "}
                      <span style={{ color: "#244c77" }}>
                        email (sales@habanerasdelino.com)
                      </span>{" "}
                      o{" "}
                      <span style={{ color: "#244c77" }}>
                        WhatsApp/Telf (+1 941 447 5126)
                      </span>
                    </p>
                  )}
                </Col>
              </Row>
            </>
          ) : (
            <div />
          )}

          {coupon !== null && coupon.discount_type == "POR CIENTO" ? (
            <>
              <Row className={styles.row_final_price}>
                {amount_of_products >= coupon.how_many_items ? (
                  <p>
                    {language == "en"
                      ? "Price after coupon"
                      : "Precio con cupón"}: ${cart.cost -
                      cart.cost * coupon.discount}
                  </p>
                ) : (
                  <p>
                    {language == "en"
                      ? `The coupon is active but it will only apply when there are more than ${
                          coupon.how_many_items
                        } units (products) in the cart.`
                      : `El cupón está activado pero necesita tener en el carrito al menos ${
                          coupon.how_many_items
                        } unidades (productos)`}
                  </p>
                )}
              </Row>
            </>
          ) : (
            <div />
          )}

          {coupon !== null && coupon.discount_type == "FIJO" ? (
            <>
              <Row className={styles.row_final_price}>
                {amount_of_products >= coupon.how_many_items ? (
                  <p>
                    {language == "en"
                      ? "Price after coupon"
                      : "Precio con cupón"}: ${cart.cost - coupon.discount}
                  </p>
                ) : (
                  <p>
                    {language == "en"
                      ? `The coupon is active but it will only apply when there are more than ${
                          coupon.how_many_items
                        } units (products) in the cart.`
                      : `El cupón está activado pero necesita tener en el carrito al menos ${
                          coupon.how_many_items
                        } unidades (productos)`}
                  </p>
                )}
              </Row>
            </>
          ) : (
            <div />
          )}

          <Row className={styles.row_final_buttons}>
            <Col xs={12} sm={12} md={6} lg={6}>
              <Link href={`/order/`}>
                <Button
                  className={`${styles.button_main} ${styles.order_button}`}
                >
                  {language == "en" ? "Checkout" : "Comprar"}
                </Button>
              </Link>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <Button
                className={`${styles.button_main} ${
                  styles.delete_order_button
                }`}
                onClick={(e) => onDeleteCartHandler(e)}
              >
                {language == "en" ? "Delete Cart" : "Eliminar Carrito"}
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CartDetail;
