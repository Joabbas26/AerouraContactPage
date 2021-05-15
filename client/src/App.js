/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState, Suspense} from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import Home from "./Home.js";
import About from "./About.js";
import Contact from "./Contact.js";
import Footer from "./Footer.js";
/*import Community from "./Community.js";*/
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import WebFont from 'webfontloader';

  
function App() {
    //Google Fonts
    useEffect(() => {
      WebFont.load({
        google: {
          families: ['Spectral', 'Karla', 'Source Sans Pro']
        }
      });
     }, []);

    // Set and change languages
    const { i18n, t } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('en');

    const changeLanguage = (lang) => {
      setCurrentLanguage(i18n.changeLanguage(lang));
    }
    
  

  //useState for hamburger menu
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  
  // useState for dropdown menu
  const [showDropDown, setShowDropDown] = useState(false);
  const handleShowDropDown = () => setShowDropDown(!showDropDown);

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

  return (
<Suspense fallback="loading">
  <BrowserRouter>
    <div className="App">

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
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      <li className="nav-item"><Link to="/about" style={{textDecoration: 'none'}}>About</Link></li>
      <li className="nav-item"><Link to="/contact" style={{textDecoration: 'none'}}>Contact</Link></li>
      {/*<li className="nav-item"><Link to="/community">Community</Link></li>*/}
      
    </ul>

     {/* Dropdown section */}
   <div className="dropdown">
     {/* Icon that handles Dropdown */}
      <button className="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" 
       onClick={handleShowDropDown} aria-expanded="false" ref={myRef}>
        <FontAwesomeIcon icon={faGlobe} size="2x" style={{ color: 'rgb(19, 143, 137)' }} id="icon" />
      </button>

    {/* Dropdown Menu content */}
      {showDropDown ?
      <div className="dropdown" aria-labelledby="dropdownMenuButton" id="dropDownMenu">
          <a className="dropdown-item" onClick={() => changeLanguage('en')}>English</a>
          <a className="dropdown-item" onClick={() => changeLanguage('es')}>Spanish</a>
      </div> 
      : null}
    </div>  
  </div>
</nav>

      {/* Content wrap to keep footer at bottom of page */}
      <div className="content-wrap">
        {/* Contains website data in multiple routes */}
          <Switch>
            <Route exact path= "/">
              <Home/>
            </Route>
            
            <Route path="/about" component={About}/> 

            <Route path="/contact" component={Contact}/>

            {/* <Route path="/legal" component={Legal} /> */}

              {/* <Route path="/community" component={Community} /> */}
             {/* This gives an error  <Route component={Error} /> */}
          </Switch>
        
      </div>
      
      <Footer/>
      
    </div>
    </BrowserRouter>
    </Suspense>
  );
      }

export default App;