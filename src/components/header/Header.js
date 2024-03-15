import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Form from '../Form';



function Header() {
    const [showRegistrationForm, setShowRegistrationForm] = useState(false);
    const navigate = useNavigate()
    const toggleRegistrationForm = () => {
        setShowRegistrationForm(!showRegistrationForm);
        if (!showRegistrationForm) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
            navigate('/personalPage')
        }
    }

    return (
        <header className="verticalCenter">
            <div className="container absoluteCenter headerInfo">
                <a href='/' className="absoluteCenter headerLogo">
                    CropTopia
                </a>

                <div className="verticalCenter headerNav">
                    <a href="/inProgress">About us</a>
                    <a href="/inProgress">News</a>
                    <a href="/inProgress">Prices</a>
                    <a href="/personalPage">Personal Page</a>
                </div>

                <div className="absoluteCenter headerProfile" onClick={toggleRegistrationForm}>
                    
                </div>
                {showRegistrationForm && (
                    <Form />
                )}
            </div>
        </header>
    )
}

export default Header;
