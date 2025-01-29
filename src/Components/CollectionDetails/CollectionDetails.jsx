import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import './CollectionDetails.css'
// Import the featuredClothing data
const featuredClothing = [
  {
    id: 1,
    name: "Premium Denim Jacket",
    price: "$89.99",
    image: "/clothing/denim-jacket.jpeg",
    category: "Outerwear",
    description: "Premium quality denim jacket with classic styling and modern fit.",
    features: [
      "100% Premium Cotton Denim",
      "Durable brass buttons",
      "Multiple functional pockets",
      "Adjustable waist tabs"
    ],
    colors: [
      { name: 'Vintage Blue', code: '#385F71' },
      { name: 'Stonewash', code: '#7BA5B6' },
      { name: 'Dark Indigo', code: '#1B2F45' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    additionalImages: [
      "/clothing/denim-jacket.jpeg",
      "/clothing/denim-jacket-2.jpg",
      "/clothing/denim-jacket-3.jpg",
      
    ]
  },
  {
    id: 2,
    name: "Summer Floral Dress",
    price: "$59.99",
    image: "/clothing/floral-dress.jpeg",
    category: "Dresses",
    description: "Elegant floral dress perfect for summer occasions. Features a flattering A-line cut and breathable fabric.",
    features: [
      "Lightweight cotton blend",
      "Adjustable waist tie",
      "Hidden side pockets",
      "Fully lined"
    ],
    colors: [
      { name: 'Rose Pink', code: '#FFB6C1' },
      { name: 'Sky Blue', code: '#87CEEB' },
      { name: 'Mint Green', code: '#98FF98' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    additionalImages: [
      "/clothing/floral-dress.jpeg",
      "/clothing/floral-dress-3.jpg",
      "/clothing/floral-dress-4.jpg"
    ]
  },
  {
    id: 3,
    name: "Classic White Sneakers",
    price: "$79.99",
    image: "/clothing/white-sneakers.jpeg",
    category: "Footwear",
    description: "Timeless white sneakers with premium comfort and style. Perfect for casual everyday wear.",
    features: [
      "Genuine leather upper",
      "Memory foam insole",
      "Non-slip rubber sole",
      "Breathable mesh lining"
    ],
    colors: [
      { name: 'Pure White', code: '#FFFFFF' },
      { name: 'Off White', code: '#F5F5F5' },
      { name: 'Cream', code: '#FFFDD0' }
    ],
    sizes: ['36', '37', '38', '39', '40', '41', '42'],
    additionalImages: [
      "/clothing/white-sneakers.jpeg",
      "/clothing/sneakers-side.jpg",
      "/clothing/white-sneakers1.jpg",
      "/clothing/white-sneakers2.jpg"
    ]
  },
  {
    id: 4,
    name: "Slim Fit Chinos",
    price: "$49.99",
    image: "/clothing/chinos.jpeg",
    category: "Pants",
    description: "Modern slim-fit chinos crafted from stretch cotton for maximum comfort and style.",
    features: [
      "98% Cotton, 2% Elastane",
      "Wrinkle-resistant fabric",
      "Front slash pockets",
      "Back welt pockets"
    ],
    colors: [
      { name: 'Khaki', code: '#C3B091' },
      { name: 'Navy', code: '#000080' },
      { name: 'Olive', code: '#808000' }
    ],
    sizes: ['28', '30', '32', '34', '36', '38'],
    additionalImages: [
      "/clothing/chinos.jpeg",
      "/clothing/chinos1.jpeg",
      "/clothing/chinos2.jpeg",
      "/clothing/chinos3.jpeg"
    ]
  },
  {
    id: 5,
    name: "Leather Crossbody Bag",
    price: "$129.99",
    image: "/clothing/leather-bag.jpeg",
    category: "Accessories",
    description: "Luxurious leather crossbody bag with multiple compartments and adjustable strap.",
    features: [
      "Genuine leather construction",
      "Adjustable shoulder strap",
      "Multiple interior pockets",
      "Gold-tone hardware"
    ],
    colors: [
      { name: 'Tan', code: '#D2B48C' },
      { name: 'Black', code: '#000000' },
      { name: 'Brown', code: '#8B4513' }
    ],
    sizes: ['One Size'],
    additionalImages: [
      "/clothing/bag-front.jpeg",
      "/clothing/bag-side.jpeg",
      "/clothing/bag-inside.jpeg",
      "/clothing/bag-detail.jpeg"
    ]
  },
  {
    id: 6,
    name: "Wool Blend Sweater",
    price: "$69.99",
    image: "/clothing/sweater.jpeg",
    category: "Knitwear",
    description: "Cozy wool blend sweater featuring a classic cable knit pattern and ribbed trim.",
    features: [
      "70% Wool, 30% Polyester",
      "Cable knit pattern",
      "Ribbed collar and cuffs",
      "Machine washable"
    ],
    colors: [
      { name: 'Charcoal', code: '#36454F' },
      { name: 'Oatmeal', code: '#E3C699' },
      { name: 'Burgundy', code: '#800020' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    additionalImages: [
      "/clothing/sweater-front.jpeg",
      "/clothing/sweater-back.jpeg",
      "/clothing/sweater-detail.jpeg",
      "/clothing/sweater-styled.jpeg"
    ]
  },
  {
    id: 7,
    name: "Silk Blouse",
    price: "$89.99",
    image: "/clothing/silk-blouse.jpeg",
    category: "Tops",
    description: "Elegant silk blouse with a relaxed fit and subtle sheen. Perfect for both office and evening wear.",
    features: [
      "100% Silk",
      "Mother of pearl buttons",
      "French seams",
      "Curved hem"
    ],
    colors: [
      { name: 'Ivory', code: '#FFFFF0' },
      { name: 'Blush', code: '#FFE4E1' },
      { name: 'Navy', code: '#000080' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    additionalImages: [
      "/clothing/blouse-front.jpeg",
      "/clothing/blouse-back.jpeg",
      "/clothing/blouse-collar.jpeg",
      "/clothing/blouse-cuff.jpeg"
    ]
  },
  {
    id: 8,
    name: "Leather Chelsea Boots",
    price: "$159.99",
    image: "/clothing/chelsea-boots.jpeg",
    category: "Footwear",
    description: "Classic Chelsea boots crafted from premium leather with elastic side panels and pull tabs.",
    features: [
      "Full-grain leather upper",
      "Goodyear welt construction",
      "Leather lining",
      "Rubber sole"
    ],
    colors: [
      { name: 'Black', code: '#000000' },
      { name: 'Brown', code: '#8B4513' },
      { name: 'Oxblood', code: '#4A0404' }
    ],
    sizes: ['40', '41', '42', '43', '44', '45'],
    additionalImages: [
      "/clothing/boots-side.jpeg",
      "/clothing/boots-front.jpeg",
      "/clothing/boots-back.jpeg",
      "/clothing/boots-sole.jpeg"
    ]
  },
  {
    id: 9,
    name: "Linen Blazer",
    price: "$149.99",
    image: "/clothing/linen-blazer.jpeg",
    category: "Outerwear",
    description: "Lightweight linen blazer perfect for summer occasions. Features a tailored fit and natural texture.",
    features: [
      "100% Irish Linen",
      "Half-canvas construction",
      "Horn buttons",
      "Patch pockets"
    ],

    colors: [
      { name: 'Natural', code: '#F5F5DC' },
      { name: 'Sand', code: '#F4A460' },
      { name: 'Light Blue', code: '#ADD8E6' }
    ],
    sizes: ['36', '38', '40', '42', '44'],
    additionalImages: [
      "/clothing/blazer-front.jpeg",
      "/clothing/blazer-back.jpeg",
      "/clothing/blazer-detail.jpeg",
      "/clothing/blazer-pocket.jpeg"
    ]
  },
  {
    id: 10,
    name: "Casual Shirt",
    price: "$35",
    image: "/clothing/c1.jpeg",
    category: "Outerwear",
    description: "Slim-fit cotton casual shirt with a button-down collar.",
    features: [
      "Made from 100% breathable cotton.",
      "Slim-fit design for a modern look.",
      "Button-down collar for casual and semi-formal occasions",
      "Patch pockets"
    ],
    
    colors: [
      { name: 'Blue', code: '#3B5998' },
      { name: 'Red ', code: '#FF0000' },
      { name: 'Black', code: '#000000' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    additionalImages: [
      "/clothing/c1.jpeg",
      "/clothing/c2.jpeg",
      "/clothing/c3.jpeg",
      "/clothing/c.jpeg",
      
    ]
  },
  {
    id: 11,
    name: "Jeans",
    price: "$50",
    image: "/clothing/j2.jpeg",
    category: "Outerwear",
    description: "Classic straight-fit denim jeans with a mid-rise waist.",
    features: [
      "Durable denim fabric for long-lasting use.",
      "Mid-rise waist for added comfort.",
      "Classic straight-fit style for versatility.",
      "Patch pockets"
    ],
    
    colors: [
      { name: 'Dark Blue', code: '#2B3A67' },
      { name: 'Light Blue  ', code: '#ADD8E6' },
      { name: 'Grey', code: '#808080' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    additionalImages: [
      "/clothing/j2.jpeg",
      "/clothing/j.jpeg",
      "/clothing/j3.jpeg",
      "/clothing/j4.jpeg",
      
    ]
  }
  // Add similar detailed data for other items
];

// Add import
import { useCart } from '../../context/CartContext';

const CollectionDetails = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [mainImage, setMainImage] = useState(0);
  // Add this line
  const { addToCart } = useCart();
  
  // Find the selected item based on ID
  const selectedItem = featuredClothing.find(item => item.id === parseInt(id));

  if (!selectedItem) {
    return <div className="not-found">Item not found</div>;
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select both size and color');
      return;
    }
    
    // Log the item being added
    console.log('Adding to cart:', {
      ...selectedItem,
      selectedSize,
      selectedColor
    });
    
    addToCart(selectedItem, selectedSize, selectedColor);
    alert('Item added to cart successfully!');
  };
  

  return (
    <motion.div 
      className="collection-details-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="product-showcase">
        <div className="image-gallery">
          <motion.div className="main-image-container">
            <img 
              src={selectedItem.additionalImages[mainImage]} 
              alt={selectedItem.name} 
            />
          </motion.div>
          <div className="thumbnail-strip">
            {selectedItem.additionalImages.map((img, index) => (
              <motion.div
                key={index}
                className={`thumbnail ${mainImage === index ? 'active' : ''}`}
                whileHover={{ scale: 1.1 }}
                onClick={() => setMainImage(index)}
              >
                <img src={img} alt={`${selectedItem.name} view ${index + 1}`} />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="product-details">
          <motion.h1>{selectedItem.name}</motion.h1>
          <motion.div className="price">{selectedItem.price}</motion.div>
          <motion.div className="category">{selectedItem.category}</motion.div>
          
          <div className="description">
            <p>{selectedItem.description}</p>
            <ul className="features-list">
              {selectedItem.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="selection-area">
            <div className="color-selection">
              <h3>Color</h3>
              <div className="color-options">
                {selectedItem.colors.map((color) => (
                  <motion.div
                    key={color.name}
                    className={`color-circle ${selectedColor === color.name ? 'selected' : ''}`}
                    style={{ backgroundColor: color.code }}
                    whileHover={{ scale: 1.2 }}
                    onClick={() => setSelectedColor(color.name)}
                  />
                ))}
              </div>
            </div>

            <div className="size-selection">
              <h3>Size</h3>
              <div className="size-options">
                {selectedItem.sizes.map((size) => (
                  <motion.button
                    key={size}
                    className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          <motion.button
            className="add-to-cart-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            disabled={!selectedSize || !selectedColor}
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default CollectionDetails;
