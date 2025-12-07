import { useState } from 'react';
import './Header.css';
import logo from '@shared/assets/logo/logo4epuha-black.png';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="header-left">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <span className="logo-text">TRAVEL WITH 4EPUHA</span>
            </div>

            <div className={`burger-btn ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <span className="burger-line"></span>
                <span className="burger-line"></span>
                <span className="burger-line"></span>
            </div>

            <div className={`header-right ${isMenuOpen ? 'open' : ''}`}>
                <div className="nav-item">EN/RU</div>
                <div className="nav-item" onClick={toggleMenu}>ABOUT US</div>
                <div className="nav-item" onClick={toggleMenu}>REGISTER</div>
                <div className="nav-item" onClick={toggleMenu}>SIGN IN</div>
            </div>
        </header>
    );
};