import React, { Component } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faVideo, faCheckSquare, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { withTranslation } from 'react-i18next';

class Contact extends Component {

    
    state={
        name:'',
        lastname:'',
        email:'',
        message:'',
        phonenumber:'',
        emailError:'',
        sent:false
    }
    
    //Handle Inputs
    handleName= (e) => {
        this.setState({
            name:e.target.value
        })
    }
    
    handleLastName= (e) => {
        this.setState({
            lastname:e.target.value
        })
    }
    
    handleEmail= (e) => {
        this.setState({
            email:e.target.value
        })
    }
    
    handleMessage= (e) => {
        this.setState({
            message:e.target.value
        })
    }
    handlePhoneNumber= (e) => {
        this.setState({
            phonenumber:e.target.value
        })
    }
    
    //End of handle inputs
    
    formSubmit=(e)=>{
        e.preventDefault();
        
    
        let data = {
            name:this.state.name,
            lastname:this.state.lastname,
            email:this.state.email,
            message:this.state.message,
            phonenumber:this.state.phonenumber,
        }
    
        axios.post('./api/forma',data)
        .then(res=>{
            this.setState({
                sent:true,
            },this.resetForm())
        })
        .catch(()=>{
            console.log('Message not sent');
        })

        
    }
    
    // For reseting initial data
    resetForm=()=>{
        this.setState({
            name:'',
            lastname:'',
            email:'',
            message:'',
            phonenumber:''
        })
    
        setTimeout(()=>{
            this.setState({
                sent:false,
            })
        },3000)
    }

    

    render() {
    
    //To call json files to translate
    const { t } = this.props;

    return (
        <div className="app-contact">
        <form onSubmit={this.formSubmit} className ="scheduleTripForm">
            {/* Full Form Section */}
            <div className="virtualHours">
                <h1>{t('descriptionBoxes.virtualHours')}</h1>
                <p>{t('virtualHoursForm.subtitle')}</p>
                <div className="container-fluid" id="contactFormSection">
                    {/* Form video icon and description Section */}
                            <div className="videoAppointment">
                                <p>{t('virtualHoursForm.details')}</p>
                                <hr className="horizontalLine"></hr>
                                <div className="row" id="arrangeAppointmentSection">
                                    <div className="col-xl-1 col-lg-1 col-md-2 col-sm-1 col-xs-1" id="videoIconSection">
                                        <FontAwesomeIcon icon={faVideo} style={{ color: 'white'}} id="videoIcon" />
                                    </div>
                                    <div className="col-xl-10 col-lg-10 col-md-9 col-sm-10 col-xs-10" id="videoAppointmentInfo">
                                        <span className="videoAppointmentSpan">
                                            <p>{t('virtualHoursForm.videoAppointment')}</p>
                                        </span>
                                        <div className="row" id="appointmentRequest">
                                           <p>  <FontAwesomeIcon icon={faCheckSquare} size="2x" style={{ color: 'rgb(19, 143, 137)' }}/> 
                                           {t('virtualHoursForm.request')}
                                           </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Prefix */}
                                    <div className="row">
                                        <div className="form-group col-md-2">
                                            <label htmlFor="title">{t('virtualHoursForm.personTitle')}</label>
                                            <select id="title" className="form-control" style={{ backgroundColor: 'white'}}>
                                             <option value>{t('virtualHoursForm.choose')}...</option>
                                             <option>Mr.</option>
                                             <option>Mrs.</option>
                                             <option>Ms.</option>
                                             <option>Other</option>
                                            </select>
                                        </div>
                                        {/* First Name */}
                                        <div className="form-group col-md-3">
                                            <label htmlFor="firstName">{t('virtualHoursForm.FName')}</label>
                                            <input type="text" className="form-control" id="firstname" placeholder={`${t('virtualHoursForm.FName')}`}
                                            value={this.state.name}
                                            onChange={this.handleName}
                                            />
                                        </div>
                                        {/* Last Name */}
                                        <div className="form-group col-md-3">
                                            <label htmlFor="lastName">{t('virtualHoursForm.Lname')}</label>
                                            <input type="text" className="form-control" id="lastname" placeholder={`${t('virtualHoursForm.Lname')}`}
                                            value={this.state.lastname}
                                            onChange={this.handleLastName}
                                            />
                                        </div>
                                        {/* Email */}
                                        <div className="form-group col-md-4">
                                            <label htmlFor="email">{t('virtualHoursForm.email')}</label>
                                            <input type="email" className="form-control" id="email" placeholder={`${t('virtualHoursForm.email')}`}
                                            value={this.state.email}
                                            onChange={this.handleEmail}
                                            />
                                        </div>
                                    </div>
                                    {/* Phone Number */}
                                    <div className="row">
                                        <div className="form-group col-md-4">
                                            <label htmlFor="phoneNumber">{t('virtualHoursForm.number')}</label>
                                            <input type="tel" className="form-control" id="phoneNumber" placeholder="1-(555)-555-5555"
                                            value={this.state.phonenumber}
                                            onChange={this.handlePhoneNumber}
                                            />
                                        </div>
                                        {/* Best time to call */}
                                        <div className="form-group col-md-4">
                                            <label htmlFor="callTime">{t('virtualHoursForm.timeToCall')}</label>
                                            <select id="callTime" className="form-control" style={{ backgroundColor: 'white'}}>
                                             <option value>{t('virtualHoursForm.noPreference')}</option>
                                             <option>8am</option>
                                             <option>9am</option>
                                             <option>10am</option>
                                             <option>11am</option>
                                             <option>12pm</option>
                                             <option>1pm</option>
                                             <option>2pm</option>
                                             <option>3pm</option>
                                             <option>4pm</option>
                                             <option>5pm</option>
                                             <option>6pm</option>
                                            </select>
                                        </div>
                                        {/* More info text field */}
                                            <div className="form-group col-md-4">
                                                <label htmlFor="QuestionsOrConcerns">{t('virtualHoursForm.travelPlans')}</label>
                                                <textarea className="form-control" id="QuestionsOrConcerns" rows="3" 
                                                    placeholder= {`${t('virtualHoursForm.additionalInfo')}`}
                                                    value={this.state.message}
                                                    onChange={this.handleMessage}
                                                    >
                                                </textarea>
                                            </div>
                                    </div>
                                    {/* Submit button */}
                                    <div className="row">
                                        <div className="col">
                                            <button type="submit" className="submitButton btn btn-primary">{t('about.contactForm.subject')}</button>
                                        </div>
                                    </div>
                                    {/*  Line under this comment shows message only after form submit
                                    <div className={this.state.sent ? 'msg msgAppear':'msg'}>Message has been sent</div>
                                    */}
                                    <div style={this.state.sent ? {} : { display: 'none' }}>{t('vitualHoursForm.submit.message')}</div>
                                      
                                {/* Disclaimer Section */}
                                <div className="row"><p className="sub-text">{t('virtualHoursForm.disclaimer1')}</p></div>
                                {/* Disclaimer icon */}
                                <div className="row" id="Disclaimer">
                                    <div className="col-md-1">
                                        <FontAwesomeIcon icon={faInfoCircle} size="2x"/>
                                    </div>
                                    {/* Privacy Policy */}
                                    <div className="co-md-11">
                                        <p>{t('virtualHoursForm.disclaimer2')}</p>
                                    </div>
                                </div>
                            </div>                       
                </div> 
            </div>   
        </form> 
        </div>
        
    )
}
}

export default withTranslation()(Contact);
