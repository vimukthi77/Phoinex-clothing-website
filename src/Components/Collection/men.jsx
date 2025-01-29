import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './men.css';
// Import hero image
import heroImage from '../../assets/men.jpg';

const featuredClothing = [
  {
    id: 10,
    name: "Casual Shirt",
    price: "$35",
    image: "/clothing/c1.jpeg",
    category: "Outerwear"
  },
  {
    id: 11,
    name: "Jeans",
    price: "$50",
    image: "/clothing/j2.jpeg",
    category: "Jeans"
  },
  {
    id: 12,
    name: "T-Shirt",
    price: "$20",
    image: "/clothing/t.jpeg",
    category: "Tshert"
  },
  {
    id: 13,
    name: "Blazer",
    price: "$120",
    image: "/clothing/bl.jpeg",
    category: "Outwere"
  },
  {
    id: 14,
    name: "Hoodie",
    price: "$45",
    image: "/clothing/ho.jpeg",
    category: "Pants"
  },
  {
    id: 15,
    name: "Chinos",
    price: "$40",
    image: "/clothing/choi.jpg",
    category: "Pants"
  },

  
];

const men = () => {
  return (
    <div className="home-container">
      <motion.section 
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 5 }}
        transition={{ duration: 3 }}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${heroImage})`
        }}
      >
        <div className="hero-content">
          <motion.h1
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            Elevate Your Style
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Discover the Latest Fashion Trends
          </motion.p>
          <Link to="/categories">
            <motion.button
              className="shop-now-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Shop Collection
            </motion.button>
          </Link>
        </div>
      </motion.section>

      <section className="featured-items">
        <h2>Mens Items</h2>
        <div className="items-grid">
          {featuredClothing.map((item) => (
            <motion.div
              key={item.id}
              className="item-card"
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="item-image-container">
                <img src={item.image} alt={item.name} />
                <div className="item-overlay">
                  <Link to={`/collectionDetails/${item.id}`}>
                    <motion.button
                      className="view-details-btn"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      View Details
                    </motion.button>
                  </Link>
                </div>
              </div>
              <div className="item-info">
                <h3>{item.name}</h3>
                <p className="price">{item.price}</p>
                <span className="category">{item.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default men;
