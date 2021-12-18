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
  const { cart, delete_product, delete_cart, coupon, addCoupon } = useCart();

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

  console.log("Coupon: " + coupon);

  return cart == null || amount_of_products == 0 ? (
    <div></div>
  ) : (
    <Container className={styles.cartDetailContainer}>
      <Card className={styles.card_main}>
        <Card.Header className={styles.card_main_header}>
          <h2 className={styles.about_title}>
            <span className={styles.about_title_span}>Cart</span>
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
                    />
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={8}>
                    <Row className={styles.row_name_of_product}>
                      <p>{prod.product.title}</p>
                    </Row>
                    <Row className={styles.row_product_vars}>
                      <Col xs={6} sm={6} md={6} lg={6}>
                        <p> Size: {prod.clothing_s}</p>
                        {prod.product.subtag === "ARRIBA" ? (
                          <>
                            <p>
                              {" "}
                              Type Of Sleeve:{" "}
                              {prod.size_of_sleeve == "Corta"
                                ? "Short"
                                : "Long"}
                            </p>
                            <p> Fit: {prod.fit}</p>
                          </>
                        ) : (
                          <div></div>
                        )}
                      </Col>
                      <Col xs={6} sm={6} md={6} lg={6}>
                        <p>Amount: {prod.cant}</p>
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
                        <p>Price: ${parseFloat(prod.price).toFixed(2)}</p>
                      </Col>
                    </Row>

                    <Row className={styles.row_buttons}>
                      <Col xs={12} sm={12} md={6} lg={6}>
                        <Link href={`/custom_product/${prod.id}/`}>
                          <Button
                            className={`${styles.button_main} ${styles.edit_button}`}
                          >
                            Edit
                          </Button>
                        </Link>
                      </Col>
                      <Col xs={12} sm={12} md={6} lg={6}>
                        <Button
                          className={`${styles.button_main} ${styles.delete_button}`}
                          onClick={(e) => onDeleteClickHandler(e, index)}
                        >
                          Delete
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card>
            );
          })}

          <h2 className={styles.about_title}></h2>

          {coupon == null ? (
            <>
              <Row className={styles.row_final_price}>
                <p>Total Price: ${parseFloat(cart.cost).toFixed(2)}</p>
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
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={user_email}
                      onChange={(e) => setUserEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicCode">
                    <Form.Label>{"Coupon's Code"}</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="code"
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
                    Add Coupon
                  </Button>
                </Col>
                <Col
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  className={styles.coupon_info}
                >
                  <p>
                    To obtain a wholesaler coupon for a purchase of at last 12
                    units, contact us at our{" "}
                    <span style={{ color: "#244c77" }}>
                      email (habanerasdelino@gmail.com)
                    </span>{" "}
                    or by{" "}
                    <span style={{ color: "#244c77" }}>
                      WhatsApp/Phone (+1 941 447 5126)
                    </span>
                  </p>
                </Col>
              </Row>
            </>
          ) : (
            <div></div>
          )}

          {coupon !== null && coupon.discount_type == "POR CIENTO" ? (
            <>
              <Row className={styles.row_final_price}>
              {amount_of_products >= coupon.how_many_items ? (
                <p>
                  Price after coupon: ${cart.cost - cart.cost * coupon.discount}
                </p>
                ) : (
                  <p>
                    The coupon is active but it will only apply when there are
                    more than {coupon.how_many_items} units (products) in the cart.
                  </p>
                )}
                
              </Row>
            </>
          ) : (
            <div></div>
          )}

          {coupon !== null && coupon.discount_type == "FIJO" ? (
            <>
              <Row className={styles.row_final_price}>
                {amount_of_products >= coupon.how_many_items ? (
                  <p>
                    Price after applying coupon: ${cart.cost - coupon.discount}
                  </p>
                ) : (
                  <p>
                    The coupon is active but it will only apply when there are
                    more than {coupon.how_many_items} units (products) in the cart.
                  </p>
                )}
              </Row>
            </>
          ) : (
            <div></div>
          )}

          <Row className={styles.row_final_buttons}>
            <Col xs={12} sm={12} md={6} lg={6}>
              <Link href={`/order/`}>
                <Button
                  className={`${styles.button_main} ${styles.order_button}`}
                >
                  Checkout
                </Button>
              </Link>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <Button
                className={`${styles.button_main} ${styles.delete_order_button}`}
                onClick={(e) => onDeleteCartHandler(e)}
              >
                Delete Cart
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CartDetail;
