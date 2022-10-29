import Link from "next/link";
import Image from "next/image";
import styles from "../styles/SecondaryNavbar.module.css";
import mstyles from "../styles/main.module.css";
import {
  Nav,
  Navbar,
  Dropdown,
  NavDropdown,
  Modal,
  Button,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

import tallas from "../public/images/tallas.jpeg";

import { useRouter } from "next/router";

import { useLanguage } from "../context/LanguageContext";

const WhatsAppIcon = (props) => (
  <svg
    aria-hidden="true"
    data-prefix="fab"
    data-icon="whatsapp"
    className="svg-inline--fa fa-whatsapp fa-w-14"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    {...props}
  >
    <path
      fill="white"
      d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
    />
  </svg>
);

const LeftArrowIcon = (props) => (
  <svg
    aria-hidden="true"
    data-prefix="fas"
    data-icon="arrow-left"
    lassName="svg-inline--fa fa-arrow-left fa-w-14"
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

const domain = process.env.NEXT_PUBLIC_API_DOMAIN_NAME;

const SecondaryNavbar = ({ navbarShow = true, linkBackShow = true, navy= true }) => {
  const { language } = useLanguage();

  const router = useRouter();

  const [dropDownInfo, setDropDownInfo] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(async () => {
    await getDropDownInfo(setDropDownInfo);
  }, []);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="#244c77"
        variant="dark"
        className={`${styles.navbar} ${navy?styles.navbar_navy:styles.navbar_white}`}
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse
          id="responsive-navbar-nav"
          className={styles.navbar_collapse}
        >
          <Nav className={`mx-auto ${styles.navbar_nav}`}>
            {/* <NavDropdown
              title="WEDDING"
              className={styles.navbar_navdropdown}
              menuVariant="dark"
              active={true}
            >
              <NavDropdown.Item>Groom</NavDropdown.Item>

              <NavDropdown.Item>Bride</NavDropdown.Item>

              <NavDropdown.Item>Groomsmen</NavDropdown.Item>

              <NavDropdown.Item>Accessories</NavDropdown.Item>
            </NavDropdown> */}

            {linkBackShow === true ? (
          <Navbar.Brand
            className={`navbar-brand ${styles.brand_small} ${
              styles.navbar_link
            }`}
            onClick={(e) => router.back()}
          >
            <LeftArrowIcon width={20} height={20} />{" "}
            {language == "en" ? "BACK" : "Atrás"}
          </Navbar.Brand>
        ) : (
          <div />
        )}

            <NavDropdown
              title={language == "en" ? "WOMEN" : "MUJERES"}
              className={styles.navbar_navdropdown}
              menuVariant="dark"
              active={true}
            >
              <NavDropdown.Item href="#">
                {language == "en" ? "Soon in Stock" : "Pronto en Stock"}
              </NavDropdown.Item>

              {/* <NavDropdown
                title="Collections"
                className={styles.navbar_navdropdown}
                menuVariant="dark"
                drop="end"
                active={true}
              >
                <NavDropdown.Item href="/collection-title/Romance">Romance</NavDropdown.Item>

                <NavDropdown.Item>Navy</NavDropdown.Item>

                <Dropdown.Divider />

                <NavDropdown.Item href="/collection-title/Zen">Zen</NavDropdown.Item>

                <NavDropdown.Item>Fuchsia</NavDropdown.Item>

                <NavDropdown.Item>Valladolid</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown.Item href="/category-title/enzo-women/Vestidos">Dresses</NavDropdown.Item>

              <NavDropdown.Item href="/category-title/enzo-women/Blusas">Blouses/Shirts</NavDropdown.Item>

              <NavDropdown.Item href="/category-title/enzo-women/Pantalones">Pants</NavDropdown.Item>

              <NavDropdown.Item>Accessories</NavDropdown.Item>

              <NavDropdown.Item href="/enzo-women">All</NavDropdown.Item> */}
            </NavDropdown>

            <NavDropdown
              title={language == "en" ? "MEN" : "HOMBRES"}
              className={styles.navbar_navdropdown}
              menuVariant="dark"
              active={true}
            >
              <NavDropdown
                title={language == "en" ? "Collections" : "Colecciones"}
                className={styles.navbar_navdropdown}
                menuVariant="dark"
                drop="end"
                active={true}
              >
                <NavDropdown.Item href="/collection-title/Luxury">
                  Luxury
                </NavDropdown.Item>

                <NavDropdown.Item href="/collection-title/Etnik">
                  Etnik
                </NavDropdown.Item>

                <NavDropdown.Item href="/collection-title/Cittadino">
                  Cittadino
                </NavDropdown.Item>

                <Dropdown.Divider />

                <NavDropdown.Item href="/collection-title/Cancun">
                  Cancun
                </NavDropdown.Item>

                <NavDropdown.Item href="/collection-title/Valladolid">
                  Valladolid
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown.Item href="/category-title/enzo-men/Guayaberas">
                Guayaberas
              </NavDropdown.Item>

              <NavDropdown.Item href="/category-title/enzo-men/Guayamisas">
                Guayamisas
              </NavDropdown.Item>

              <NavDropdown.Item href="/category-title/enzo-men/Camisas">
                {language == "en" ? "Shirts" : "Camisas"}
              </NavDropdown.Item>

              <NavDropdown.Item href="/category-title/enzo-men/Pantalones">
                {language == "en" ? "Pants" : "Pantalones"}
              </NavDropdown.Item>

              <NavDropdown.Item>
                {language == "en" ? "Accessories" : "Accesorios"}
              </NavDropdown.Item>

              <NavDropdown.Item href="/enzo-men">
                {language == "en" ? "All" : "Todo"}
              </NavDropdown.Item>
            </NavDropdown>

            {/* <Nav.Link href="#" className={styles.navbar_link}>
              COLLECTION 2022
            </Nav.Link> */}
          {/* </Nav> */}

          {/* <Nav className={`mx-auto order-0  ${styles.navbar_contact_nav}`}> */}
            <Nav.Link
              href="/#offers"
              className={`${styles.navbar_link} ${styles.navbar_link_modal}`}
            >
              {language == "en"
                ? "WHOLESALER DICOUNTS"
                : "DESCUENTOS MOYORISTAS"}
            </Nav.Link>

            <Nav.Link
              href="/#about_store"
              className={`${styles.navbar_link} ${styles.navbar_link_modal}`}
            >
              {language == "en" ? "ABOUT US" : "SOBRE NOSOTROS"}
            </Nav.Link>

            <Nav.Link
              href="/#about_shipping"
              className={`${styles.navbar_link} ${styles.navbar_link_modal}`}
            >
              {language == "en" ? "SHIPPING" : "ENVIO"}
            </Nav.Link>

            <Nav.Link
              href="#"
              className={`${styles.navbar_link} ${styles.navbar_link_modal}`}
              onClick={handleShow}
            >
              {language == "en" ? "FIND SIZE" : "TALLAS"}
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Modal className={styles.modal} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Find Size</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={tallas} />
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

const getDropDownInfo = async (setDropDownInfo) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const dropdown_info_url = domain + `store/products-extra-tags/`;
  axios
    .get(dropdown_info_url, config)
    .then(async (res) => {
      const result = await res.data;
      setDropDownInfo(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default SecondaryNavbar;
