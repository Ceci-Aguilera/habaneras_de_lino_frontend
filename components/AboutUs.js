import Link from "next/link";
import Image from "next/image";
import { Card, Button, Modal } from "react-bootstrap";

import { useEffect, useState } from "react";

import styles from "../styles/AboutUs.module.css";

const AboutUs = () => {
  return (
    <>
      <div className={styles.br} />
      <div className={styles.about_div} id="about_store">
        <h2 className={styles.about_title}>
          <span className={styles.about_title_span}>About Us</span>
        </h2>
        <div className={styles.about_p_div}>
          <p className={styles.about_p}>
            We decided to market a Mexican brand that would offer its customers
            an experience of comfort, luxury and modernity. Initially inspired
            by the typical Cuban garment: the guayabera, it exceeded itself and went
            beyond this culture, elegantly mixing linen and cotton with natural
            and fresh fibers that remind us of the Caribbean, and with a touch of
            originality that makes a distinction of the brand and that allows it
            to be positioned as a leader in e-commerce in any part of the world.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
