import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from "next/head";
import Layout from "../components/Layout";
import { CartProvider, getCart } from "../context/CartContext";
import { LanguageProvider } from "../context/LanguageContext"

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
	    <LanguageProvider>
      <Layout>
      <Head>
          <link rel="shortcut icon" href="/logos/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/logos/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/logos/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/logos/favicon-16x16.png" />
        </Head>
        <Component {...pageProps} />
      </Layout>
		    </LanguageProvider>
    </CartProvider>

  );
}

export default MyApp
