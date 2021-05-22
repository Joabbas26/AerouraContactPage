import React, {useRef, useState, useEffect, useCallback} from 'react';
import "./Home.css"
import BrookfieldPlace from './Images/BrookfieldPlace.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {FaTwitter, FaFacebookSquare, FaLinkedin, FaInstagram, FaArrowCircleUp} from 'react-icons/fa';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import NYCTravel from './Images/TravelBanner.jpg';
import BrooklynBridge from './Images/BrooklynBridge.jpg';
import Macys from './Images/Macy\'s.jpg';
import BroadwayStreet from './Images/BroadwayStreet.jpg';
import TimeSquare from './Images/TimeSquare.jpg';
import i18n from "i18next";
import { useTranslation } from "react-i18next";


function Home() {
 
 // Set and change languages
 const { i18n, t } = useTranslation();
 const [currentLanguage, setCurrentLanguage] = useState('en');

 const changeLanguage = (lang) => {
   setCurrentLanguage(i18n.changeLanguage(lang));
 }

     /* Open and close side panel */
     const [isActive, setIsActive] = useState(true);
     //Toggle the icon bar
     const [iconBarStyle, setIconBarStyle] = useState({});   
     //Reduce opacity of toggle button
     const [sidePanelStyle, setSidePanelSyle] = useState({});
     const toggle = () => {
          
         if (isActive === true) {
             //Must find a way to add multiple styles 
             setIconBarStyle({transition: "cubic-bezier(0, .52, 0, 1) transform .3s", transform: "translate3d(-100vw, 0, 0)"});
             setSidePanelSyle({backgroundColor: "rgb(255, 255, 255, 0.2)"});
         }
         else {
             setIconBarStyle({transform: "translate3d(0, -50%, 0)"});
             setSidePanelSyle({backgroundColor: "rgb(255, 255, 255)"});
         }
         setIsActive(!isActive);
     }
 
     //Scroll to top button
     const [showScroll, setShowScroll] = useState(false)
 
     useEffect(()=>{
       window.addEventListener('scroll', checkScrollTop)
       return function cleanup() {
         window.removeEventListener('scroll', checkScrollTop)
       }
     })
   
     const checkScrollTop = () => {
       if (!showScroll && window.pageYOffset > 500){
         setShowScroll(true)
       } else if (showScroll && window.pageYOffset <= 500){
         setShowScroll(false)
       }
     };
   
     const scrollTop = () =>{
       window.scrollTo({top: 0, behavior: 'smooth'});
     };
 
     //Slides info objects
     const slides = ([
         {
             title: 'Brookfield Place',
             image: BrookfieldPlace,
         },
         {
             title: "Brooklyn Bridge",
             image: BrooklynBridge
         },
         {
             title: "Times Square",
             image: TimeSquare
         },
     ]);
     
     //State for active slide index
     const [activeSlide, setActiveSlide] = useState(0);
     // Set the length of the slides array
     const { length } = slides;
 
    
 
     //used to control next and prev slides in carousel
     const nextSlide = useCallback(() => {
     // Check if we've reached the final slide in the array
     // If so, go back to 0, else activeSlide + 1
     setActiveSlide(activeSlide === length - 1 ? 0 : activeSlide + 1); 
     }, [activeSlide, length])
 
 // Change image every few seconds
      useEffect(() => {
         const timer = setInterval(() => {
           nextSlide();
         }, 4000);
         return () => clearInterval(timer);
       }, [nextSlide]);
 
 
     const prevSlide = () => {
     // Check if we've reached the first slide in the array
     // If so, go back to 2, else activeSlide - 1
     setActiveSlide(activeSlide === 0 ? 2 : activeSlide - 1);
     }

     return(

        <div className="Home">
        <div className="socialMediaPanel">
            {/* Button to toggle side panel */}
            <button className="btn" id="sidePanel" onClick={toggle} style={sidePanelStyle}>&#9776;
            </button> 
            {/* Social media icons in side panel */}
            <div className="iconBarActive" style={iconBarStyle}>
                <a href="facebook.com"><FaFacebookSquare className="facebook"/></a>
                <a href="twitter.com"><FaTwitter className="twitter"/></a>
                <a href="instagram.com"><FaInstagram className="instagram"/></a>
                <a href="linkedin.com"><FaLinkedin className="linkedin"/></a>  
            </div>
        </div>
        {/* Landing Page Image and text */}
      <div className="landingPage">
      <img src={BrooklynBridge} alt="BrooklynBridge" className="landingPageBackground"></img>
          <div className="text">
              <p className="title">AEROURA TRAVEL</p>
              <p className="subTitle">{t(`landing.page.title`)}</p>
          </div>
      </div>
      {/* Carousel, travel info and voyage section */}
      <div className="descriptionBoxes">
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-6 col-xs-12">
                        {/* Section with slideshows */}
                        <div className="PlacesToSee">
                            <h4>Places to See - NYC</h4>
                            <div className="carousel" data-ride="carousel">
                                {/* Image slideshows */}
                                <div className="carousel-inner">
                                {slides.map((s, i) => (
                                    <div 
                                    // if active slide, include the "active" class
                                className={i === activeSlide ? "carousel-item active" : "carousel-item"}
                                key={s.title}
                                // if not active, hide from screen readers for accessibility
                                aria-hidden={i !== activeSlide}>
                                    <img className="d-block w-100" src={s.image} alt={`${s.title}`} />
                                        <div className="carousel-caption d-md-block">
                                            <h5 className="slideTitle">{s.title}</h5>
                                        </div>
                                    </div>
                                ))}
                                </div>
                                {/* Next slide button */}
                                    <button className="carousel-control-prev" data-slide="prev" onClick={prevSlide}>
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </button>
                                {/* Previous slide button */}
                                    <button className="carousel-control-next" data-slide="next" onClick={nextSlide}>
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        {/* Travel counselor contact info */}
                        <div id="TravelCounselor">
                            <div className="ContactInfo">
                                <h1>Travel Advisor</h1>
                                <p>Connect with an advisor to plan your next trip</p>
                                <p><FontAwesomeIcon icon={faPhoneAlt} style={{ color: 'rgb(19, 143, 137)' }} /> (347)-619-2214</p>
                                <p><FontAwesomeIcon icon={faEnvelope} style={{ color: 'rgb(19, 143, 137)' }} /> Josue@aeroura.com</p>
                                <button type="submit" className="btn btn-primary" id="scheduleBtn" onClick={event => window.location.href='/contact'}
                                >Schedule an Appointment</button>
                            </div>
                        </div>
                    </div>
                    {/* Travel planning section */}
                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div id="PlanTrip">
                            {/* Travel planning form */}
                            <form className="planYourTrip">
                                {/* Form description */}
                                <div className="Title">
                                    <h2 className="TitleIcon">Plan Your Trip</h2>
                                    <p className="TitleText">What would your next vacation look like?</p>
                                </div>
                                {/* Form checkboxes */}
                                <div className="form-group">
                                    <div class="form-check-inline">
                                        <label class="form-check-label">
                                            <input type="checkbox" className="form-check-input" value=""/>Flight
                                        </label>
                                    </div>
                                    <div className="form-check-inline">
                                        <label class="form-check-label">
                                            <input type="checkbox" className="form-check-input" value=""/>Tour
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-check-inline">
                                        <label className="form-check-label">
                                            <input type="checkbox" className="form-check-input" value=""/>Hotel
                                        </label>
                                    </div>
                                    <div className="form-check-inline">
                                        <label className="form-check-label">
                                            <input type="checkbox" className="form-check-input" value=""/>Other
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-check-inline">
                                        <label className="form-check-label">
                                            <input type="checkbox" className="form-check-input" value=""/>Rental Car
                                        </label>
                                    </div>
                                </div>
                                {/* Form submit button */}
                                <div className="joinButton">
                                    <button type="submit" className="btn btn-danger" onClick={event => window.location.href='/contact'}>Join Here</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Travel Banner Section */}
            <div className="travelBanner">
                <img src={NYCTravel} alt="NYCTravel" className="travelBannerBackground">  
                </img>
                <div className="travelBannerText">
                    NYC TRAVEL
                </div>
            </div>

            {/* Specialization Boxes Section */}
            <div className="SpecializeBoxes">
                <h3 className="headingText">We Specialize In...</h3>
                <div className="row">
                    {/* Local travel specialization */}
                    <div className="col-md-4">
                       <h4 className="headingText">Local Travel</h4> 
                       <div className="box">
                        <img src={BrooklynBridge} alt="BrooklynBridge" className="img-fluid"></img>
                            <div className="descriptionText">
                                <p>Relax and Enjoy. There's not much else to it and we're just fine with that.</p>
                                <p>A trip for the entire family or a solo adventure is just around the corner.</p>
                            </div>
                        </div>
                    </div>
                    {/* Planning trips specialization */}
                    <div className="col-md-4">
                    <h4 className="headingText">Planning Trips</h4>
                        <div className="box">
                        <img src={Macys} alt="Macys" className="img-fluid"></img>
                            <div className="descriptionText">
                                <p>There's magic in planning and we can't get enough of it.</p>
                                <p>We enjoy planning your vacation, weekend Getaways, and family retreats.</p>
                            </div>
                        </div>
                    </div>
                    {/* New York city specialization */}
                    <div className="col-md-4">
                    <h4 className="headingText">New York City</h4>
                        <div className="box">
                        <img src={BroadwayStreet} alt="BroadwayStreet" className="img-fluid"></img>
                            <div className="descriptionText">
                                <p>The best and brightest come to New York. There's no place like it so reach out to us to get the ins-and-outs of our booming city.</p>
                                <p>We love it and we know you will too.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            {/* Scroll to top button */}
            <FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{height: 40, width: 100, display: showScroll ? 'flex' : 'none'}}/>
    </div>
     );

}

export default Home;