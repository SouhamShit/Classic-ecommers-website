import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Error.css';
import {FaHome} from 'react-icon/fa';

const Error = () => {
    const navigate = useNavigate();

    const handleNavigateHome = () => {
        navigate('/');
    };

    return (
        <div className="error-container">
            <div className="error-content">
                <div className="error-text">
                    <span>4</span>
                    <span>0</span>
                    <span>4</span>
                </div>
                <h1>Oops! Page Not Found</h1>
                <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                <button onClick={handleNavigateHome} className="return-home-btn">
                    Return Home <FaHome />
                </button>
            </div>
        </div>
    );
};

export default Error;