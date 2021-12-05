import Link from "next/link";
import Image from "next/image";
import {
  Card
} from "react-bootstrap";

import styles from "../styles/About.module.css";

import Slide1 from '../public/images/Slide1.jpg'
import Slide2 from '../public/images/Slide2.jpg'
import Slide3 from '../public/images/Slide3.jpg'
import Slide4 from '../public/images/Slide4.jpg'
import Slide5 from '../public/images/Slide5.jpg'
import Slide6 from '../public/images/Slide6.jpg'

const About = () => {

  return (
    <div className={styles.about_div} id='about'>
        <h2 className={styles.about_title}><span className={styles.about_title_span}>About Us</span></h2>
        <p className={styles.about_section}>Habaneras de Lino es una tienda virtual para vender ropa de hilo bla bla bla o_o</p>
        
    </div>

  );

};




export default About;