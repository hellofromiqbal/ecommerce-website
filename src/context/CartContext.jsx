/* eslint-disable react-refresh/only-export-components */
import { useState,  useContext, createContext } from "react";
import { getProductById } from "../data/products";

export const CartContext = createContext(null);

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]); // { id: 1, quantity: 7 }

  function manipulateCart(productId, action = "increment") {
    const existingCart = cartItems.find((item) => item.id === productId);
    if (existingCart) {
      const currentQuantity = existingCart.quantity;
      const updatedCartItems = cartItems.map((item) =>
        item.id === productId
          ? action === "increment"
            ? { id: productId, quantity: currentQuantity + 1 }
            : currentQuantity === 0
              ? { id: productId, quantity: currentQuantity }
              : { id: productId, quantity: currentQuantity - 1 }
          : item
      );
      console.log(updatedCartItems);
      setCartItems(updatedCartItems);
    } else {
      console.log([...cartItems, { id: productId, quantity: 1 }]);
      setCartItems([...cartItems, { id: productId, quantity: 1 }]);
    }
  }

  function getCartItemsWithProducts() {
    return cartItems.map((item) => ({
      ...item,
      product: getProductById(item.id)
    })).filter(item => item.product);
  }

  function removeItemFromCart(productId) {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  }

  function getCartTotal() {
    const total = cartItems.reduce((total, item) => {
      const product = getProductById(item.id);
      return total + (product? product.price * item.quantity : 0)
    }, 0);
    return total;
  }

  function clearCart() {
    setCartItems([]);
  }

  return <CartContext.Provider value={{ cartItems, manipulateCart, getCartItemsWithProducts, removeItemFromCart, getCartTotal, clearCart }}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context){
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}