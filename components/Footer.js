import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Footer.module.css";
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
)


const MobileCallIcon = (props) => (
  <svg
  aria-hidden="true"
  data-prefix="fas"
  data-icon="phone-alt"
  className="svg-inline--fa fa-phone-alt fa-w-16"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 512 512"
  {...props}
>
  <path
    fill="white"
    d="M497.39 361.8l-112-48a24 24 0 00-28 6.9l-49.6 60.6A370.66 370.66 0 01130.6 204.11l60.6-49.6a23.94 23.94 0 006.9-28l-48-112A24.16 24.16 0 00122.6.61l-104 24A24 24 0 000 48c0 256.5 207.9 464 464 464a24 24 0 0023.4-18.6l24-104a24.29 24.29 0 00-14.01-27.6z"
       />
</svg>

)



const EmailIcon = (props) => (
  <svg
  aria-hidden="true"
  data-prefix="fas"
  data-icon="envelope"
  className="svg-inline--fa fa-envelope fa-w-16"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 512 512"
  {...props}
>
  <path
    fill="white"
    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
   />
</svg>

)



const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <Row className={styles.footerWrapper}>
        <Container className={styles.footerWrapper}>
          <p className={styles.p}>
            Copyright &copy; 2021 HabanerasDeLino All Rights Reserved
          </p>
          <Link href="/">
            <a className={styles.footerLink}>Privacy Policy</a>
          </Link>{" "}
          <Link href="/">
            <a className={styles.footerLink}>Terms</a>
          </Link>{" "}
        </Container>
      </Row>
      <Row className={styles.contactUsRow}>
        <Col xs={12} sm={12} md={12} lg={12} className={styles.contactUsCol}>
          <p className={styles.contactUsColP}>
            Contact us at
          </p>
        </Col>
        <Col xs={12} sm={12} md={4} lg={4} className={styles.contactUsInfoCol}>
          <p className={styles.contactUsP}>
           <EmailIcon width={25} height={25} /> sales@habanerasdelino.com
          </p>
        </Col>

        <Col xs={12} sm={12} md={4} lg={4} className={styles.contactUsInfoCol}>
        <WhatsAppIcon width={30} height={30} /> +1 941 447 5126
        </Col>

        <Col xs={12} sm={12} md={4} lg={4} className={styles.contactUsInfoCol}>
          <MobileCallIcon width={20} height={20} /> +1 941 447 5126
        </Col>

      </Row>

      <Row className={styles.developer_row} >
        <p className={styles.p}>
          Developed by Cecilia Fernandez Aguilera
        </p>
      </Row>
    </footer>
  );
};

export default Footer;
