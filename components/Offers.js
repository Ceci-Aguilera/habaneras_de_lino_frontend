import Link from "next/link";
import Image from "next/image";
import { Card, Button, Modal } from "react-bootstrap";

import { useEffect, useState } from "react";

import styles from "../styles/Offers.module.css";

const Offers = () => {
  return (
    <>
      <div className={styles.br} />
      <div className={styles.about_div} id="offers">
        <h2 className={styles.about_title}>
          <span className={styles.about_title_span}>
            {"Wholesaler's Discount"}
          </span>
        </h2>
        <div className={styles.about_p_div}>
          <p className={styles.about_p}>
            Our {"sells'"} policy at <strong>Habaneras de Lino</strong> allows
            and encourages wholesalers to buy <strong>guayaberas</strong> and
            other <strong>linen and cotton clothing</strong> using our website.
            For such clients we offer specific discounts when buying at least 12
            units. The kind and the amount of the discount depend on the number
            of units (products) in the desired purchase, but our main and most
            popular discounts are for purchases of 12 units, 24 units, 50 units,
            and +50 units. To know more about these offers and discounts,
            contact us via{" "}
            <span style={{ color: "#244c77" }}>
              email (habanerasdelino@gmail.com)
            </span>{" "}
            or by{" "}
            <span style={{ color: "#244c77" }}>
              WhatsApp/Phone (+1 941 447 5126)
            </span>
          </p>
          <p>
            Because all of our products are carefully made by hand, we welcome
            clients to ask for customizations beyond the ones offered in our
            website. We can accept specific requests of a product in a different
            size/color or with different decorative shapes than the ones already
            in stock. To know more about this policy or to order a customized
            product contact us at{" "}
            <span style={{ color: "#244c77" }}>habanerasdelino@gmail.com</span>{" "}
            or by{" "}
            <span style={{ color: "#244c77" }}>
              WhatsApp/Phone (+1 941 447 5126)
            </span>
            . These products usually arrive about 8 to 15 days after the
            purchase is made (see our{" "}
            <Link href={"/#about_shipping"}>shipping policy</Link> for more
            information about this regard).
          </p>
        </div>
      </div>
    </>
  );
};

export default Offers;
