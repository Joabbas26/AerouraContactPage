import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faStar, faCommentDots, faMap, faBell, faArrowRight, faClock, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import React, {useEffect, useState} from 'react';
import './About.css';
import JehieliGreece from './Images/JehieliGreece.jpg';
import JehieliPortrait from './Images/JehieliPortrait.jpg';
import Oculus from './Images/Oculus.jpg';
import CityHallPark from './Images/CityHallPark.jpg';
import BatteryPark from './Images/BatteryPark.jpg';
import WorldTradeCenter from './Images/WorldTradeCenter.jpg';
import JehieliMuseum from './Images/JehieliMuseum.jpg';
import {FaTwitter, FaFacebookSquare, FaLinkedin, FaInstagram, FaArrowCircleUp} from 'react-icons/fa';

function About() {

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


    return (
        <div className="About">
            <button className="btn" id="sidePanel" onClick={toggle} style={sidePanelStyle}>&#9776;
            </button> 
            <div className="iconBarActive" style={iconBarStyle}>
                <a href="facebook.com"><FaFacebookSquare className="facebook"/></a>
                <a href="twitter.com"><FaTwitter className="twitter"/></a>
                <a href="instagram.com"><FaInstagram className="instagram"/></a>
                <a href="linkedin.com"><FaLinkedin className="linkedin"/></a>  
            </div>
            {/* Landing Page Image */}
            <div className="aboutLandingPage">
                <div className="aboutText">
                    <p className="aboutTitle" style={{fontFamily: 'Spectral'}}>
                        At Aeroua Travel, we believe in empowering individuals through global services
                        and travel, so that we can learn from each other; by sharing ideas.</p>
                </div>
            </div>
            {/* Vision Section */}
            <div className="row" id="visionRow">
                <div className="col-md-9" id="visionText">
                    <p className="visionHead" style={{fontFamily: 'Spectral'}}>Vision</p>
                    <p className="visionSubHead" style={{fontFamily: 'Karla'}}>All people feels empowered through technology in global service and travel.</p>
                </div>
                <div className="col-md-3" id="visionImage">
                    <img src={JehieliGreece} alt="JehieliGreece" className="visionImage"></img>
                </div>
            </div>
            {/* Mission Section */}
            <div className="row" id="missionRow">
                <div className="col-md-3" id="missionImage">
                    <img src={Oculus} alt="Oculus" className="missionImage"></img>
                </div>
                <div className="col-md-9" id="missionText">
                    <p className="missionHead" style={{fontFamily: 'Spectral'}}>Mission</p>
                    <p className="missionSubHead" style={{fontFamily: 'Karla'}}>To provide friendly quality service to travelers seeking cultural experiences.</p>
                </div>
            </div>
            {/* Values Section 1 */}
            <div className="ourValues">
                <h3 style={{fontFamily: 'Spectral'}}>Our Values</h3>
                <div className="row" id="values1">
                    <div className="col-md-4">
                       <h4 style={{fontFamily: 'Karla'}}><FontAwesomeIcon icon={faCogs} style={{ color: 'rgb(19, 143, 137)' }} /> Resourcefulness</h4>
                       <p style={{fontFamily: 'Source Sans Pro'}}>We may not always have the answer, but we are committed to finding it.</p>
                    </div>
                    <div className="col-md-4">
                        <h4 style={{fontFamily: 'Karla'}}><FontAwesomeIcon icon={faStar} style={{ color: 'rgb(19, 143, 137)' }} /> Honesty</h4>
                       <p style={{fontFamily: 'Source Sans Pro'}}>We stand by the truth and what is best for our customers, even if it may cost us business.</p>
                    </div>
                    <div className="col-md-4">
                        <h4 style={{fontFamily: 'Karla'}}><FontAwesomeIcon icon={faCommentDots} style={{ color: 'rgb(19, 143, 137)' }} /> Communication</h4>
                       <p style={{fontFamily: 'Source Sans Pro'}}>Communication is clear and concise, and always necessary throughout.</p>
                    </div>
                </div>
                {/* Values Section 2 */}
                <div className="row" id="values2">
                    <div className="col-md-4">
                       <h4 style={{fontFamily: 'Karla'}}><FontAwesomeIcon icon={faMap} style={{ color: 'rgb(19, 143, 137)' }} /> Planning</h4>
                       <p style={{fontFamily: 'Source Sans Pro'}}>We may not always have the answer, but we are committed to finding it.</p>
                    </div>
                    <div className="col-md-4">
                        <h4 style={{fontFamily: 'Karla'}}><FontAwesomeIcon icon={faBell} style={{ color: 'rgb(19, 143, 137)' }} /> Service</h4>
                       <p style={{fontFamily: 'Source Sans Pro'}}>We may not always have the answer, but we are committed to finding it.</p>
                    </div>
                    <div className="col-md-4">
                        <img src={JehieliGreece} alt="JehieliGreece" id="valuesImage"></img>
                    </div>
                </div>
            </div>
            <div className="adventurousTeam">
                <div className="adventurousTeamTitle"><h1>Our Adventurous Team</h1></div>
                {/* Jehieli Section */}
                <div className="row" id="teamSectionRow">
                    <div className="col-lg-2 col-md-3 col-sm-12" id="imagePortrait">
                        <img src={JehieliPortrait} alt="JehieliPortrait" className="portraitImage"></img>
                        <p className ="imagePortaitText" style={{fontFamily: 'Source Sans Pro'}}>Josue Jehieli Bastidas</p>
                        <FontAwesomeIcon icon={faArrowRight} className="arrowIcon"/>
                    </div>
                    <div className="col-lg-7 col-md-6 col-sm-12" id="teamText">
                        <p style={{fontFamily: 'Karla'}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12" id="imageSection">
                        <img src={CityHallPark} alt="CityHallPark" className="image"></img>
                        <p className ="imageText" style={{fontFamily: 'Source Sans Pro'}}>City Hall Park</p>
                    </div>
                </div>
                {/* Joab Section */}
                <div className="row" id="teamSectionRow">
                    <div className="col-lg-2 col-md-3 col-sm-12" id="imagePortrait">
                        <img src={JehieliPortrait} alt="JehieliPortrait" className="portraitImage"></img>
                        <p className ="imagePortaitText" style={{fontFamily: 'Source Sans Pro'}}>Joab Bastidas</p>
                        <FontAwesomeIcon icon={faArrowRight} className="arrowIcon"/>
                    </div>
                    <div className="col-lg-7 col-md-6 col-sm-12" id="teamText">
                        <p style={{fontFamily: 'Karla'}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12" id="imageSection">
                        <img src={Oculus} alt="Oculus" className="image"></img>
                        <p className ="imageText" style={{fontFamily: 'Source Sans Pro'}}>Oculus</p>
                    </div>
                </div>
                {/* Luis Section */}
                <div className="row" id="teamSectionRow">
                    <div className="col-lg-2 col-md-3 col-sm-12" id="imagePortrait">
                        <img src={JehieliPortrait} alt="JehieliPortrait" className="portraitImage"></img>
                        <p className ="imagePortaitText" style={{fontFamily: 'Source Sans Pro'}}>Luis Ugalde</p>
                        <FontAwesomeIcon icon={faArrowRight} className="arrowIcon"/>
                    </div>
                    <div className="col-lg-7 col-md-6 col-sm-12" id="teamText">
                        <p style={{fontFamily: 'Karla'}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12" id="imageSection">
                        <img src={BatteryPark} alt="BatteryPark" className="image"></img>
                        <p className ="imageText" style={{fontFamily: 'Source Sans Pro'}}>Battery Park</p>
                    </div>
                </div>
                {/* Alexis Section */}
                <div className="row" id="teamSectionRow">
                    <div className="col-lg-2 col-md-3 col-sm-12" id="imagePortrait">
                        <img src={JehieliPortrait} alt="JehieliPortrait" className="portraitImage"></img>
                        <p className ="imagePortaitText" style={{fontFamily: 'Source Sans Pro'}}>Alexis Sanchez</p>
                        <FontAwesomeIcon icon={faArrowRight} className="arrowIcon"/>
                    </div>
                    <div className="col-lg-7 col-md-6 col-sm-12" id="teamText">
                        <p style={{fontFamily: 'Karla'}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12" id="imageSection">
                        <img src={WorldTradeCenter} alt="WorldTradeCenter" className="image"></img>
                        <p className ="imageText" style={{fontFamily: 'Source Sans Pro'}}>World Trade Center</p>
                    </div>
                </div>
            </div>
            {/* Contact Us Section */}
            <div classame="contactUsSection">
                <div className="row" id="contactUsRow">
                    <div className="col-md-7">
                        <h2 style={{fontFamily: 'Spectral'}}>Reach Out To Us</h2>
                        <h4 style={{fontFamily: 'Karla'}}>We love to hear from travelers and share their stories together. 
                            We get back to you within 24 hours.
                        </h4>
                        {/* Contact us form Section */}
                        <div className="contactUs">
                            <h4 style={{fontFamily: 'Spectral'}}>Contact Us</h4>
                            <hr></hr>
                            <p style={{fontFamily: 'Source Sans Pro'}}>Fields Marked * are required</p>
                            {/* Form Tag */}
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label for="firstName" style={{fontFamily: 'Source Sans Pro'}}>First name</label>
                                        <input type="text" className="form-control" id="firstName" placeholder="First Name"/>
                                    </div>
                                    <div class="form-group col-md-5">
                                        <label for="LastName" style={{fontFamily: 'Source Sans Pro'}}>Last name</label>
                                        <input type="text" className="form-control" id="lastName" placeholder="Last Name"/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div class="form-group col-md-10">
                                        <label for="QuestionsOrConcerns" style={{fontFamily: 'Source Sans Pro'}}>Subject</label>
                                        <textarea class="form-control" id="QuestionsOrConcerns" rows="3">
                                        </textarea>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary" style={{fontFamily: 'Source Sans Pro'}}>Submit</button>
                            </form>
                        </div>
                        {/* Virtual Hours Section */}
                        <div className="row" id="virtualHoursSection">
                            <div className="col-md-6 p-0">
                                <FontAwesomeIcon icon={faClock} size="3x" style={{ color: 'rgb(19, 143, 137)' }} />
                                <h3 style={{fontFamily: 'Spectral'}}>Virtual Hours (EST)</h3>
                                <div className="table-responsive">
                                    <table className="table">
                                        <tbody style={{fontFamily: 'Karla'}}>
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
                                <h3 style={{fontFamily: 'Spectral'}}>Call a Specialist</h3>
                                <p className="phoneNumber" style={{fontFamily: 'Source Sans Pro'}}>1-800-###-####</p>
                                <p style={{fontFamily: 'Source Sans Pro'}}>Call toll free until 2pm EST</p>
                            </div>
                        </div>
                    </div>
                    {/* Pic of Jehieli in museum */}
                    <div className="col-md-5 p-0 m-0">
                        <img src={JehieliMuseum} alt="JehieliMuseum" className="contactImage"></img>
                    </div>
                </div>
                
            </div>
            <FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>
        </div>
    )
}

export default About