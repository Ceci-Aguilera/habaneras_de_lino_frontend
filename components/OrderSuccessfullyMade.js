import Link from "next/link";
import Image from "next/image";
import styles from "../styles/OrderSuccessfullyMade.module.css";
import { Container, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import router from "next/router";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";

const OrderSuccessfullyMade = () => {
  const { cart } = useCart();
  const { language } = useLanguage();

  return (
    <Container className={styles.OrderSuccessfullyMadeContainer}>
      <Card className={styles.card}>
        <Card.Body className={styles.card_body}>
          {language == "en"
            ? "Order successfully made"
            : "Orden hecha exitosamente"}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default OrderSuccessfullyMade;

