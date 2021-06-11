import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faStar, faCommentDots, faMap, faBell, faClock, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import React, {useEffect, useState} from 'react';
import './About.css';
import Josue from './Images/Josue.png';
import Joab from './Images/Joab.png';
//import Luis from './Images/Luis.png';
//import Alexis from './Images/Alexis.png';
import Oculus from './Images/Oculus.jpg';
import WorldTradeCenter from './Images/WorldTradeCenter.jpg';
import {FaTwitter, FaFacebookSquare, FaLinkedin, FaInstagram, FaArrowCircleUp} from 'react-icons/fa';
import { useTranslation } from "react-i18next";

function About() {

    //To call json files to translate
    const { t } = useTranslation();

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
                        {t(`about.landingPageTitle`)}
                    </p>
                </div>
            </div>
            {/* Vision Section, text and image */}
            <div className="row" id="visionRow">
                <div className="col-md-9" id="visionText">
                    <p className="visionHead">{t(`about.visionHead`)}</p>
                    <p className="visionSubHead">{t(`about.visionMessage`)}</p>
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
                    <p className="missionHead">{t(`about.missionHead`)}</p>
                    <p className="missionSubHead">{t(`about.missionMessage`)}</p>
                </div>
            </div>
            {/* Values Section top row */}
            <div className="ourValues">
                <h3>{t(`about.values.head`)}</h3>
                <div className="row" id="values1">
                    {/* 'Resourcefulness' with icon */}
                    <div className="col-md-4">
                       <h4><FontAwesomeIcon icon={faCogs} style={{ color: 'rgb(19, 143, 137)' }} /> {t(`about.values.resource`)}</h4>
                       <p>{t(`about.values.resourceText`)}</p>
                    </div>
                    {/* 'Honesty' with icon */}
                    <div className="col-md-4">
                        <h4><FontAwesomeIcon icon={faStar} style={{ color: 'rgb(19, 143, 137)' }} />{t(`about.values.honesty`)}</h4>
                       <p>{t(`about.values.honestyText`)}</p>
                    </div>
                    {/* 'Communication' with icon */}
                    <div className="col-md-4">
                        <h4><FontAwesomeIcon icon={faCommentDots} style={{ color: 'rgb(19, 143, 137)' }} /> {t(`about.values.communication`)}</h4>
                       <p>{t(`about.values.communicationText`)}</p>
                    </div>
                </div>
                {/* Values Section bottom row */}
                <div className="row" id="values2">
                    {/* 'Planning' with icon */}
                    <div className="col-md-4">
                       <h4><FontAwesomeIcon icon={faMap} style={{ color: 'rgb(19, 143, 137)' }} /> {t(`about.values.planning`)}</h4>
                       <p>{t(`about.values.planningText`)}</p>
                    </div>
                    {/* 'Service' with icon */}
                    <div className="col-md-4">
                        <h4><FontAwesomeIcon icon={faBell} style={{ color: 'rgb(19, 143, 137)' }} />{t(`about.values.service`)}</h4>
                       <p>{t(`about.values.serviceText`)}</p>
                    </div>
                </div>
            </div>    
{/* New Adventurous team test section */}
<div className="adventurousTeam">
    <div className="container">
        <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12 adventurousTeamTitle text-center">
                <h1>{t(`about.team.head`)}</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="row section-success ourTeam-box text-center">
                    <div className="col-md-12 section1">
                    <img src={Josue} alt="Josue" className="image"></img>
                    </div>
                    <div className="col-md-12 section2">
                        <p>Josue Bastidas</p><br/>
                        <h4>CEO</h4>
                    </div>
                    <div className="col-md-12 section3">
                        <p>{t(`about.team.teamText1`)}</p>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="row section-info ourTeam-box text-center">
                    <div className="col-md-12 section1">
                    <img src={Joab} alt="Joab" className="image"></img>
                    </div>
                    <div className="col-md-12 section2">
                        <p>Joab Bastidas</p><br/>
                        <h4>Frontend Developer</h4>
                    </div>
                    <div className="col-md-12 section3">
                    <p>{t(`about.team.teamText2`)}</p>
                    </div>
                </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="row section-danger ourTeam-box text-center">
                    <div className="col-md-12 section1">
                    <img src={Joab} alt="Alexis" className="image"></img>
                    </div>
                    <div className="col-md-12 section2">
                        <p>Alexis Sanchez</p><br/>
                        <h4>Backend Developer</h4>
                    </div>
                    <div className="col-md-12 section3">
                    <p>{t(`about.team.teamText3`)}</p>
                    </div>
                </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="row section-danger ourTeam-box text-center">
                    <div className="col-md-12 section1">
                    <img src={Joab} alt="Luis" className="image"></img>
                    </div>
                    <div className="col-md-12 section2">
                    <p>Luis Ugalde</p><br/>
                    <h4>CyberSecurity</h4>
                    </div>
                    <div className="col-md-12 section3">
                    <p>{t(`about.team.teamText4`)}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            
            {/* Contact Us Section */}
            <div classame="contactUsSection">
                <div className="row" id="contactUsRow">
                    <div className="col-md-7">
                        <h2>{t(`about.contactForm.head`)}</h2>
                        <h4>{t(`about.contactForm.subHead`)}</h4>
                        {/* Contact us form Section */}
                        <div className="contactUs">
                            <h4>{t(`about.contactForm.contact`)}</h4>
                            <hr></hr>
                            <p>{t(`virtualHoursForm.required`)}</p>
                            {/* Form for anyone to contact the company */}
                            <form className = "contactUsForm">
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label htmlFor="firstName">{t(`virtualHoursForm.FName`)}</label>
                                        <input type="text" className="form-control" id="firstName" placeholder="First Name"/>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label htmlFor="email">{t(`virtualHoursForm.email`)}*</label>
                                        <input type="email" className="form-control" id="email" placeholder="example@example.com"/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div class="form-group col-md-10">
                                        <label htmlFor="QuestionsOrConcerns">{t(`contactForm.subject`)}*</label>
                                        <textarea class="form-control" id="QuestionsOrConcerns" rows="3">
                                        </textarea>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">{t(`contactForm.submit`)}</button>
                            </form>
                        </div>
                        {/* Virtual Hours Section */}
                        <div className="row" id="virtualHoursSection">
                            <div className="col-md-6 p-0">
                                <FontAwesomeIcon icon={faClock} size="3x" style={{ color: 'rgb(19, 143, 137)' }} />
                                <h3>{t(`descriptionBoxes.virtualHours`)} (EST)</h3>
                                <div className="table-responsive">
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <td>{t(`descriptionBoxes.monday`)}</td>
                                                <td>11 am - 2pm</td>
                                            </tr>
                                            <tr>
                                                <td>{t(`descriptionBoxes.wednesday`)}</td>
                                                <td>11 am - 2pm</td>
                                            </tr>
                                            <tr>
                                                <td>{t(`descriptionBoxes.friday`)}</td>
                                                <td>11 am - 2pm</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            {/* Call Specialist Section */}
                            <div className="col-md-6" id="callSpecialist">
                                <FontAwesomeIcon icon={faPhoneAlt} size="3x" style={{ color: 'rgb(19, 143, 137)' }} />
                                <h3>{t(`about.contactForm.specialist`)}</h3>
                                <p className="phoneNumber">1-800-###-####</p>
                                <p>{t('about.contactForm.tollFree')}</p>
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


/*

{t(``)}

*/