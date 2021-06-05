import React, {useRef, useEffect, useState} from 'react';
import './Nav.css';
import i18n from "./i18n";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';

export default function Nav() {

       // Set and change languages
       const { t, i18n } = useTranslation();
   
       function handleClick(lang) {
         i18n.changeLanguage(lang);
       }
   
        // Used to hide dropdown on outside click
        const myRef = useRef();
   
        const handleClickOutside = e => {
            if (!myRef.current.contains(e.target)) {
              setShowDropDown(false);
            }
        };
    
        useEffect(() => {
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        });
     
   
     //useState for hamburger menu
     const [isNavCollapsed, setIsNavCollapsed] = useState(true);
     const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
     
     // useState for dropdown menu
     const [showDropDown, setShowDropDown] = useState(false);
     const handleShowDropDown = () => setShowDropDown(!showDropDown);


    return (
    <div className="navSection">
         {/* Header with links Navbar Bootstrap */}
        <nav className="navbar navbar-expand-lg" id="navHeader">

        {/* Hamburger menu button */}
        <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" 
        aria-controls="navbar" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" 
        onClick={handleNavCollapse}>&#9776;
        <span className="navbar-toggler-icon"></span>
        </button>

        {/* Hamburger menu section */}
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarToggle">
        <span className="homeLink"><NavLink to="/" activeClassName="active" style={{textDecoration: 'none'}}
            >AEROURA TRAVEL</NavLink>
        </span>
            <ul className="navbar-nav">
            <li className="nav-item"><Link to="/about" style={{textDecoration: 'none'}}>{t('About')}</Link></li>
            <li className="nav-item"><Link to="/contact" style={{textDecoration: 'none'}}>{t('Contact')}</Link></li>
            {/*<li className="nav-item"><Link to="/community">Community</Link></li>*/}
            
        </ul>

        {/* Dropdown section */}
        <div className="dropdownSection">
        {/* Icon that handles Dropdown */}
            <button className="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" 
            onClick={handleShowDropDown} aria-expanded="false" ref={myRef}>
            <FontAwesomeIcon icon={faGlobe} size="2x" style={{ color: 'rgb(19, 143, 137)' }} id="icon" />
            </button>
        {/* Dropdown Menu content */}
            {showDropDown ?
            <div className="dropdown" aria-labelledby="dropdownMenuButton" id="dropDownMenu">
                <button className="dropdown-item" onClick={() => handleClick('en')}>English</button>
                <button className="dropdown-item" onClick={() => handleClick('es')}>Spanish</button>
            </div> 
            : null}
        </div>
            
        </div>
        </nav>
    </div>
    )
}
