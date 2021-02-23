import React from 'react';
import JehieliProfessional from './Images/JehieliPortrait.jpg';
import BrookfieldPlace from './Images/BrookfieldPlace.jpg';
import JehieliMountains from './Images/JehieliMountains.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faClock, faVideo, faCheckSquare, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import NYCTravel from './Images/TravelBanner.jpeg';
import BrooklynBridge from './Images/BrooklynBridge.jpg';
import Macys from './Images/Macy\'s.jpg';
import BroadwayStreet from './Images/BroadwayStreet.jpg';
import './Home.css';


export default function Home() {
    return (
    <div className="Home">
      <div className="landingPage">
          <div className="text">
              <p className="title">AEROURA TRAVEL</p>
              <p className="subTitle">EXPERIENCE THE WORLD</p>
          </div>
      </div>
      <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <h4>Places to See - NYC</h4>
                        <div className="PlacesToSee">
                            <img src={BrookfieldPlace} alt="BrookfieldPlace" width={604} height={270} mode='fit'></img>
                            <h6>Brookfield Place - </h6>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="TravelCounselor">
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={JehieliProfessional} alt="Josue" width={200} height={300}></img>
                                </div>
                                <div className="col-md-9">
                                    <div className="Name">
                                        <h3>Josue Jehieli Bastidas</h3>
                                        <h5>Travel Counselor</h5>
                                    </div>
                                    <div className="ContactInfo">
                                        <p><FontAwesomeIcon icon={faPhoneAlt} style={{ color: 'rgb(19, 143, 137)' }} /> (347)-619-2214</p>
                                        <p><FontAwesomeIcon icon={faEnvelope} style={{ color: 'rgb(19, 143, 137)' }} /> Josue@aeroura.com</p>
                                        <button type="submit" className="btn btn-primary">Schedule an Appointment</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="VirtualHours">
                            <div className="row">
                                <div className="col-md-7">
                                    <img src={JehieliMountains} alt="JehieliMountains" width={350} height={300} mode='fit'></img>
                                </div>
                                <div className="col-md-5">
                                    <div className="Title">
                                        <h4><FontAwesomeIcon icon={faClock} style={{ color: 'rgb(19, 143, 137)' }} /> Virtual Hours</h4>
                                        <h6>Monday, Wednesday, Friday</h6>
                                        <h6>11am - 2pm (EST)</h6>
                                    </div>
                                    <div className="joinButton">
                                        <button type="submit" className="btn btn-primary">Join Here</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="travelBanner">
                <img src={NYCTravel} alt="NYCTravel" className="travelBannerBackground">  
                </img>
                <div className="travelBannerText">
                    NYC TRAVEL
                </div>
            </div>
            <div className="SpecializeBoxes">
                <h3 className="headingText">We Specialize In...</h3>
                <div className="row">
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
            <div className="virtualHours">
                <h1>Virtual Hours</h1>
                <p>Meet With Our Friendly Representatives via Video Chat to Plan Your Future Trips.</p>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8" id="firstSection">
                            <div className="videoAppointment">
                                <p>Your Details</p>
                                <hr className="horizontalLine"></hr>
                                <div className="row" id="arrangeAppointmentSection">
                                    <div className="col-md-1" id="videoIcon">
                                        <FontAwesomeIcon icon={faVideo} size="3x" style={{ color: 'white' }} />
                                    </div>
                                    <div className="col">
                                        <span className="pb-0">
                                            <p>Arrange a video appointment</p>
                                        </span>
                                        <div className="row">
                                            <div className="col-md-1 pt-0 mt-0">
                                                <FontAwesomeIcon icon={faCheckSquare} size="3x" style={{ color: 'rgb(19, 143, 137)' }}/>
                                            </div>
                                            <div className="col-md-11 p-0">
                                                <p>Request your appointment and a specialist will be in touch to confirm a date and time to suit you</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-md-3">
                                            <label for="title">Title</label>
                                            <select id="title" className="form-control">
                                             <option selected>Choose...</option>
                                             <option>Mr.</option>
                                             <option>Mrs.</option>
                                             <option>Ms.</option>
                                             <option>Other</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label for="firstName">First Name</label>
                                            <input type="text" className="form-control" id="firstName" placeholder="First Name"/>
                                        </div>
                                        <div className="form-group col-md-5">
                                            <label for="lastName">Last Name</label>
                                            <input type="text" className="form-control" id="lastName" placeholder="Last Name"/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                    <div className="form-group col-md-4">
                                            <label for="inputEmail4">Email</label>
                                            <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="phoneNumber">Phone Number</label>
                                            <input type="tel" className="form-control" id="phoneNumber" placeholder="1-(555)-555-5555"/>
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label for="callTime">Best Time To Call You</label>
                                            <select id="callTime" className="form-control">
                                             <option selected>No Preference</option>
                                             <option>11am</option>
                                             <option>12pm</option>
                                             <option>1pm</option>
                                             <option>2pm</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                                <p className="sub-text">
                                We ask you for your number so that one of our specialists can call or text you to discuss your travel plans. 
                                Standard rates may apply. By submitting this form, you agree to us getting in touch with you in this way.
                                </p>
                                <div className="row" id="Disclaimer">
                                    <div className="col-md-1">
                                        <FontAwesomeIcon icon={faInfoCircle} size="2x"/>
                                    </div>
                                    <div className="co-md-11">
                                        <p>Your privacy is paramount to Aeroura Travel and we will never share your personal data with anyone.
                                            For further info, please see our <a href="www.facebook.com">privacy policy.</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="hours">
                                <FontAwesomeIcon icon={faClock} size="3x" style={{ color: 'rgb(19, 143, 137)' }} />
                                <h3>Virtual Hours (EST)</h3>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>Monday</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p>11 am - 2pm</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>Wednesday</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p>11 am - 2pm</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>Friday</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p>11 am - 2pm</p>
                                    </div>
                                </div>
                            </div>
                            <hr className="horizontalLine"></hr>
                        <div>
                        <div className="travelPlansForm">
                            <p>Your Travel Plans</p>
                        <hr className="horizontalLine"></hr>
                            <p className="sub-text">Fields marked* are required</p>  
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>Destination</label>
                                    <select id="title" className="form-control">
                                        <option selected>Choose...</option>
                                        <option>New York</option>
                                        <option>Mexico</option>
                                        <option>Peru</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row">
                                <div class="form-group col-md-11">
                                    <label for="QuestionsOrConcerns">TravelPlans</label>
                                    <textarea class="form-control" id="QuestionsOrConcerns" rows="3" 
                                        placeholder= "E.g. Number of travelers, duration, travel dates, level of accommodations">
                                    </textarea>
                                </div>
                            </div>
                            
                        </form>
                    </div>
                    <button type="submit" className="btn btn-primary" id="submitButton">Submit Inquiry</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
}
