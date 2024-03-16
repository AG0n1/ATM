import React, { useEffect } from 'react';
import UserInfoBar from './personalPageTools/UserInfoBar';
import TransactionsButton from './personalPageTools/TransactionsButton';

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
                <UserInfoBar />
                <TransactionsButton />
            </div>

            
        </div>
    );
}

export default PersonalPage;
