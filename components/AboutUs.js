import Link from "next/link";
import Image from "next/image";
import { Card, Button, Modal } from "react-bootstrap";

import { useEffect, useState } from "react";

import { useLanguage } from "../context/LanguageContext";

import styles from "../styles/AboutUs.module.css";

const language_dictionary = (lan, key) => {
  if (lan == "en") {
    if (key == "about") {
      return (
        <p className={styles.about_p}>
          <strong>Habaneras de Lino</strong> commercializes a Mexican brand that
          offers its customers an experience of comfort, luxury ,and modernity.
          Initially inspired by the typical Cuban garment: the{" "}
          <strong>guayabera</strong>, it exceeded itself and went beyond this
          culture, while elegantly mixing <strong>linen</strong> and{" "}
          <strong>cotton</strong> with natural and fresh fibers that reminds of
          the Caribbean, and with a touch of originality that makes a
          distinction of the brand, and that allows it to be positioned as a
          leader in e-commerce in any part of the world.
        </p>
      );
    }
  } else {
    if (key == "about") {
      return (
        <p className={styles.about_p}>
          <strong>Habaneras de Lino</strong> comercializa una marca mexicana que
          ofrece a sus clientes una experiencia de confort, lujo y modernidad.
          Inicialmente inspirada en la prenda típica cubana: la{" "}
          <strong>guayabera</strong>, fue capaz de superarse e ir más allá de
          esta cultura, combinando elegantemente <strong>lino</strong> y{" "}
          <strong>algodón</strong> con fibras naturales y frescas que recuerdan
          al Caribe, y con un toque de originalidad que hacen una distinción de
          la marca y le permite posicionarse como líder en comercio en cualquier
          parte del mundo.
        </p>
      );
    }
  }
};

const AboutUs = () => {
  const { language } = useLanguage();
  return (
    <>
      <div className={styles.br} />
      <div className={styles.about_div} id="about_store">
        <h2 className={styles.about_title}>
          <span className={styles.about_title_span}>
            {language == "en" ? "About Us" : "Sobre Nosotros"}
          </span>
        </h2>
        <div className={styles.about_p_div}>
          {language_dictionary(language, "about")}
        </div>
      </div>
    </>
  );
};

export default AboutUs;
