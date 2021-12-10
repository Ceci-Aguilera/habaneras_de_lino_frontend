import Link from "next/link";
import Image from "next/image";
import {
  Carousel
} from "react-bootstrap";

import styles from "../styles/NextCarousel.module.css";

import slide_2 from "../public/images/Slide 2 Resolutions/Slide_2_2019_zd32ib_c_scale,w_1400.jpg"
import slide_3 from "../public/images/Slide 3 Resolutions/Slide_3_2019_smxmoz_c_scale,w_1400.jpg"
import slide_4 from "../public/images/Slide 4 Resolutions/Slide_4_2019_pzbrwt_c_scale,w_1400.jpg"
import slide_5 from "../public/images/Slide 5 Resolutions/Slide_5_2019_qhgyog_c_scale,w_1400.jpg"
import slide_6 from "../public/images/Slide 6 Resolutions/Slide_6_2019_jlesrs_c_scale,w_1400.jpg"

const NextCarousel = () => {

  return (
    <div className={styles.carousel_div}>
      <Carousel variant='light' className={styles.carousel}>
 
  {/*      <Carousel.Item className={`${styles.slide}`}>
        <div className={styles.image_div}>
          <Image
            className={`d-block w-100 ${styles.slideImage}`}
            sizes="(max-width: 1400px) 100vw, 1400px"
            srcSet="
            /../public/images/Slide 1 Resolutions/Slide_1_2019_qfen5m_c_scale,w_200.jpg 200w,
            /../public/images/Slide 1 Resolutions/Slide_1_2019_qfen5m_c_scale,w_536.jpg 536w,
            /../public/images/Slide 1 Resolutions/Slide_1_2019_quern5m_c_scale,w_796.jpg 796w,
            /../public/images/Slide 1 Resolutions/Slide_1_2019_qfen5m_c_scale,w_1000.jpg 1000w,
            /../public/images/Slide 1 Resolutions/Slide_1_2019_qfen5m_c_scale,w_1182.jpg 1182w,
            /../public/images/Slide 1 Resolutions/Slide_1_2019_qfen5m_c_scale,w_1371.jpg 1371w,
            /../public/images/Slide 1 Resolutions/Slide_1_2019_qfen5m_c_scale,w_1400.jpg 1400w"
            src="/../public/images/Slide 1 Resolutions/Slide_1_2019_qfen5m_c_scale,w_1400.jpg"
            alt="Slide number 1" 
            layout="fill"
          />
                  </div>
          <Carousel.Caption className={styles.caption}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item> */}

        <Carousel.Item className={`${styles.slide}`}>
        <div className={styles.image_div}>
        <Image
            className={`d-block w-100 ${styles.slideImage}`}
            sizes="(max-width: 1400px) 100vw, 1400px"
            // srcSet="
            // /../public/images/Slide 2 Resolutions/Slide_2_2019_zd32ib_c_scale,w_200.jpg 200w,
            // /../public/images/Slide 2 Resolutions/Slide_2_2019_zd32ib_c_scale,w_842.jpg 842w,
            // /../public/images/Slide 2 Resolutions/Slide_2_2019_zd32ib_c_scale,w_1387.jpg 1387w,
            // /../public/images/Slide 2 Resolutions/Slide_2_2019_zd32ib_c_scale,w_1400.jpg 1400w"
            src={slide_2}
            alt="Slide number 2" 
            layout="fill"
          />
          </div>
          <Carousel.Caption className={styles.caption}>
            {/* <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className={`${styles.slide}`}>
        <div className={styles.image_div}>
        <Image
            className={`d-block w-100 ${styles.slideImage}`}
            sizes="(max-width: 1400px) 100vw, 1400px"
            // srcSet="
            // /../public/images/Slide 3 Resolutions/Slide_3_2019_smxmoz_c_scale,w_200.jpg 200w,
            // /../public/images/Slide 3 Resolutions/Slide_3_2019_smxmoz_c_scale,w_838.jpg 838w,
            // /../public/images/Slide 3 Resolutions/Slide_3_2019_smxmoz_c_scale,w_1303.jpg 1303w,
            // /../public/images/Slide 3 Resolutions/Slide_3_2019_smxmoz_c_scale,w_1400.jpg 1400w"
            src={slide_3}
            alt="Slide number 3" 
            layout="fill"
          />
          </div>

          <Carousel.Caption className={styles.caption}>
            {/* <h3>Fourth slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className={`${styles.slide}`}>
        <div className={styles.image_div}>
        <Image
            className={`d-block w-100 ${styles.slideImage}`}
            sizes="(max-width: 1400px) 100vw, 1400px"
            // srcSet="
            // /../public/images/Slide 4 Resolutions/Slide_4_2019_pzbrwt_c_scale,w_200.jpg 200w,
            // /../public/images/Slide 4 Resolutions/Slide_4_2019_pzbrwt_c_scale,w_817.jpg 817w,
            // /../public/images/Slide 4 Resolutions/Slide_4_2019_pzbrwt_c_scale,w_1260.jpg 1260w,
            // /../public/images/Slide 4 Resolutions/Slide_4_2019_pzbrwt_c_scale,w_1400.jpg 1400w"
            src={slide_4}
            alt="Slide number 4" 
            layout="fill"
          />
          </div>

          <Carousel.Caption className={styles.caption}>
            {/* <h3>Fifth slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={`${styles.slide}`}>
        <div className={styles.image_div}>
        <Image
            className={`d-block w-100 ${styles.slideImage}`}
            sizes="(max-width: 1400px) 100vw, 1400px"
            // srcSet="
            // /../public/images/Slide 5 Resolutions/Slide_5_2019_qhgyog_c_scale,w_200.jpg 200w,
            // /../public/images/Slide 5 Resolutions/Slide_5_2019_qhgyog_c_scale,w_853.jpg 853w,
            // /../public/images/Slide 5 Resolutions/Slide_5_2019_qhgyog_c_scale,w_1357.jpg 1357w,
            // /../public/images/Slide 5 Resolutions/Slide_5_2019_qhgyogt_c_scale,w_1400.jpg 1400w"
            src={slide_5}
            alt="Slide number 5" 
            layout="fill"
          />
          </div>

          <Carousel.Caption className={styles.caption}>
            {/* <h3>Sixth slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className={`${styles.slide}`}>
        <div className={styles.image_div}>
        <Image
            className={`d-block w-100 ${styles.slideImage}`}
            sizes="(max-width: 1400px) 100vw, 1400px"
            // srcSet="
            // /../public/images/Slide 6 Resolutions/Slide_6_2019_jlesrs_c_scale,w_200.jpg 200w,
            // /../public/images/Slide 6 Resolutions/Slide_6_2019_jlesrs_c_scale,w_934.jpg 934w,
            // /../public/images/Slide 6 Resolutions/Slide_6_2019_jlesrs_c_scale,w_1342.jpg 1342w,
            // /../public/images/Slide 6 Resolutions/Slide_6_2019_jlesrs_c_scale,w_1400.jpg 1400w"
            src={slide_6}
            alt="Slide number 6" 
            layout="fill"
          />
          </div>

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