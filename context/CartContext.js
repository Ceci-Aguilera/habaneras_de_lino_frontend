import axios from "axios";
import { createContext } from "react";
import router from "next/router";
import { useEffect, useState, useContext } from "react";


const domain = process.env.NEXT_PUBLIC_API_DOMAIN_NAME;


const CartContext = createContext();

export const getCart = async () => {

  const token = window.localStorage.getItem("token")

    const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };


      if(token !== null && token !== undefined){
        const cart_url = domain + `store/cart/${token}/`;
        return await axios
          .get(cart_url, config)
          .then(async (res) => {
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
      }
      else{
        return {status: "Cart null", cart:null};
      }
    
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

      if(cart !== null&& cart !== undefined){
        
        const token = cart.token

        const cart_url = domain + `store/cart/${token}/`;
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
      }
      else{
        const cart_url = domain + "store/cart/";
        return await axios
      .post(cart_url, body, config)
      .then(async (response) => {
        const res = await response.data;
        const temp_cart = res["Cart"];

        setCart(temp_cart);
        await window.localStorage.setItem("token", temp_cart['token'])

        setLoading(false);
        router.push("/");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
      }

    
  };

  const delete_product = async(id) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    const cart_url = domain + `store/cart/delete-product/${id}/`;
    
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
    
    const token = cart.token

    const cart_url = domain  + `store/cart/${token}`;
    
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

  const update_product = async(id, body) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    const cart_url = domain + `store/custom-products/${id}/`;
    
    return await axios.post(cart_url, body, config).then(async(response) => {
      const res = await response.data;
      const temp_cart = res["Cart"];

      setCart(temp_cart);

      setLoading(false);
      router.push("/cart");

    }).catch((error)=>{
      
      setLoading(false);
        console.log(error);
    })
  }


  
  return (
    <CartContext.Provider value={{ cart, add_product, delete_product, delete_cart, update_product}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
export const CartConsumer = CartContext.Consumer;