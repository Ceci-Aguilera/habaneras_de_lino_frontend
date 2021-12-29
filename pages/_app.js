import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/Layout";
import { CartProvider, getCart } from "../context/CartContext";
import { LanguageProvider } from "../context/LanguageContext"

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
	    <LanguageProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
		    </LanguageProvider>
    </CartProvider>

  );
}

export default MyApp
