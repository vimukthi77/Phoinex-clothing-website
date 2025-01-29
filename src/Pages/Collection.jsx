import { useState } from 'react'
import '../Styles/Collection.css'
import Img from '../assets/OIP.jpeg'
const Collection = () => {
  return (
    <div className="collection-container">

      <div className="products-grid">
        <div className="product-card">
          <div className="product-image">
            <img src={Img} alt="Premium Leather Jacket" />
            <button className="quick-add">Quick Add</button>
          </div>
          <div className="product-info">
            <h3>Premium Leather Jacket</h3>
            <p className="category">Clothing</p>
            <div className="price-rating">
              <span className="price">$199.99</span>
              <span className="rating">★ 4.5</span>
            </div>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>

        <div className="product-card">
          <div className="product-image">
            <img src={Img} alt="Wireless Headphones" />
            <button className="quick-add">Quick Add</button>
          </div>
          <div className="product-info">
            <h3>Wireless Headphones</h3>
            <p className="category">Electronics</p>
            <div className="price-rating">
              <span className="price">$89.99</span>
              <span className="rating">★ 4.8</span>
            </div>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>

        <div className="product-card">
          <div className="product-image">
            <img src={Img} alt="Smart Watch Pro" />
            <button className="quick-add">Quick Add</button>
          </div>
          <div className="product-info">
            <h3>Smart Watch Pro</h3>
            <p className="category">Electronics</p>
            <div className="price-rating">
              <span className="price">$299.99</span>
              <span className="rating">★ 4.7</span>
            </div>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection