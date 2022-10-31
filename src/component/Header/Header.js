import React from 'react';
import './style.css'
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigator = useNavigate();
    
    return (
        <header className="header">
            <div className='BtnGroup'>
                <div className="headerBtn" onClick={() => navigator("/")}>
                    <span>Home</span>
                </div>
                 <div className="headerBtn" onClick={() => navigator("/about")}>
                    <span>About</span>
                </div>
                <div className="headerBtn" onClick={() => alert('준비중입니다.')}>
                    <span>Contact</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
