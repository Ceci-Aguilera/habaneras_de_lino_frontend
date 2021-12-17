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
            Our {"sell's"} policy allows and encourages wholesalers to buy using
            our website. For such clients we offer specific discounts when
            buying at least 12 units. The kind and the amount of the discount
            depend on the number of units (products) in the desired purchase,
            but our main and most popular discounts are for purchases of 12
            units, 24 units, 50 units, and +50 units. To know more about these offers
            and discounts, contact us via{" "}
            <span style={{ color: "#244c77" }}>
              email (habanerasdelino@gmail.com)
            </span>{" "}
            or by{" "}
            <span style={{ color: "#244c77" }}>
              WhatsApp/Phone (+1 941 447 5126)
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Offers;
