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
                <a className="absoluteCenter headerLogo">
                    CropTopia
                </a>

                <div className="absoluteCenter headerNav">
                    
                </div>

                <div className="absoluteCenter headerProfile" onClick={toggleRegistrationForm}>
                    {showRegistrationForm && (
                        <Form />
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header;
