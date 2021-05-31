/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useRef, useEffect, useState, Suspense} from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import About from "./About.js";
import Home from "./Home.js";
import Contact from "./Contact.js";
import Legal from "./Legal.js";
import Footer from "./Footer.js";
/*import Community from "./Community.js";*/
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch, Link, NavLink, useHistory } from 'react-router-dom';
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

    //Use history to open Home component on startup
    /** 
    const history = useHistory();
    useEffect(()=> {
    Figure out how to run history.push('/') on page load
      history.push('/');
      
      } ,[])
    */

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
      <ul className="navbar-nav">
      <li className="nav-item"><Link to="/about" style={{textDecoration: 'none'}}>About</Link></li>
      <li className="nav-item"><Link to="/contact" style={{textDecoration: 'none'}}>Contact</Link></li>
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
    
          <Route path = "/" exact component={Home}/>
            
            <Route path="/about" component={About}/> 

            <Route path="/contact" component={Contact}/>
            
            <Route path="/legal" component={Legal} />

              {/* <Route path="/community" component={Community} /> */}
             {/* This gives an error  <Route render={() => <h1>404: page not found</h1>} /> */}
          </Switch>
        
      </div>
      
      <Footer/>
      
    </div>
    </BrowserRouter>
    </Suspense>
  );
      }

export default App;

/*

  


<div className="container section-ourTeam">
	<div className="row">
		<div className="col-md-12 col-sm-12 col-xs-12 ourTeam-hedding text-center">
			<h1>Meet Our Team</h1>
		</div>
	</div>
	<div className="row">
		<div className="col-md-4 col-sm-4 col-xs-12">
			<div className="row section-success ourTeam-box text-center">
				<div className="col-md-12 section1">
					<img src="/demo/meet01.png">
				</div>
				<div className="col-md-12 section2">
					<p>LISA MAHETA</p><br>
					<h1>MARKETING</h1><br>
				</div>
				<div className="col-md-12 section3">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
					</p>
				</div>
				<div className="col-md-12 section4">
					<i className="fa fa-facebook-official" aria-hidden="true"></i>
					<i className="fa fa-twitter" aria-hidden="true"></i>
					<i className="fa fa-google-plus" aria-hidden="true"></i>
					<i className="fa fa-envelope" aria-hidden="true"></i>
				</div>
			</div>
		</div>
		<div className="col-md-4 col-sm-4 col-xs-12">
			<div className="row section-info ourTeam-box text-center">
				<div className="col-md-12 section1">
					<img src="/demo/meet02.png">
				</div>
				<div className="col-md-12 section2">
					<p>JOHN MEKER</p><br>
					<h1>DESIGNER</h1><br>
				</div>
				<div className="col-md-12 section3">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
					</p>
				</div>
				<div className="col-md-12 section4">
					<i className="fa fa-facebook-official" aria-hidden="true"></i>
					<i className="fa fa-twitter" aria-hidden="true"></i>
					<i className="fa fa-google-plus" aria-hidden="true"></i>
					<i className="fa fa-envelope" aria-hidden="true"></i>
				</div>
			</div>
		</div>
		<div className="col-md-4 col-sm-4 col-xs-12">
			<div className="row section-danger ourTeam-box text-center">
				<div className="col-md-12 section1">
					<img src="/demo/meet03.png">
				</div>
				<div className="col-md-12 section2">
					<p>VIN DEASEL</p><br>
					<h1>PRODUCTER</h1>
				</div>
				<div className="col-md-12 section3">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
					</p>
				</div>
				<div className="col-md-12 section4">
					<i className="fa fa-facebook-official" aria-hidden="true"></i>
					<i className="fa fa-twitter" aria-hidden="true"></i>
					<i className="fa fa-google-plus" aria-hidden="true"></i>
					<i className="fa fa-envelope" aria-hidden="true"></i>
				</div>
			</div>
		</div>
	</div>
</div>



================================= CSS =============================

body{
    background-color:#f1f1f1;
}
.ourTeam-hedding{
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../demo/hands-joined.jpg');
    height:200px;
    width:100%;
    background-size:100% 100%;
    background-repeat:no-repeat;
    background: linear-gradient(rgba(0,0,0,.10)); 
}
.ourTeam-hedding h1{
    color:#fff;
    padding:70px 0px;
    font-weight:900;
    z-index: 1;
}
.ourTeam-box{
    border-top: 6px solid #5DDDD3;
    background-color: #FFFFFF;
}
.section1{
    padding: 30px 0px 0px 0px;
}
.section1 img{
    border:5px solid #5DDDD3;
    padding:5px;
    border-radius:50%;
    height:170px;
    width: 170px;
}
.section2 h1{
    font-size:20px;
    color:#C1C1C1;
    margin:0px;
    border-bottom:2px solid #5DDDD3;
    display: inline-block;
    padding: 10px 0px;
}
.section2 p{
    background-color: #5DDDD3;
    display: inline-block;
    font-weight: bold;
    color:#fff;
    padding: 5px 15px;
    border-radius: 3px;
    margin-top: -20px;    
}
.section2 span{
    color:#979597;
}
.section2 label{
    background-color: #5DDDD3;
    padding: 8px 10px 8px 10px;
    color:#fff;
    font-weight: normal;
    margin: 30px 0px 35px 0px;
    border-radius: 2px;
}
.section3 p{
    padding: 10px 15px 0px 15px;
    font-size:12px;
    color:#c3c9c9;
}
.section4{
    padding:10px 0px 50px 0px;
}
.section4 i{
    color:#fff;
    padding:3px;
    border-radius: 2px; 
    font-size: 12px;
    background-color: #5DDDD3;
    cursor: pointer;
}
.section-info{
    border-top:6px solid #90DFAA;
}
.section-danger{
    border-top:6px solid #FD8469;
}
.section-info .section1 img{
    border:5px solid #90DFAA;
    padding:5px;
}
.section-info .section2 p{
    background-color: #90DFAA;
    color:#fff;
}
.section-danger .section2 p{
    background-color: #FD8469;
    color:#fff;
}
.section-danger .section1 img{
    border:5px solid #FD8469;
    padding:5px;
}
.section-info .section4 i{
    background-color: #90DFAA;  
}
.section-danger .section4 i{
    background-color: #FD8469;  
}
.section-info .section2 h1{
    border-bottom:2px solid #90DFAA;
}
.section-danger .section2 h1{
    border-bottom:2px solid #FD8469;
}

 */