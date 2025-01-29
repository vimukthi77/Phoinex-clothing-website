import { useCart } from '../../context/CartContext';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();
  console.log('Cart Component Items:', cartItems);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => 
      total + (parseFloat(item.price.replace('$', '')) * item.quantity), 0
    ).toFixed(2);
  };

  const handleCheckout = () => {
    navigate('/payment');
  };

  return (
    <motion.div 
      className="cart-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.cartId} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Size: {item.selectedSize}</p>
                  <p>Color: {item.selectedColor}</p>
                  <p>Price: {item.price}</p>
                  <div className="quantity-controls">
                    <select 
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.cartId, parseInt(e.target.value))}
                    >
                      {[1,2,3,4,5].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                    <button 
                      className="remove-btn"
                      onClick={() => removeFromCart(item.cartId)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total: ${calculateTotal()}</h3>
            <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default Cart;