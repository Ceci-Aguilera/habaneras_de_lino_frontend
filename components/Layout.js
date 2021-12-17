import NextNavbar from "./NextNavbar";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests">

      </meta>
        {/* <link
          rel="preload"
          href="/fonts/Comforter/Corinthia-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Comforter/Corinthia-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Indie Flower/Montserrat-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Indie Flower/Montserrat-Light.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Indie Flower/Montserrat-Bold.ttf"
          as="font"
          crossOrigin=""
        /> */}
      </Head>
      <NextNavbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}