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

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { useLanguage } from "../context/LanguageContext";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const CategoryGrid = ({ categories, tag = "a" }) => {
  const { language } = useLanguage();

  return categories == null ? (
    <div />
  ) : (
    <Container className={`${styles.categoryGridContainer}`}>
      <div className={styles.br} />
      <Row className={styles.row}>
        {categories.map((cat, index) => {
          return (
            <div key={index}>
              {cat.products.length >= 6 ? (
                <div>
                  <h3 className={styles.collection_title}>
                    {language == "en" && cat.title == "Camisas" ? "Shirts" : ""}
                    {language == "en" && cat.title == "Pantalones"
                      ? "Pants"
                      : ""}

                    {language == "en" &&
                    cat.title != "Camisas" &&
                    cat.title != "Pantalones"
                      ? cat.title
                      : ""}
                    {language == "es" ? cat.title : ""}
                  </h3>
                  <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={5000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={"desktop"}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    className={styles.carousel}
                  >
                    {cat.products
                      .slice(0, cat.products.length / 2)
                      .map((prod, prod_index) => {
                        return (
                          <div key={prod_index}>
                            {tag == "a" ? (
                              <div className={styles.carousel_item_div}>
                                <Link href={`/product/${prod.id}/`}>
                                  <Card className={styles.card}>
                                    <Card.Img
                                      variant="top"
                                      src={prod.image}
                                      className={styles.card_coll_image}
                                      alt={prod.title}
                                    />
                                  </Card>
                                </Link>
                              </div>
                            ) : (
                              <div />
                            )}

                            {tag == "w" && prod.extra_tag == "WOMEN" ? (
                              <div className={styles.carousel_item_div}>
                                <Link href={`/product/${prod.id}/`}>
                                  <Card className={styles.card}>
                                    <Card.Img
                                      variant="top"
                                      src={prod.image}
                                      className={styles.card_coll_image}
                                      alt={prod.title}
                                    />
                                  </Card>
                                </Link>
                              </div>
                            ) : (
                              <div />
                            )}

                            {tag == "m" && prod.extra_tag == "MEN" ? (
                              <div className={styles.carousel_item_div}>
                                <Link href={`/product/${prod.id}/`}>
                                  <Card className={styles.card}>
                                    <Card.Img
                                      variant="top"
                                      src={prod.image}
                                      className={styles.card_coll_image}
                                      alt={prod.title}
                                    />
                                  </Card>
                                </Link>
                              </div>
                            ) : (
                              <div />
                            )}
                          </div>
                        );
                      })}
                  </Carousel>

                  <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={5000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={"desktop"}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    className={styles.carousel}
                  >
                    {cat.products
                      .slice(cat.products.length / 2, cat.products.length)
                      .map((prod, prod_index) => {
                        return (
                          <div key={prod_index}>
                            {tag == "a" ? (
                              <div className={styles.carousel_item_div}>
                                <Link href={`/product/${prod.id}/`}>
                                  <Card className={styles.card}>
                                    <Card.Img
                                      variant="top"
                                      src={prod.image}
                                      className={styles.card_coll_image}
                                      alt={prod.title}
                                    />
                                  </Card>
                                </Link>
                              </div>
                            ) : (
                              <div />
                            )}

                            {tag == "w" && prod.extra_tag == "WOMEN" ? (
                              <div className={styles.carousel_item_div}>
                                <Link href={`/product/${prod.id}/`}>
                                  <Card className={styles.card}>
                                    <Card.Img
                                      variant="top"
                                      src={prod.image}
                                      className={styles.card_coll_image}
                                      alt={prod.title}
                                    />
                                  </Card>
                                </Link>
                              </div>
                            ) : (
                              <div />
                            )}

                            {tag == "m" && prod.extra_tag == "MEN" ? (
                              <div className={styles.carousel_item_div}>
                                <Link href={`/product/${prod.id}/`}>
                                  <Card className={styles.card}>
                                    <Card.Img
                                      variant="top"
                                      src={prod.image}
                                      className={styles.card_coll_image}
                                      alt={prod.title}
                                    />
                                  </Card>
                                </Link>
                              </div>
                            ) : (
                              <div />
                            )}
                          </div>
                        );
                      })}
                  </Carousel>

                  <div className={styles.link_div}>
                    {tag == "a" ? (
                      <Link
                        className={styles.coll_link}
                        href={`/category/${cat.id}/`}
                      >
                        <Button
                          className={styles.coll_link_button}
                          variant="primary"
                        >
                          {language == "en"
                            ? "More " + cat.title
                            : "Más " + cat.title}
                        </Button>
                      </Link>
                    ) : (
                      <div />
                    )}

                    {tag == "w" ? (
                      <Link
                        className={styles.coll_link}
                        href={`/category/${cat.id}/`}
                      >
                        <Button
                          className={styles.coll_link_button}
                          variant="primary"
                        >
                          {language == "en"
                            ? "More " + cat.title
                            : "Más " + cat.title}
                        </Button>
                      </Link>
                    ) : (
                      <div />
                    )}

                    {tag == "m" ? (
                      <Link
                        className={styles.coll_link}
                        href={`/category/${cat.id}/`}
                      >
                        <Button
                          className={styles.coll_link_button}
                          variant="primary"
                        >
                          {language == "en"
                            ? "More " + cat.title
                            : "Más " + cat.title}
                        </Button>
                      </Link>
                    ) : (
                      <div />
                    )}
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className={styles.collection_title}>{cat.title}</h3>
                  <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={5000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={"desktop"}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    className={styles.carousel}
                  >
                    {cat.products.map((prod, prod_index) => {
                      return (
                        <div key={prod_index}>
                          {tag == "a" ? (
                            <div className={styles.carousel_item_div}>
                              <Link href={`/product/${prod.id}/`}>
                                <Card className={styles.card}>
                                  <Card.Img
                                    variant="top"
                                    src={prod.image}
                                    className={styles.card_coll_image}
                                  />
                                </Card>
                              </Link>
                            </div>
                          ) : (
                            <div />
                          )}

                          {tag == "w" && prod.extra_tag == "WOMEN" ? (
                            <div className={styles.carousel_item_div}>
                              <Link href={`/product/${prod.id}/`}>
                                <Card className={styles.card}>
                                  <Card.Img
                                    variant="top"
                                    src={prod.image}
                                    className={styles.card_coll_image}
                                  />
                                </Card>
                              </Link>
                            </div>
                          ) : (
                            <div />
                          )}

                          {tag == "m" && prod.extra_tag == "MEN" ? (
                            <div className={styles.carousel_item_div}>
                              <Link href={`/product/${prod.id}/`}>
                                <Card className={styles.card}>
                                  <Card.Img
                                    variant="top"
                                    src={prod.image}
                                    className={styles.card_coll_image}
                                  />
                                </Card>
                              </Link>
                            </div>
                          ) : (
                            <div />
                          )}
                        </div>
                      );
                    })}
                  </Carousel>

                  <div className={styles.link_div}>
                    {tag == "a" ? (
                      <Link
                        className={styles.coll_link}
                        href={`/category/${cat.id}/`}
                      >
                        <Button
                          className={styles.coll_link_button}
                          variant="primary"
                        >
                          {language == "en"
                            ? "More " + cat.title
                            : "Más " + cat.title}
                        </Button>
                      </Link>
                    ) : (
                      <div />
                    )}

                    {tag == "w" ? (
                      <Link
                        className={styles.coll_link}
                        href={`/category/${cat.id}/`}
                      >
                        <Button
                          className={styles.coll_link_button}
                          variant="primary"
                        >
                          {language == "en"
                            ? "More " + cat.title
                            : "Más " + cat.title}
                        </Button>
                      </Link>
                    ) : (
                      <div />
                    )}

                    {tag == "m" ? (
                      <Link
                        className={styles.coll_link}
                        href={`/category/${cat.id}/`}
                      >
                        <Button
                          className={styles.coll_link_button}
                          variant="primary"
                        >
                          {language == "en"
                            ? "More " + cat.title
                            : "Más " + cat.title}
                        </Button>
                      </Link>
                    ) : (
                      <div />
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </Row>
    </Container>
  );
};

export default CategoryGrid;
