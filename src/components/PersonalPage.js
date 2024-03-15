import React, { useEffect } from 'react';

function PersonalPage() {
    useEffect(() => {
        const userPhoto = document.getElementById("username");
        const usernameText = userPhoto.textContent;
        const userPhotoElement = document.querySelector('.userPhoto');
        userPhotoElement.style.backgroundImage = `url(../images/userPhoto/${usernameText}.jpg)`;
        userPhotoElement.style.backgroundSize = "cover";
        userPhotoElement.style.backgroundPosition = "center";
    }, []);

    return (
        <div className="horizontalCenter personalPage">
            <div className="container">
                <div className="verticalCenter user">
                    <div className="userPhoto">

                    </div>

                    <div className="userInfo">
                        <div className="verticalCenter userName" id="username">
                            111
                        </div>

                        <div className="userDescription">
                            Tell other user about yourself
                        </div>
                    </div>

                    <div className="history"></div>
                </div>
            </div>
        </div>
    );
}

export default PersonalPage;
