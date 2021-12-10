import Link from "next/link";
import Image from "next/image";
import styles from "../styles/SecondaryNavbar.module.css";
import mstyles from "../styles/main.module.css";
import {
  Nav,
  Navbar,
  Dropdown,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";



const domain = process.env.NEXT_PUBLIC_API_DOMAIN_NAME;

const SecondaryNavbar = () => {

  const [dropDownInfo, setDropDownInfo] = useState(null);

  useEffect(async () => {
    await getDropDownInfo(setDropDownInfo)
  }, [])



  return dropDownInfo == null ? <div></div> : (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className={`${styles.s_navbar} ${mstyles.itshape}`}
      >

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Brand
          className={`navbar-brand d-lg-none ${styles.s_smallBrand}`}
          href="/"
        >
          View Top Products
        </Navbar.Brand>

        <Navbar.Collapse id="responsive-navbar-nav" className={` ${mstyles.itshape}`}>


          <Nav className={`order-0 ${styles.s_nav}`}>

            <Dropdown as={Nav.Item} className={styles.drop_button}>
              <Dropdown.Toggle as={Nav.Link} className={styles.linkItem}>Women</Dropdown.Toggle>
              <Dropdown.Menu className={styles.drop_menu}>
                {dropDownInfo.women.category.map((info, index) => {
                  return (
                    <Dropdown.Item key={index} className={styles.drop_item}><Link href={`/category/enzo-women/${info.id}`}><p>
                      {info.title}
                    </p></Link></Dropdown.Item>
                  )
                })}

                <Dropdown.Divider className={styles.drop_divider} />

                {dropDownInfo.women.collection.map((info, index) => {
                  return (
                    <Dropdown.Item key={index} className={styles.drop_item}><Link href={`/collection/enzo-women/${info.id}`}><p>
                      {info.title}
                    </p></Link></Dropdown.Item>
                  )
                })}

                <Dropdown.Divider className={styles.drop_divider} />

                <Dropdown.Item className={styles.drop_item}><Link href={`/enzo-women/`}><p>
                  All
                </p></Link></Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>

            <Dropdown as={Nav.Item} className={styles.drop_button}>
              <Dropdown.Toggle as={Nav.Link} className={styles.linkItem}>Men</Dropdown.Toggle>
              <Dropdown.Menu className={styles.drop_menu}>
                {dropDownInfo.men.category.map((info, index) => {
                  return (
                    <Dropdown.Item key={index} className={styles.drop_item}><Link href={`/category/enzo-men/${info.id}`}><p>
                      {info.title}
                    </p></Link></Dropdown.Item>
                  )
                })}

                <Dropdown.Divider className={styles.drop_divider} />

                {dropDownInfo.men.collection.map((info, index) => {
                  return (
                    <Dropdown.Item key={index} className={styles.drop_item}><Link href={`/collection/enzo-men/${info.id}`}><p>
                      {info.title}
                    </p></Link></Dropdown.Item>
                  )
                })}

                <Dropdown.Divider className={styles.drop_divider} />

                <Dropdown.Item className={styles.drop_item}><Link href={`/enzo-men/`}><p>
                  All
                </p></Link></Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>

            <Dropdown as={Nav.Item} className={styles.drop_button}>
              <Dropdown.Toggle as={Nav.Link} className={styles.linkItem}>Kids</Dropdown.Toggle>
              <Dropdown.Menu className={styles.drop_menu}>
                {dropDownInfo.kids.category.map((info, index) => {
                  return (
                    <Dropdown.Item key={index} className={styles.drop_item}>{info.title}</Dropdown.Item>
                  )
                })}

                <Dropdown.Divider className={styles.drop_divider} />

                {dropDownInfo.kids.collection.map((info, index) => {
                  return (
                    <Dropdown.Item key={index} className={styles.drop_item}>{info.title}</Dropdown.Item>
                  )
                })}

                <Dropdown.Divider className={styles.drop_divider} />

                <Dropdown.Item className={styles.drop_item}>All</Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>

            <Dropdown as={Nav.Item} className={styles.drop_button}>
              <Dropdown.Toggle as={Nav.Link} className={styles.linkItem}>Top Collections</Dropdown.Toggle>
              <Dropdown.Menu className={styles.drop_menu}>
                <Dropdown.Item className={styles.drop_item} href='#Navy'>Navy</Dropdown.Item>
                <Dropdown.Item className={styles.drop_item} href='#Romance'>Romance</Dropdown.Item>
                <Dropdown.Item className={styles.drop_item} href='#Turquesa'>Turquesa</Dropdown.Item>
                <Dropdown.Divider className={styles.drop_divider} />
                <Dropdown.Item className={styles.drop_item} href='#Etnik'>Etnik</Dropdown.Item>
                <Dropdown.Item className={styles.drop_item} href='#Luxury'>Luxury</Dropdown.Item>
                <Dropdown.Item className={styles.drop_item} href='#Cittadino'>Cittadino</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown as={Nav.Item} className={styles.drop_button}>
              <Dropdown.Toggle as={Nav.Link} className={styles.linkItem}>Categories for</Dropdown.Toggle>
              <Dropdown.Menu className={styles.drop_menu}>
                <Dropdown.Item  className={styles.drop_item}><Link href={`/enzo-women/#enzo_women_category`}><p>
                  Women
                </p></Link></Dropdown.Item>

                <Dropdown.Divider className={styles.drop_divider} />

                <Dropdown.Item className={styles.drop_item}><Link href={`/enzo-men/#enzo_men_category`}><p>
                  Men
                </p></Link></Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>

            <Dropdown as={Nav.Item} className={styles.drop_button}>
              <Dropdown.Toggle as={Nav.Link} className={styles.linkItem}>Collections for</Dropdown.Toggle>
              <Dropdown.Menu className={styles.drop_menu}>
                <Dropdown.Item  className={styles.drop_item}><Link href={`/enzo-women/#enzo_women_collection`}><p>
                  Women
                </p></Link></Dropdown.Item>

                <Dropdown.Divider className={styles.drop_divider} />

                <Dropdown.Item className={styles.drop_item}><Link href={`/enzo-men/#enzo_men_collection`}><p>
                  Men
                </p></Link></Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

const getDropDownInfo = async (setDropDownInfo) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const dropdown_info_url = domain + `store/products-extra-tags/`;
  axios
    .get(dropdown_info_url, config)
    .then(async (res) => {
      const result = await res.data;
      setDropDownInfo(result);
    })
    .catch((error) => {
      console.log(error);
    });
}

export default SecondaryNavbar;