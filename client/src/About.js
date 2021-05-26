import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faStar, faCommentDots, faMap, faBell, faArrowRight, faClock, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import React, {useEffect, useState} from 'react';
import './About.css';
import JehieliPortrait from './Images/JehieliPortrait.jpg';
import Oculus from './Images/Oculus.jpg';
import CityHallPark from './Images/CityHallPark.jpg';
import BatteryPark from './Images/BatteryPark.jpg';
import WorldTradeCenter from './Images/WorldTradeCenter.jpg';
import {FaTwitter, FaFacebookSquare, FaLinkedin, FaInstagram, FaArrowCircleUp} from 'react-icons/fa';

function About() {

        /* Open and close side panel */
        const [isActive, setIsActive] = useState(true);
        //Toggle the icon bar
        const [iconBarStyle, setIconBarStyle] = useState({});   
        //Reduce opacity of toggle button
        const [sidePanelStyle, setSidePanelSyle] = useState({});
        const toggle = () => {
             //Toggle the side panel on and off screen
            if (isActive === true) {
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
        // Add event listner if scroll to top button toggled
        useEffect(()=>{
          window.addEventListener('scroll', checkScrollTop)
          return function cleanup() {
            window.removeEventListener('scroll', checkScrollTop)
          }
        })
      //Scroll to top button visibility toggle
        const checkScrollTop = () => {
          if (!showScroll && window.pageYOffset > 500){
            setShowScroll(true)
          } else if (showScroll && window.pageYOffset <= 500){
            setShowScroll(false)
          }
        };
      //Behavior of scroll to top animation
        const scrollTop = () =>{
          window.scrollTo({top: 0, behavior: 'smooth'});
        };


    return (
        <div className="About">
            {/* Button to toggle side panel */}
            <button className="btn" id="sidePanel" onClick={toggle} style={sidePanelStyle}>&#9776;
            </button> 
            {/* Social media icons in side panel */}
            <div className="iconBarActive" style={iconBarStyle}>
                <a href="https://www.facebook.com/Aeroura"><FaFacebookSquare className="facebook"/></a>
                <a href="https://twitter.com/Aeroura_Travel"><FaTwitter className="twitter"/></a>
                <a href="https://www.instagram.com/aeroura_travel/"><FaInstagram className="instagram"/></a>
                <a href="https://www.linkedin.com"><FaLinkedin className="linkedin"/></a>  
            </div>
            {/* Landing Page Image and text */}
            <div className="aboutLandingPage">
                <div className="aboutText">
                    <p className="aboutTitle">
                        At Aeroua Travel, we believe in empowering individuals through global services
                        and travel, so that we can learn from each other; by sharing ideas.</p>
                </div>
            </div>
            {/* Vision Section, text and image */}
            <div className="row" id="visionRow">
                <div className="col-md-9" id="visionText">
                    <p className="visionHead">Vision</p>
                    <p className="visionSubHead"h4>All people feels empowered through technology in global service and travel.</p>
                </div>
                <div className="col-md-3" id="visionImageDiv">
                    <img src={WorldTradeCenter} alt="WorldTradeCenter" className="visionImage"></img>
                </div>
            </div>
            {/* Mission Section, text and image */}
            <div className="row" id="missionRow">
                <div className="col-md-3" id="missionImageDiv">
                    <img src={Oculus} alt="Oculus" className="missionImage"></img>
                </div>
                <div className="col-md-9" id="missionText">
                    <p className="missionHead">Mission</p>
                    <p className="missionSubHead"h4>To provide friendly quality service to travelers seeking cultural experiences.</p>
                </div>
            </div>
            {/* Values Section top row */}
            <div className="ourValues">
                <h3>Our Values</h3>
                <div className="row" id="values1">
                    {/* 'Resourcefulness' with icon */}
                    <div className="col-md-4">
                       <h4><FontAwesomeIcon icon={faCogs} style={{ color: 'rgb(19, 143, 137)' }} /> Resourcefulness</h4>
                       <p>We may not always have the answer, but we are committed to finding it.</p>
                    </div>
                    {/* 'Honesty' with icon */}
                    <div className="col-md-4">
                        <h4><FontAwesomeIcon icon={faStar} style={{ color: 'rgb(19, 143, 137)' }} /> Honesty</h4>
                       <p>We stand by the truth and what is best for our customers, even if it may cost us business.</p>
                    </div>
                    {/* 'Communication' with icon */}
                    <div className="col-md-4">
                        <h4><FontAwesomeIcon icon={faCommentDots} style={{ color: 'rgb(19, 143, 137)' }} /> Communication</h4>
                       <p>Communication is clear and concise, and always necessary throughout.</p>
                    </div>
                </div>
                {/* Values Section bottom row */}
                <div className="row" id="values2">
                    {/* 'Planning' with icon */}
                    <div className="col-md-4">
                       <h4><FontAwesomeIcon icon={faMap} style={{ color: 'rgb(19, 143, 137)' }} /> Planning</h4>
                       <p>We may not always have the answer, but we are committed to finding it.</p>
                    </div>
                    {/* 'Service' with icon */}
                    <div className="col-md-4">
                        <h4><FontAwesomeIcon icon={faBell} style={{ color: 'rgb(19, 143, 137)' }} /> Service</h4>
                       <p>We may not always have the answer, but we are committed to finding it.</p>
                    </div>
                </div>
            </div>
            <div className="adventurousTeam">
                <div className="adventurousTeamTitle"><h1>Our Adventurous Team</h1></div>
                {/* Jehieli Section, portait image with text info */}
                <div className="row" id="teamSectionRow">
                    <div className="col-lg-2 col-md-3 col-sm-12" id="imagePortrait">
                        <img src={JehieliPortrait} alt="JehieliPortrait" className="portraitImage"></img>
                        <p className ="imagePortaitText">Josue Jehieli Bastidas</p>
                        <FontAwesomeIcon icon={faArrowRight} className="arrowIcon"/>
                    </div>
                    <div className="col-lg-7 col-md-6 col-sm-12" id="teamText">
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12" id="imageSection">
                        <img src={CityHallPark} alt="CityHallPark" className="image"></img>
                        <p className ="imageText">City Hall Park</p>
                    </div>
                </div>
                {/* Joab Section, portait image with text info */}
                <div className="row" id="teamSectionRow">
                    <div className="col-lg-2 col-md-3 col-sm-12" id="imagePortrait">
                        <img src={JehieliPortrait} alt="JehieliPortrait" className="portraitImage"></img>
                        <p className ="imagePortaitText">Joab Bastidas</p>
                        <FontAwesomeIcon icon={faArrowRight} className="arrowIcon"/>
                    </div>
                    <div className="col-lg-7 col-md-6 col-sm-12" id="teamText">
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12" id="imageSection">
                        <img src={Oculus} alt="Oculus" className="image"></img>
                        <p className ="imageText">Oculus</p>
                    </div>
                </div>
                {/* Luis Section, portait image with text info */}
                <div className="row" id="teamSectionRow">
                    <div className="col-lg-2 col-md-3 col-sm-12" id="imagePortrait">
                        <img src={JehieliPortrait} alt="JehieliPortrait" className="portraitImage"></img>
                        <p className ="imagePortaitText">Luis Ugalde</p>
                        <FontAwesomeIcon icon={faArrowRight} className="arrowIcon"/>
                    </div>
                    <div className="col-lg-7 col-md-6 col-sm-12" id="teamText">
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12" id="imageSection">
                        <img src={BatteryPark} alt="BatteryPark" className="image"></img>
                        <p className ="imageText">Battery Park</p>
                    </div>
                </div>
                {/* Alexis Section, portait image with text info */}
                <div className="row" id="teamSectionRow">
                    <div className="col-lg-2 col-md-3 col-sm-12" id="imagePortrait">
                        <img src={JehieliPortrait} alt="JehieliPortrait" className="portraitImage"></img>
                        <p className ="imagePortaitText">Alexis Sanchez</p>
                        <FontAwesomeIcon icon={faArrowRight} className="arrowIcon"/>
                    </div>
                    <div className="col-lg-7 col-md-6 col-sm-12" id="teamText">
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12" id="imageSection">
                        <img src={WorldTradeCenter} alt="WorldTradeCenter" className="image"></img>
                        <p className ="imageText">World Trade Center</p>
                    </div>
                </div>
            </div>
            {/* Contact Us Section */}
            <div classame="contactUsSection">
                <div className="row" id="contactUsRow">
                    <div className="col-md-7">
                        <h2>Reach Out To Us</h2>
                        <h4>We love to hear from travelers and share their stories together. 
                            We get back to you within 24 hours.
                        </h4>
                        {/* Contact us form Section */}
                        <div className="contactUs">
                            <h4>Contact Us</h4>
                            <hr></hr>
                            <p>Fields Marked * are required</p>
                            {/* Form for anyone to contact the company */}
                            <form className = "contactUsForm">
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label for="firstName">First name</label>
                                        <input type="text" className="form-control" id="firstName" placeholder="First Name"/>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="email">Email*</label>
                                        <input type="email" className="form-control" id="email" placeholder="example@example.com"/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div class="form-group col-md-10">
                                        <label for="QuestionsOrConcerns">Subject*</label>
                                        <textarea class="form-control" id="QuestionsOrConcerns" rows="3">
                                        </textarea>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        {/* Virtual Hours Section */}
                        <div className="row" id="virtualHoursSection">
                            <div className="col-md-6 p-0">
                                <FontAwesomeIcon icon={faClock} size="3x" style={{ color: 'rgb(19, 143, 137)' }} />
                                <h3>Virtual Hours (EST)</h3>
                                <div className="table-responsive">
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <td>Monday</td>
                                                <td>11 am - 2pm</td>
                                            </tr>
                                            <tr>
                                                <td>Wednesday</td>
                                                <td>11 am - 2pm</td>
                                            </tr>
                                            <tr>
                                                <td>Friday</td>
                                                <td>11 am - 2pm</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            {/* Call Specialist Section */}
                            <div className="col-md-6" id="callSpecialist">
                                <FontAwesomeIcon icon={faPhoneAlt} size="3x" style={{ color: 'rgb(19, 143, 137)' }} />
                                <h3>Call a Specialist</h3>
                                <p className="phoneNumber">1-800-###-####</p>
                                <p>Call toll free until 2pm EST</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            {/* Scroll to top icon */}
            <FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>
        </div>
    )
}

export default About


