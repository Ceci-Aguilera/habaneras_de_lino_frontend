import Link from "next/link";
import Image from "next/image";
import { Card, Button, Modal } from "react-bootstrap";

import { useEffect, useState } from "react";

import { useLanguage } from "../context/LanguageContext";

import styles from "../styles/About.module.css";

const language_dictionary = (lan, key) => {
  if (lan == "en") {
    if (key == "shipping") {
      return (
        <p className={styles.about_p}>
          Once a purchase is made in the website{" "}
          <strong>Habaneras de Lino</strong>, it takes from 7 days to two weeks
          for the products to arrive (to the client). Note that most of our
          products are first hand-made in Mexico, and then imported to the USA
          (all decorative shapes embedded in our <strong>guayaberas</strong> and{" "}
          <strong>guayamisas</strong> are hand-made, as well as all our{" "}
          <strong>linen</strong> and <strong>cotton</strong> clothes that can be
          found in our website). After arriving to the United States, the
          products are send to the client via UPS or a similar service. This
          only applies to the products that are already in stock, that is, all
          products that can be selected using our website{" "}
          <strong>Habaneras de Lino</strong>.
        </p>
      );
    } else if (key == "contact") {
      return (
        <>
          <p>
            To ask for a product with a different color/size or decorative
            shapes use the following contact info:
          </p>
          <ul>
            <li>
              <p>
                {" "}
                reach to us at any time at{" "}
                <span style={{ color: "#244c77" }}>
                  (sales@habanerasdelino.com)
                </span>{" "}
                or by{" "}
              </p>
            </li>

            <li>
              <p>
                <span style={{ color: "#244c77" }}>
                  WhatsApp/Phone (+1 941 447 5126)
                </span>
                .
              </p>
            </li>
          </ul>
          <p>
            In this case, it takes from 8 to 15 days for the product to arrive
            to the client.
          </p>
        </>
      );
    }
  } else {
    if (key == "shipping") {
      return (
        <p className={styles.about_p}>
          Una vez realizada la compra en la web{" "}
          <strong>Habaneras de Lino</strong>, los productos tardan entre 10 días
          a 15 días en llegar (al cliente). Tenga en cuenta que la mayoría de
          nuestros productos son fabricados primero a mano en México y luego se
          importan a los EE. UU. (Todas las formas decorativas incrustadas en
          nuestras <strong>guayaberas</strong> y <strong>guayamisas</strong>{" "}
          están hechas a mano, así como toda nuestra{" "}
          <strong>ropa de lino y algodón</strong> que se puede encontrar en
          nuestro sitio web). Después de llegar a Estados Unidos, los productos
          se envían al cliente a través de UPS o un servicio similar. Esto solo
          aplica a los productos que ya se encontraban en stock cuando la compra
          fue hecha, es decir, todos los productos que se pueden seleccionar a
          través de nuestra web <strong>Habaneras de Lino</strong>.
        </p>
      );
    } else if (key == "contact") {
      return (
        <>
          <p>
            Para solicitar un producto con un color/tamaño diferente o formas
            decorativas personalizadas puede utilizar la siguientes vías:
          </p>
          <ul>
            <li>
              <p>
                {" "}
                contáctenos en cualquier momento a nuestro correo{" "}
                <span style={{ color: "#244c77" }}>
                  (sales@habanerasdelino.com)
                </span>{" "}
                o{" "}
              </p>
            </li>

            <li>
              <p>
                <span style={{ color: "#244c77" }}>
                  WhatsApp/Telf (+1 941 447 5126)
                </span>
                .
              </p>
            </li>
          </ul>
          <p>
            En este caso, el producto tarda de 15 a 21 días en llegar al
            cliente.
          </p>
        </>
      );
    }
  }
};

const About = () => {
  const { language } = useLanguage();

  return (
    <>
      <div className={styles.br} />
      <div className={styles.about_div} id="about_shipping">
        <h2 className={styles.about_title}>
          <span className={styles.about_title_span}>
            {language == "en" ? "About Shipping" : "Envío"}
          </span>
        </h2>
        <div className={styles.about_p_div}>
          {language_dictionary(language, "shipping")}
          {language_dictionary(language, "contact")}
        </div>
      </div>
    </>
  );
};

export default About;
