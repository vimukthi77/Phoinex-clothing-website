import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

const Categories = () => {
  const categories = [
    {
      id: 1,
      title: "Men's Fashion",
      description: "Discover the latest trends in men's clothing",
      image: "/src/assets/men.jpeg",
      link: "/men" 
    },
    {
      id: 2,
      title: "Women's Fashion",
      description: "Explore our women's collection",
      image: "/src/assets/women.jpeg",
      link: "/women"
    },
    {
      id: 3,
      title: "Kids Wear",
      description: "Adorable styles for little ones",
      image: "/src/assets/kids.jpeg",
      link: "/kids"
    },
    {
      id: 4,
      title: "Accessories",
      description: "Complete your look with our accessories",
      image: "/src/assets/acsserces.jpeg",
      link: "/accessories"
    },
    {
      id: 5,
      title: "Footwear",
      description: "Step out in style",
      image: "/src/assets/footwewre.jpeg",
      link: "/foot"
    },
    {
      id: 6,
      title: "Sports Wear",
      description: "Performance meets style",
      image: "/src/assets/sportwere.jpeg",
      link: "/sport"
    }
  ];

  return (
    <div className="categories-page">
      <div className="categories-hero">
        <h1>Our Collections</h1>
        <p>Discover your style in our carefully curated collections</p>
      </div>

      <div className="categories-container">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <div className="category-image">
              <img src={category.image} alt={category.title} />
              <div className="category-overlay">
                <h2>{category.title}</h2>
                <p>{category.description}</p>
                <Link to={category.link} className="explore-button">
                  Explore More
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="featured-category">
        <div className="featured-content">
          <h2>New Arrivals</h2>
          <p>Check out our latest collection</p>
          <Link to="/collections/new" className="featured-button">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
