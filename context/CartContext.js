import axios from "axios";
import { createContext } from "react";
import router from "next/router";
import { useEffect, useState, useContext } from "react";

const CartContext = createContext();

export const getCart = async () => {

    const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
    
      const cart_url = 'http://127.0.0.1:8000/' + "store/cart/";
      return await axios
        .get(cart_url, config)
        .then(async (res) => {
            // console.log("In context")
            // console.log(res.data)
            if(res.data){
                const result = await res.data;
                return {status: "Cart not null", cart: result}   ;   
            }
            else{
                return {status: "Cart null", cart:null};
            }
        })
        .catch((error) => {
            return {status: "Cart null", cart:null};
        });
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const temp_cart = await getCart();
    try{
      setCart(temp_cart['cart']['Cart']);
    }
    catch{
      setCart(null)
    }
  }, []);

  const add_product = async (body) => {

    const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
    
      const cart_url = 'http://127.0.0.1:8000/' + "store/cart/";

    return await axios
      .post(cart_url, body, config)
      .then(async (response) => {
        const res = await response.data;
        const temp_cart = res["Cart"];

        setCart(temp_cart);

        setLoading(false);
        router.push("/");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  const delete_product = async(id) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    const cart_url = 'http://127.0.0.1:8000/' + `store/cart/delete-product/${id}/`;
    
    return await axios.delete(cart_url, config).then(async(response) => {
      const res = await response.data;
      const temp_cart = res["Cart"];

      setCart(temp_cart);

      setLoading(false);
      router.push("/");

    }).catch((error)=>{
      
      setLoading(false);
        console.log(error);
    })
  }

  const delete_cart = async() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    const cart_url = 'http://127.0.0.1:8000/' + `store/cart/`;
    
    return await axios.delete(cart_url, config).then(async(response) => {
      const res = await response.data;
      const temp_cart = res["Cart"];

      setCart(temp_cart);

      setLoading(false);
      router.push("/");

    }).catch((error)=>{
      
      setLoading(false);
        console.log(error);
    })
  }

  
  return (
    <CartContext.Provider value={{ cart, add_product, delete_product, delete_cart}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
export const CartConsumer = CartContext.Consumer;