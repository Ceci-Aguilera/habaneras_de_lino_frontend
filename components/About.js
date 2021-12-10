import Link from "next/link";
import Image from "next/image";
import {
  Card,
  Button,
  Modal
} from "react-bootstrap";

import {useEffect, useState} from 'react'

import styles from "../styles/About.module.css";



const About = () => {


  return (
    <>
    <div className={styles.about_div} id='about'>
      <h2 className={styles.about_title}><span className={styles.about_title_span}>About Us</span></h2>
      <div className={styles.about_p_div}>
        <p className={styles.about_p}>
          Habaneras de Lino es una tienda online que se especializa en ropa de Lino.
        </p>
        <div className={styles.button_div}>
          
        </div>
      </div>
    </div>

 
</>
  );

};




export default About;