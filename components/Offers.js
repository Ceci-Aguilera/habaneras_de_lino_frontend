import Link from "next/link";
import Image from "next/image";
import { Card, Button, Modal } from "react-bootstrap";

import { useEffect, useState } from "react";

import { useLanguage } from "../context/LanguageContext";

import styles from "../styles/Offers.module.css";

const language_dictionary = (lan, key) => {
  if (lan == "en") {
    if (key == "sells_policy") {
      return (
        <p className={styles.about_p}>
          Our {"sells'"} policy at <strong>Habaneras de Lino</strong> allows and
          encourages wholesalers to buy <strong>guayaberas</strong> and other{" "}
          <strong>linen and cotton clothing</strong> using our website. For such
          clients we offer specific discounts when buying at least 12 units. The
          kind and the amount of the discount depend on the number of units
          (products) in the desired purchase, but our main and most popular
          discounts are for purchases of 12 units, 24 units, 50 units, and +50
          units. To know more about these offers and discounts, contact us via{" "}
          <span style={{ color: "#244c77" }}>
            {" "}
            email (habanerasdelino@gmail.com){" "}
          </span>{" "}
          or by{" "}
          <span style={{ color: "#244c77" }}>
            WhatsApp/Phone (+1 941 447 5126)
          </span>
        </p>
      );
    } else if (key == "shipping") {
      return (
        <p>
          Because all of our products are carefully made by hand, we welcome
          clients to ask for customizations beyond the ones offered in our
          website. We can accept specific requests of a product in a different
          size/color or with different decorative shapes than the ones already
          in stock. To know more about this policy or to order a customized
          product contact us at{" "}
          <span style={{ color: "#244c77" }}>habanerasdelino@gmail.com</span> or
          by{" "}
          <span style={{ color: "#244c77" }}>
            WhatsApp/Phone (+1 941 447 5126)
          </span>
          . These products usually arrive about 8 to 15 days after the purchase
          is made (see our{" "}
          <Link href={"/#about_shipping"}>shipping policy</Link> for more
          information about this regard).
        </p>
      );
    }
  } else {
    if (key == "sells_policy") {
      return (
        <p className={styles.about_p}>
          Nuestra politica de ventas en <strong>Habaneras de Lino</strong>{" "}
          permite y anima a los compradores mayoristas a comprar{" "}
          <strong>guayaberas</strong> y otras{" "}
          <strong>ropas de lino y algodón</strong> a través de nuestro sitio
          web. Para tales clientes ofrecemos descuentos específicos al comprar
          al menos 12 unidades. El tipo y el monto del descuento dependen de la
          cantidad de unidades (productos) en la compra deseada, pero nuestros
          principales y más populares descuentos son para compras de 12
          unidades, 24 unidades, 50 unidades y +50 unidades. Para conocer más
          sobre estas ofertas y descuentos, contáctenos a través de{" "}
          <span style={{ color: "#244c77" }}>
            nuestro correo (habanerasdelino@gmail.com)
          </span>{" "}
          o{" "}
          <span style={{ color: "#244c77" }}>
            WhatsApp/Telf (+1 941 447 5126)
          </span>
        </p>
      );
    } else if (key == "shipping") {
      return (
        <p>
          Debido a que todos nuestros productos están cuidadosamente hechos a
          mano, invitamos a los clientes a solicitar personalizaciones más allá
          de las que se ofrecen en nuestro sitio web. Podemos aceptar
          solicitudes específicas de un producto en un tamaño / color diferente
          o con formas decorativas diferentes a los que ya están en stock. Para
          conocer más sobre esta política o para solicitar un producto
          personalizado contáctenos vía nuestro email{" "}
          <span style={{ color: "#244c77" }}>habanerasdelino@gmail.com</span> o{" "}
          <span style={{ color: "#244c77" }}>
            WhatsApp/Telf (+1 941 447 5126)
          </span>. Estos productos deben arribar al cliente entre 10 y 15 días
          después de realizada la compra (ir a{" "}
          <Link href={"/#about_shipping"}>política de envío</Link> para más
          información).
        </p>
      );
    }
  }
};

const Offers = () => {
  const { language } = useLanguage();
  return (
    <>
      <div className={styles.br} />
      <div className={styles.about_div} id="offers">
        <h2 className={styles.about_title}>
          <span className={styles.about_title_span}>
            {language == "en"
              ? "Wholesaler's Discount"
              : "Descuento para Mayoristas"}
          </span>
        </h2>
        <div className={styles.about_p_div}>
          {true ? language_dictionary(language, "sells_policy") : ""}
          {true ? language_dictionary(language, "shipping") : ""}
        </div>
      </div>
    </>
  );
};

export default Offers;
