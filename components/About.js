import Link from "next/link";
import Image from "next/image";
import {
  Card,
  Button,
  Modal
} from "react-bootstrap";

import {useEffect, useState} from 'react'

import styles from "../styles/About.module.css";

import tallas from '../public/images/tallas.jpeg'

const About = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className={styles.about_div} id='about'>
      <h2 className={styles.about_title}><span className={styles.about_title_span}>About Us</span></h2>
      <div className={styles.about_p_div}>
        <p className={styles.about_p}>
          Habaneras de Lino es una tienda online que se especializa en ropa de Lino.
        </p>
        <div className={styles.button_div}>
          <Button className={styles.button} onClick={handleShow}>
            Econtrar Talla
          </Button>
        </div>
      </div>
    </div>

    <Modal show={show} onHide={handleClose} className={styles.modal}>
        <Modal.Header closeButton>
          <Modal.Title>Talla</Modal.Title>
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




export default About;