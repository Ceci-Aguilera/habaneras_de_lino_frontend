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
import { fas, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'

import tallas from '../public/images/tallas.jpeg'


const domain = process.env.NEXT_PUBLIC_API_DOMAIN_NAME;

const NextNavbar = ({show_second_navbar=false}) => {
  const { cart } = useCart()


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return(
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className={`${styles.navbar} ${mstyles.scolor} ${mstyles.itshape}`}
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Brand
            className={`navbar-brand d-lg-none ${styles.smallBrand}`}
            href="/"
          >
            Habaneras de Lino
          </Navbar.Brand>

          <Navbar.Collapse id="responsive-navbar-nav" className={`${mstyles.scolor} ${mstyles.itshape} ${styles.nav_res}`}>
            <>
              <Nav className={`${styles.navbar_nav} mx-auto order-0`}>
                <Nav.Link className={styles.linkItem} href="/#about">
                  <p>About Us</p>
                </Nav.Link>

                <Navbar.Brand
                  className={`d-none d-lg-block mx-auto ${styles.brand}`}
                  href="/"
                >
                  Habaneras de Lino
                </Navbar.Brand>

                <Nav.Link className={styles.linkItem} href="/#footer">
                  <p>Contact Us</p>
                </Nav.Link>

                <Nav.Item className={styles.linkItem} onClick={handleShow}>
                  <p>Find Size</p>
                </Nav.Item>
              </Nav>
              <Nav className={`mr-auto ${styles.cart_nav}`}>
                <Nav.Link className={styles.linkItem} href="/cart">
                  <p className={`${styles.shoppingCartp}`}>
                    <FontAwesomeIcon icon={faShoppingCart} className={`${styles.icon}`} /><small>{(cart == null) ? 0 : cart.products.length}</small>
                  </p>
                </Nav.Link>

              </Nav>
            </>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <h3 className={styles.br_sty}></h3>

      <Modal show={show} onHide={handleClose} className={styles.modal}>
        <Modal.Header closeButton>
          <Modal.Title>Size</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={tallas} className={styles.tallas_image} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NextNavbar;