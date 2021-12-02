import NextNavbar from "./NextNavbar";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/Comforter/Comforter-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Indie Flower/IndieFlower-Regular.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <NextNavbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}