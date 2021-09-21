import React from "react";
import "./Header.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({isBlack}) => {
    return (
        <header className={isBlack ? "black" : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/320px-Logonetflix.png" alt="netflix"/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="user"/>
                </a>
            </div>
        </header>
    )
}