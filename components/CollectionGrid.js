import Link from "next/link";
import Image from "next/image";
import styles from "../styles/CollectionGrid.module.css";
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

const CollectionGrid = ({ collections, tag = "a" }) => {
  console.log(collections);

  return collections == null ? (
    <div></div>
  ) : (
    <>
      {collections.map((collectionInfo, index) => {
        return (
          <div key={index}>
            {collectionInfo.all_products_per_collection.length >= 6 ? (
              <Container className={`${styles.categoryGridContainer}`}>
                <h2 className={styles.about_title}>
                  {collectionInfo.title} Collection
                </h2>

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
                  {collectionInfo.all_products_per_collection
                    .slice(
                      0,
                      collectionInfo.all_products_per_collection.length / 2
                    )
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
                            <div></div>
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
                            <div></div>
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
                            <div></div>
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
                  {collectionInfo.all_products_per_collection
                    .slice(
                      collectionInfo.all_products_per_collection.length / 2,
                      collectionInfo.all_products_per_collection.length
                    )
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
                            <div></div>
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
                            <div></div>
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
                            <div></div>
                          )}
                        </div>
                      );
                    })}
                </Carousel>
                <div className={styles.link_div}>
                  <Link
                    className={styles.coll_link}
                    href={`/collection/${collectionInfo.id}/`}
                  >
                    <Button
                      className={styles.coll_link_button}
                      variant="primary"
                    >
                      View More of {collectionInfo.title}
                    </Button>
                  </Link>
                </div>
                <div className={styles.small_br} />
              </Container>
            ) : (
              <Container className={`${styles.categoryGridContainer}`}>
                <h2 className={styles.about_title}>
                  {collectionInfo.title} Collection
                </h2>
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
                  {collectionInfo.all_products_per_collection.map(
                    (prod, prod_index) => {
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
                            <div></div>
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
                            <div></div>
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
                            <div></div>
                          )}
                        </div>
                      );
                    }
                  )}
                </Carousel>
              </Container>
            )}
          </div>
        );
      })}
    </>
  );
};

export default CollectionGrid;
