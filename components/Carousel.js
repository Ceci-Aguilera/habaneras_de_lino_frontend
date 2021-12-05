import Link from "next/link";
import Image from "next/image";
import {
  Carousel
} from "react-bootstrap";

import styles from "../styles/NextCarousel.module.css";

import Slide1 from '../public/images/Slide1.jpg'
import Slide2 from '../public/images/Slide2.jpg'
import Slide3 from '../public/images/Slide3.jpg'
import Slide4 from '../public/images/Slide4.jpg'
import Slide5 from '../public/images/Slide5.jpg'
import Slide6 from '../public/images/Slide6.jpg'

const NextCarousel = () => {

  return (
    <div className={styles.carousel_div}>
      <Carousel className={styles.carousel}>
        <Carousel.Item className={`${styles.slide}`}>
          <Image
            className={`d-block w-100 ${styles.slideImage}`}
            src={Slide1}
            alt="First slide"
          />
          <Carousel.Caption className={styles.caption}>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={`${styles.slide}`}>
          <Image
            className={`d-block w-100 ${styles.slideImage}`}
            src={Slide3}
            alt="First slide"
          />

          <Carousel.Caption className={styles.caption}>
            {/* <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={`${styles.slide}`}>
          <Image
            className={`d-block w-100 ${styles.slideImage}`}
            src={Slide4}
            alt="First slide"
          />

          <Carousel.Caption className={styles.caption}>
            {/* <h3>Fourth slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={`${styles.slide}`}>
          <Image
            className={`d-block w-100 ${styles.slideImage}`}
            src={Slide5}
            alt="First slide"
          />

          <Carousel.Caption className={styles.caption}>
            {/* <h3>Fifth slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={`${styles.slide}`}>
          <Image
            className={`d-block w-100 ${styles.slideImage}`}
            src={Slide6}
            alt="First slide"
          />

          <Carousel.Caption className={styles.caption}>
            {/* <h3>Sixth slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>

  );

};




export default NextCarousel;