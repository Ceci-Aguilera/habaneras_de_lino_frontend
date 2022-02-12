import Link from "next/link";
import Image from "next/image";
import styles from "../styles/NextNavbar.module.css";
import mstyles from "../styles/main.module.css";
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
  Modal,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import router from "next/router";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";
import { fas, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faCoffee } from "@fortawesome/fontawesome-free-solid";

import navbarImage from "../public/images/Navbar/LUX4A.jpg";

import tallas from "../public/images/tallas.jpeg";

const SvgComponent = (props, color) => (
  <svg
    aria-hidden="true"
    data-prefix="fas"
    data-icon="shopping-cart"
    className="svg-inline--fa fa-shopping-cart fa-w-18"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
    {...props}
  >
    <path
      fill={color}
      d="m528.12 301.319 47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
    />
  </svg>
);

const domain = process.env.NEXT_PUBLIC_API_DOMAIN_NAME;

const NextNavbar = ({ show_second_navbar = false, navy= true }) => {
  const { cart } = useCart();
  const { language, setCustomLanguage } = useLanguage();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const languageHandler = (lan) => {
    setCustomLanguage(lan);
  };

  console.log(navy)

  return (navy == null ||  navy == undefined)?<div></div>:(
    <>
      <div className={styles.navbar_wrapper}>
        <div className={styles.top_navbar_border}>
          <p className={styles.lan_p}>
            <Button
              className={styles.lan_button}
              onClick={(e) => setCustomLanguage("es")}
            >
              ESPAÑOL
            </Button>{" "}
            /{" "}
            <Button
              className={styles.lan_button}
              onClick={(e) => setCustomLanguage("en")}
            >
              ENGLISH
            </Button>
          </p>
        </div>
        <Navbar
          collapseOnSelect
          expand="md"
          bg="light"
          variant="light"
          className={`${styles.navbar} ${navy?styles.navbar_navy:styles.navbar_white}`}
        >
          <Container>
            {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}

            <Navbar.Brand
              className={`navbar-brand d-md-none ${styles.brand_small}`}
              href="/"
            >
              Habaneras
            </Navbar.Brand>

            <Navbar.Brand
              className={`navbar-brand d-md-none ${styles.brand_small}`}
              href="/"
            >
              de
            </Navbar.Brand>

            <Navbar.Brand
              className={`navbar-brand d-md-none ${styles.brand_small}`}
              href="/"
            >
              Lino
            </Navbar.Brand>

            <Nav.Link
              className={`d-md-none  ${styles.navbar_link_item} ${
                styles.navbar_cart
              }`}
              href="/cart"
            >
              <SvgComponent
                className={styles.navbar_cart_svg}
                width={50}
                height={50}
                fill={"white"}
              />
              <span className={styles.cart_count}>
                {cart == null ? "+" : cart.products.length}
              </span>
            </Nav.Link>

            <Navbar.Collapse
              id="responsive-navbar-nav"
              className={`${styles.navbar_collapse}`}
            >
              <Nav className={`${styles.navbar_brand_nav} mx-auto order-0`}>
                <Navbar.Brand
                  className={`d-none d-md-block mx-auto ${styles.brand} ${navy?styles.brand_navy:styles.brand_white}`}
                  href="/"
                >
                  Habaneras de Lino
                </Navbar.Brand>
              </Nav>
              <Nav className={`mr-auto ${styles.navbar_cart}`}>
                <Nav.Link className={styles.navbar_link_item} href="/cart">
                  <SvgComponent
                    className={styles.navbar_cart_svg}
                    width={50}
                    height={50}
                    fill={"white"}
                  />
                  <span className={`${styles.cart_count} ${navy?styles.brand_navy:styles.brand_white}`}>
                    {cart == null ? "+" : cart.products.length}
                  </span>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default NextNavbar;
