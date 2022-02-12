import NextNavbar from "./NextNavbar";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
    <html lang={'en'} />
      <Head>
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests">

      </meta>
      </Head>
      {/* <NextNavbar /> */}
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}