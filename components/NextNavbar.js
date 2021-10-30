import Link from "next/link";
import Image from "next/image";
import styles from "../styles/NextNavbar.module.css";

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
} from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import router from "next/router";
import { useCart } from "../context/CartContext";

const NextNavbar = () => {
  const {cart} = useCart()

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className={styles.navbar}
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Brand
          className={`navbar-brand d-lg-none ${styles.smallBrand}`}
          href="/"
        >
            GuayaberaStyle
          {/* <Image
            src={truckLogo}
            alt="Logo not available"
            height="150px"
            width="200px"
          ></Image> */}
        </Navbar.Brand>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={styles.navbar_nav} className="m-auto">
            <Nav.Link className={styles.linkItem} href="/how-to">
              HOW TO
            </Nav.Link>
            <Nav.Link className={styles.linkItem} href="/">
              GET A SIGN
            </Nav.Link>
            <Navbar.Brand
              className={`d-none d-lg-block ${styles.brand}`}
              href="/"
            >
                GuayaberaStyle
              {/* <Image
                src={truckLogo}
                alt="Logo not available"
                height="150px"
                width="200px"
              ></Image> */}
            </Navbar.Brand>
            <Nav.Link className={styles.linkItem} href="/cart">
              Cart {(cart==null)?0:cart.products.length}
            </Nav.Link>
            <Nav.Link className={styles.linkItem} href="#footer">
              CONTACT US
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NextNavbar;