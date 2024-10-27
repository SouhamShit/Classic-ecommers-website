import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'; 
import { FaShoppingCart, FaTruck, FaShoppingBag, FaCreditCard, FaUser, FaSignOutAlt } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdOutlineOnlinePrediction } from "react-icons/md";
import Login from '../Login/Login';

const Navbar = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
        // Check initial login status
        const loginStatus = localStorage.getItem('isLoggedIn') === 'true';
        const storedEmail = localStorage.getItem('userEmail');
        setIsLoggedIn(loginStatus);
        if (storedEmail) {
            setUserEmail(storedEmail);
        }

        // Create a function to handle storage changes
        const handleStorageChange = (e) => {
            if (e.key === 'isLoggedIn') {
                setIsLoggedIn(e.newValue === 'true');
            }
            if (e.key === 'userEmail') {
                setUserEmail(e.newValue || '');
            }
        };

        // Add event listener
        window.addEventListener('storage', handleStorageChange);

        // Cleanup
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []); // Empty dependency array

    const handleLogin = () => {
        navigate('/login');
    };

    const handleLogout = () => {
        // Update state first
        setIsLoggedIn(false);
        setUserEmail('');
        
        // Then clear localStorage
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userEmail');
        
        // Navigate last
        navigate('/');
    };


    useEffect(() => {
        const spans = document.querySelectorAll('.nav_text span');
        spans.forEach((span, index) => {
          span.style.setProperty('--char-index', index);
        });
    }, []);

    const handleNavigationToNavbar = () => {
        navigate('/');
    };
    const handleNavigationToAbout = () => {
      navigate('/about');
    };
    const handleNavigationToContact = () => {
      navigate('/contact');
    };
    const handleNavigationToShop = () => {
      navigate('/shop');
    };



    return (
        <>
            <div className='front_img'>
                <div className='nav_main'>
                    <div className='nav_text'>
                        <span>C</span>
                        <span>l</span>
                        <span>a</span>
                        <span>s</span>
                        <span>s</span>
                        <span>i</span>
                        <span>c</span>
                        <span>s</span>
                    </div>
                    <div className='nav_btn'>
                        <button onClick={handleNavigationToNavbar}>Home</button> 
                        <button onClick={handleNavigationToShop}>Shop</button>
                        <button onClick={handleNavigationToAbout}>About</button>
                        <button onClick={handleNavigationToContact}>Contact</button>
                    </div>
                    <div className='nav_cart'>
                        {isLoggedIn ? (
                            <>
                            <div className='user_name text-white'>{userEmail.split('@')[0]}</div>
                            <button className='logout-btn' onClick={handleLogout}>
                                <FaSignOutAlt className="logout-icon" /> Logout
                            </button>
                            </>
                            
                        ) : (
                            <button className='login-btn' onClick={handleLogin}>
                                <FaUser className="login-icon" /> Login
                            </button>
                        )}
                        <button className='cart-btn' onClick={() => {navigate('/cart')}}>
                            <FaShoppingCart />
                        </button>
                    </div>
                </div>
                <div className='text_overlay'>
                    <p>Hey!! It's Classics</p>
                    <h1>Welcome to Our Shop</h1>
                    <p>Discover amazing products and unbeatable deals</p>
                </div>
                <div className='img_btn'>
                    <button onClick={handleNavigationToShop}>Shop Now <HiOutlineShoppingBag/></button>
                </div>
            </div>
            <div className='features-section'>
                <div className='feature'>
                    <MdOutlineOnlinePrediction className='feature-icon' />
                    <h3>Online Order</h3>
                    <p>Shop conveniently from the comfort of your home with our easy-to-use online ordering system.</p>
                </div>
                <div className='feature'>
                    <FaTruck className='feature-icon' />
                    <h3>Free Shipping</h3>
                    <p>Enjoy free shipping on all orders, making your shopping experience even more rewarding.</p>
                </div>
                <div className='feature'>
                    <FaShoppingBag className='feature-icon' />
                    <h3>Most Fashionable</h3>
                    <p>Stay on trend with our curated collection of the most fashionable and stylish products.</p>
                </div>
                <div className='feature'>
                    <FaCreditCard className='feature-icon' />
                    <h3>Safe Payment</h3>
                    <p>Shop with confidence using our secure payment options, ensuring your transactions are always protected.</p>
                </div>
            </div>
        </>
    );
};

export default Navbar;