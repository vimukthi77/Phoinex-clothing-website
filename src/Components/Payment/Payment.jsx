import { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import './Payment.css';

const Payment = () => {
  const { cartItems } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [deliveryAddress, setDeliveryAddress] = useState({
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  });
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardHolder: '',
    expiry: '',
    cvv: ''
  });

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Handle payment processing logic here
  };

  return (
    <motion.div 
      className="payment-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Checkout</h1>
      
      <div className="payment-sections">
        {/* Order Summary Section */}
        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="order-items">
            {cartItems.map(item => (
              <div key={item.cartId} className="summary-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: {item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Method Selection */}
        <div className="payment-method">
          <h2>Select Payment Method</h2>
          <div className="payment-options">
            <button 
              className={`method-btn ${paymentMethod === 'card' ? 'active' : ''}`}
              onClick={() => setPaymentMethod('card')}
            >
              Credit/Debit Card
            </button>
            <button 
              className={`method-btn ${paymentMethod === 'cod' ? 'active' : ''}`}
              onClick={() => setPaymentMethod('cod')}
            >
              Cash on Delivery
            </button>
          </div>

          {/* Card Payment Form */}
          {paymentMethod === 'card' && (
            <form className="card-payment-form">
              <input
                type="text"
                placeholder="Card Number"
                value={cardDetails.cardNumber}
                onChange={(e) => setCardDetails({...cardDetails, cardNumber: e.target.value})}
              />
              <input
                type="text"
                placeholder="Card Holder Name"
                value={cardDetails.cardHolder}
                onChange={(e) => setCardDetails({...cardDetails, cardHolder: e.target.value})}
              />
              <div className="card-extra-details">
                <input
                  type="text"
                  placeholder="MM/YY"
                  value={cardDetails.expiry}
                  onChange={(e) => setCardDetails({...cardDetails, expiry: e.target.value})}
                />
                <input
                  type="text"
                  placeholder="CVV"
                  value={cardDetails.cvv}
                  onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value})}
                />
              </div>
            </form>
          )}
        </div>

        {/* Delivery Address */}
        <div className="delivery-address">
          <h2>Delivery Address</h2>
          <form className="address-form">
            <input
              type="text"
              placeholder="Street Address"
              value={deliveryAddress.street}
              onChange={(e) => setDeliveryAddress({...deliveryAddress, street: e.target.value})}
            />
            <input
              type="text"
              placeholder="City"
              value={deliveryAddress.city}
              onChange={(e) => setDeliveryAddress({...deliveryAddress, city: e.target.value})}
            />
            <input
              type="text"
              placeholder="State"
              value={deliveryAddress.state}
              onChange={(e) => setDeliveryAddress({...deliveryAddress, state: e.target.value})}
            />
            <input
              type="text"
              placeholder="ZIP Code"
              value={deliveryAddress.zipCode}
              onChange={(e) => setDeliveryAddress({...deliveryAddress, zipCode: e.target.value})}
            />
            <input
              type="text"
              placeholder="Country"
              value={deliveryAddress.country}
              onChange={(e) => setDeliveryAddress({...deliveryAddress, country: e.target.value})}
            />
          </form>
        </div>

        <button className="place-order-btn" onClick={handlePaymentSubmit}>
          Place Order
        </button>
      </div>
    </motion.div>
  );
};

export default Payment;
