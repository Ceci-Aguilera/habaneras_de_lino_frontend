import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/Layout";
import { CartProvider, getCart } from "../context/CartContext";

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>

  );
}

export default MyApp
