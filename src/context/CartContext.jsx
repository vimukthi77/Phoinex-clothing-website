import { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  // Initialize state from localStorage
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item, selectedSize, selectedColor) => {
    console.log('Before adding:', cartItems);
    const newItem = {
      ...item,
      selectedSize,
      selectedColor,
      quantity: 1,
      cartId: Date.now()
    };
    setCartItems(prev => [...prev, newItem]);
    console.log('After adding:', cartItems);
  };

  const removeFromCart = (cartId) => {
    setCartItems(prev => prev.filter(item => item.cartId !== cartId));
  };

  const updateQuantity = (cartId, newQuantity) => {
    setCartItems(prev => prev.map(item => 
      item.cartId === cartId ? {...item, quantity: newQuantity} : item
    ));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

import PropTypes from 'prop-types';

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCart = () => useContext(CartContext);
