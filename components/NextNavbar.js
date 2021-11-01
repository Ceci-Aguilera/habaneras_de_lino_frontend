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
      bg="dark"
      variant="dark"
      className={styles.navbar}
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Brand
          className={`navbar-brand d-lg-none ${styles.smallBrand}`}
          href="/"
        >
            GuayaberaStyle
        </Navbar.Brand>

        <Navbar.Collapse id="responsive-navbar-nav">
          <>
          <Nav className="ml-auto">
          <p className={styles.linkItemFakish}>
              Cart 0
            </p>
            </Nav>
          <Nav className={`${styles.navbar_nav} mx-auto order-0`}>
            <Nav.Link className={styles.linkItem} href="/">
              About Us
            </Nav.Link>
            <Navbar.Brand
              className={`d-none d-lg-block mx-auto ${styles.brand}`}
              href="/"
            >
                GuayaberaStyle
            </Navbar.Brand>
 
            <Nav.Link className={styles.linkItem} href="#footer">
              Contact Us
            </Nav.Link>
          </Nav>
          <Nav className="mr-auto">
          <Nav.Link className={styles.linkItem} href="/cart">
              Cart {(cart==null)?0:cart.products.length}
            </Nav.Link>
           </Nav>
           </>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NextNavbar;