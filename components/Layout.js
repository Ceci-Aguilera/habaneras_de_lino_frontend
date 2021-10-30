import NextNavbar from "./NextNavbar";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <NextNavbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}