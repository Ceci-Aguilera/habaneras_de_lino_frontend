import Link from "next/link";
import Image from "next/image";
import {
  Carousel
} from "react-bootstrap";

import styles from "../styles/NextCarousel.module.css";

import slide_3 from "../public/images/Slide 3 Resolutions/Slide_3_2019_smxmoz_c_scale,w_1400.jpg"
import slide_4 from "../public/images/Slide 4 Resolutions/Slide_4_2019_pzbrwt_c_scale,w_1400.jpg"
import slide_5 from "../public/images/Slide 5 Resolutions/Slide_5_2019_qhgyog_c_scale,w_1400.jpg"
import slide_6 from "../public/images/Slide 6 Resolutions/Slide_6_2019_jlesrs_c_scale,w_1400.jpg"

const NextCarousel = () => {

  return (
    <div className={styles.carousel_div}>
      <Carousel variant='light' className={styles.carousel}>

        <Carousel.Item className={`${styles.slide}`}>
        <div className={styles.image_div}>
        <Image
            className={`d-block w-100 ${styles.slideImage}`}
            sizes="(max-width: 1400px) 100vw, 1400px"
            src={slide_3}
            alt="Slide number 3" 
            layout="fill"
          />
          </div>

          <Carousel.Caption className={styles.caption}>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className={`${styles.slide}`}>
        <div className={styles.image_div}>
        <Image
            className={`d-block w-100 ${styles.slideImage}`}
            sizes="(max-width: 1400px) 100vw, 1400px"
            src={slide_4}
            alt="Slide number 4" 
            layout="fill"
          />
          </div>

          <Carousel.Caption className={styles.caption}>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={`${styles.slide}`}>
        <div className={styles.image_div}>
        <Image
            className={`d-block w-100 ${styles.slideImage}`}
            sizes="(max-width: 1400px) 100vw, 1400px"
            src={slide_5}
            alt="Slide number 5" 
            layout="fill"
          />
          </div>

          <Carousel.Caption className={styles.caption}>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className={`${styles.slide}`}>
        <div className={styles.image_div}>
        <Image
            className={`d-block w-100 ${styles.slideImage}`}
            sizes="(max-width: 1400px) 100vw, 1400px"
            src={slide_6}
            alt="Slide number 6" 
            layout="fill"
          />
          </div>

          <Carousel.Caption className={styles.caption}>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </div>

  );

};




export default NextCarousel;