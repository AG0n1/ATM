import logo from "../../images/mainPhoto.png"
import React, { useState } from 'react';
import Form from '../Form';

function Main() {

    const [showRegistrationForm, setShowRegistrationForm] = useState(false);
    const toggleRegistrationForm = () => {
        setShowRegistrationForm(!showRegistrationForm);
        if (!showRegistrationForm) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }

    return(
        <div className="main">
            <div className="absoluteCenter container mainInfo">
                <div className="introText">
                    <div className="title">
                        CropTopia: Empowering Cooperatives Through Easy Accounting
                    </div>

                    <div className="info">
                        Empower your farmer cooperative with CropTopia – the intuitive accounting platform designed to streamline expense tracking, maximize profits, and foster financial transparency among members
                        <button onClick={toggleRegistrationForm}>
                            Register
                            {
                                showRegistrationForm && (<Form />)
                            }
                        </button>
                    </div>
                </div>

                <div className="introImage">
                    <img width="100%" src={logo}></img>
                </div>
            </div>

            
        </div>
    )
}

export default Main