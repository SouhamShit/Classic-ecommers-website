import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaHome } from "react-icons/fa";
import './Shop.css';

const products = [
  { id: 1, name: 'T-Shirt',oldprice:39.99, price: 19.99, image: './image/T-shirt.webp' },
  { id: 2, name: 'Jeans', oldprice:49.99,price: 29.99, image: './image/jeans.webp' },
  { id: 3, name: 'Sneakers',oldprice:99.99, price: 79.99, image: './image/sneaker.jpeg' },
  { id: 4, name: 'Shirt',oldprice:29.99, price: 14.99, image: './image/shirt.jpeg' },
];

const Shop = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleNavigateHome = () => {
    navigate('/');
  };

  const handleNavigateCart = () => {
    navigate('/cart');
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <>
      <div className='shop-nav'>
        <div className='shop-nav-home'>
          <button onClick={handleNavigateHome}>
            <FaHome className='shop-nav-homeicon'/>Home
          </button>
        </div>
        <div className='shop-nav-text'><span>Enjoy Your Shopping</span></div>
        <div className='shop-nav-cart' onClick={handleNavigateCart}>
          <FaShoppingCart className='shop-nav-carticon'/>
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </div>
      </div>
      <div className='shop-component'>
        {products.map((product) => (
          <div key={product.id} className='shop-card'>
            <div className='shop-card-img'>
              <img src={product.image} alt={product.name} height="200" width="200"/>
            </div>
            <div className='shop-card-text'>
              <h3>{product.name}</h3>
              <div className='shop-oldPrice'>${product.oldprice}</div>
              <p>${product.price.toFixed(2)}</p>
              <button className='add-to-cart-btn' onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Shop;