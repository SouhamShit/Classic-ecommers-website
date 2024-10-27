import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTshirt, FaLeaf, FaHandsHelping, FaGlobeAmericas, FaHome } from 'react-icons/fa';
import './About.css';

// Import images (if they're in your src folder)
import storeImage from './istockphoto-1293366109-612x612.jpg';
import clothingImage from './branding-a-clothing-line2.webp';

const About = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate('/');
  };
  const handleNavigateShop = ()=>{
    navigate('/shop');
  }

  return (
    <div className="about-container">
      <button className="about-home-button" onClick={handleNavigateHome}>
        <FaHome /> Home
      </button>

      <header className="about-header">
        <h1>About Classics</h1>
        <p>Timeless Style, Modern Comfort</p>
      </header>

      <section className="about-content">
        <div className="about-story">
          <div className="text-content">
            <h2>Our Story</h2>
            <p>
              Founded in 2010, Classics was born from a passion for timeless fashion and a commitment to quality. 
              We believe that great style shouldn't be complicated or fleeting. Our mission is to provide our 
              customers with clothing that combines classic designs with modern comfort, ensuring you look and 
              feel your best in any situation.
            </p>
          </div>
          <div className="image-content">
            {/* Option 1: Using imported image */}
            <img src={storeImage} alt="Classics store front" className="about-image" />
            
            {/* Option 2: Using PUBLIC_URL (if image is in public folder) */}
            {/* <img src={`${process.env.PUBLIC_URL}/istockphoto-1293366109-612x612.jpg`} alt="Classics store front" className="about-image" /> */}
            
            {/* Option 3: Using relative path (if image is in src folder) */}
            {/* <img src={require('./istockphoto-1293366109-612x612.jpg')} alt="Classics store front" className="about-image" /> */}
          </div>
        </div>

        {/* ... (rest of the component remains the same) ... */}

        <div className="about-promise">
          <div className="image-content">
            {/* Option 1: Using imported image */}
            <img src={clothingImage} alt="Classic clothing items" className="about-image" />
            
            {/* Option 2: Using PUBLIC_URL (if image is in public folder) */}
            {/* <img src={`${process.env.PUBLIC_URL}/branding-a-clothing-line2.webp`} alt="Classic clothing items" className="about-image" /> */}
            
            {/* Option 3: Using relative path (if image is in src folder) */}
            {/* <img src={require('./branding-a-clothing-line2.webp')} alt="Classic clothing items" className="about-image" /> */}
          </div>
          <div className="text-content">
            <h2>Our Promise</h2>
            <p>
              At Classics, we promise to deliver not just clothing, but confidence. Whether you're dressing for 
              a casual day out or a special occasion, our pieces are designed to make you feel stylish, 
              comfortable, and true to yourself. We're more than just a clothing store – we're your partner in 
              creating a wardrobe that stands the test of time.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Experience the Classics Difference</h2>
        <p>Visit our store or shop online to discover our latest collections.</p>
        <button className="cta-button" onClick={handleNavigateShop}>Shop Now</button>
      </section>
    </div>
  );
};

export default About;