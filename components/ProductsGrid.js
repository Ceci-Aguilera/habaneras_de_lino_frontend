import Link from "next/link";
import Image from "next/image";
import styles from "../styles/ProductsGrid.module.css";
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

import { useLanguage } from "../context/LanguageContext";

const RightArrowIcon = (props) => (
  <svg
    aria-hidden="true"
    data-prefix="fas"
    data-icon="arrow-right"
    className="svg-inline--fa fa-arrow-right fa-w-14"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    {...props}
  >
    <path
      fill="white"
      d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
    />
  </svg>
);

const LeftArrowIcon = (props) => (
  <svg
    aria-hidden="true"
    data-prefix="fas"
    data-icon="arrow-left"
    className="svg-inline--fa fa-arrow-left fa-w-14"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    {...props}
  >
    <path
      fill="white"
      d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
    />
  </svg>
);

const ProductsGrid = ({ products, tag = "a" }) => {
  const { language } = useLanguage();

  const [pageNumber, setPageNumber] = useState(1);
  const [revNumber] = useState(12);
  const [paginatedRevs, setPaginatedRevs] = useState([]);
  const [maxAmountOfPages, setMaxAmountOfPages] = useState(1);

  useEffect(async () => {
    const currentPageNumber = pageNumber * revNumber - revNumber;
    const temp_products = [...products];
    setPaginatedRevs(temp_products.slice(currentPageNumber, revNumber));
    setMaxAmountOfPages(Math.ceil(products.length / revNumber));
  }, []);

  const handlePrev = () => {
    if (pageNumber === 1) return;
    const newPageNumber = pageNumber - 1;
    setPageNumber(newPageNumber);
    const currentPageNumber = newPageNumber * revNumber - revNumber;
    const temp_products = [...products];
    setPaginatedRevs(
      temp_products.slice(currentPageNumber, currentPageNumber + revNumber)
    );
  };
  const handleNext = () => {
    const newPageNumber = pageNumber + 1;
    if (newPageNumber * revNumber > products.length) {
      if (pageNumber * revNumber < products.length) {
        setPageNumber(newPageNumber);
        const currentPageNumber = newPageNumber * revNumber - revNumber;
        const temp_products = [...products];
        setPaginatedRevs(
          temp_products.slice(currentPageNumber, products.length)
        );
      }
      return;
    }
    setPageNumber(newPageNumber);
    const currentPageNumber = newPageNumber * revNumber - revNumber;
    const temp_products = [...products];
    setPaginatedRevs(
      temp_products.slice(currentPageNumber, newPageNumber * revNumber)
    );
  };

  return products == null ? (
    <div></div>
  ) : (
    <div className={styles.productsGridContainer}>
      <Row className={styles.row}>
        {paginatedRevs.map((prod, index) => {
          if (tag == "a") {
            return (
              <Col
                key={index}
                xs={12}
                sm={12}
                md={4}
                lg={3}
                className={styles.productCol}
              >
                <Link href={`/product/${prod.id}/`}>
                  <Card className={styles.card}>
                    <div className={styles.img_container}>
                      <Card.Img
                        variant="top"
                        src={prod.image}
                        className={styles.card_image}
                        alt={prod.title}
                      />
                      <Card.Img
                        variant="top"
                        src={prod.s_image}
                        className={styles.card_image_s}
                        alt={prod.title}
                      />
                    </div>

                    <Card.Footer className={styles.card_footer}>
                      <div className={styles.prod_price_div}>
                        ${parseFloat(prod.price).toFixed(2)}
                      </div>
                      {/* <div className={styles.prod_coll_div}>${prod.collection[0]}</div> */}
                    </Card.Footer>
                  </Card>
                </Link>
              </Col>
            );
          } else if (tag == "w" && prod.extra_tag == "WOMEN") {
            return (
              <Col
                key={index}
                xs={12}
                sm={12}
                md={4}
                lg={3}
                className={styles.productCol}
              >
                <Link href={`/product/${prod.id}/`}>
                  <Card className={styles.card}>
                    <div className={styles.img_container}>
                      <Card.Img
                        variant="top"
                        src={prod.image}
                        className={styles.card_image}
                        alt={prod.title}
                      />
                      <Card.Img
                        variant="top"
                        src={prod.s_image}
                        className={styles.card_image_s}
                        alt={prod.title}
                      />
                    </div>

                    <Card.Footer className={styles.card_footer}>
                      ${parseFloat(prod.price).toFixed(2)}
                    </Card.Footer>
                  </Card>
                </Link>
              </Col>
            );
          } else if (tag == "m" && prod.extra_tag == "MEN") {
            return (
              <Col
                key={index}
                xs={12}
                sm={12}
                md={4}
                lg={3}
                className={styles.productCol}
              >
                <Link href={`/product/${prod.id}/`}>
                  <Card className={styles.card}>
                    <div className={styles.img_container}>
                      <Card.Img
                        variant="top"
                        src={prod.image}
                        className={styles.card_image}
                        alt={prod.title}
                      />
                      <Card.Img
                        variant="top"
                        src={prod.s_image}
                        className={styles.card_image_s}
                        alt={prod.title}
                      />
                    </div>

                    <Card.Footer className={styles.card_footer}>
                      ${parseFloat(prod.price).toFixed(2)}
                    </Card.Footer>
                  </Card>
                </Link>
              </Col>
            );
          }
        })}
      </Row>
      <div className={styles.rev__pagination_div}>
        <div className={styles.rev__buttons_div}>
          {pageNumber != 1 ? (
            <Button
              variant="primary"
              className={styles.rev__prev_button}
              onClick={() => handlePrev()}
            >
              <LeftArrowIcon width={20} height={20} /> Prev
            </Button>
          ) : (
            <div />
          )}

          {pageNumber != maxAmountOfPages ? (
            <Button
              variant="primary"
              className={styles.rev__next_button}
              onClick={() => handleNext()}
            >
              Next <RightArrowIcon width={20} height={20} />
            </Button>
          ) : (
            <div />
          )}
        </div>
        <div className={styles.rev__page_number_div}>
          <div className={styles.rev__page_number_dummy_div}>
            <p className={styles.rev__page_number_p}>
              {language == "en"
                ? "Page " + pageNumber + " of " + maxAmountOfPages
                : "Página " + pageNumber + " de " + maxAmountOfPages}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsGrid;
