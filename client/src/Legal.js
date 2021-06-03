import React, {useEffect, useState} from 'react';
import WebFont from 'webfontloader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {FaArrowCircleUp} from 'react-icons/fa';
import "./Legal.css";

export default function Legal() {

    //Google Fonts
    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Spectral', 'Karla', 'Source Sans Pro']
          }
        });
       }, []);

      
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
        <div className="legal">
            

        <div className= "container">
            <h4>PRIVACY POLICY - Last updated November 30, 2020</h4>

            <p>Thank you for choosing to be
            part of our community at Aeroura (“Company”, “we”, “us", or “our”). 
            We are committed to protecting your personal information and your
            right to privacy. If you have any questions or concerns about our policy, or our
            practices with regards to your personal information, please contact us at info
            @Aeroura.com. </p>

            <p> When you visit our mobile application, and use our services, you trust us 
            with your personal information. We take your privacy very seriously. In this privacy 
            policy, we seek to explain to you in the clearest way possible what information 
            we collect, how we use it and what rights you have in relation to it. We hope you 
            take some time to read through it carefully, as it is important. If there are 
            any terms in this privacy policy that you do not agree
            with, please discontinue use of our Apps and our services.</p>

            <p>This privacy policy applies to all information collected through our 
            mobile application, (“Apps”), and/or any related services, sales, marketing 
            or events (we refer to them collectively in this privacy policy as the 
            “Services”). </p>

            <p>Please read this privacy policy carefully as it will help you make informed 
            decisions about sharing your personal information with us. </p>

            <p>Thank you for choosing to be
            part of our community at Aeroura (“Company”, “we”, “us", or “our”). 
            We are committed to protecting your personal information and your
            right to privacy. If you have any questions or concerns about our policy, or our
            practices with regards to your personal information, please contact us at info
            @Aeroura.com. </p>

            <p> When you visit our mobile application, and use our services, you trust us 
            with your personal information. We take your privacy very seriously. In this privacy 
            policy, we seek to explain to you in the clearest way possible what information 
            we collect, how we use it and what rights you have in relation to it. We hope you 
            take some time to read through it carefully, as it is important. If there are 
            any terms in this privacy policy that you do not agree
            with, please discontinue use of our Apps and our services.</p>

            <p>This privacy policy applies to all information collected through our 
            mobile application, (“Apps”), and/or any related services, sales, marketing 
            or events (we refer to them collectively in this privacy policy as the 
            “Services”). </p>

            <p>Please read this privacy policy carefully as it will help you make informed 
            decisions about sharing your personal information with us. </p>

       </div>

       <div className= "container">

            <h4>Terms and Conditions - Last updated November 30, 2020</h4>

            <p>Thank you for choosing to be
            part of our community at Aeroura (“Company”, “we”, “us", or “our”). 
            We are committed to protecting your personal information and your
            right to privacy. If you have any questions or concerns about our policy, or our
            practices with regards to your personal information, please contact us at info
            @Aeroura.com. </p>

            <p> When you visit our mobile application, and use our services, you trust us 
            with your personal information. We take your privacy very seriously. In this privacy 
            policy, we seek to explain to you in the clearest way possible what information 
            we collect, how we use it and what rights you have in relation to it. We hope you 
            take some time to read through it carefully, as it is important. If there are 
            any terms in this privacy policy that you do not agree
            with, please discontinue use of our Apps and our services.</p>

            <p>This privacy policy applies to all information collected through our 
            mobile application, (“Apps”), and/or any related services, sales, marketing 
            or events (we refer to them collectively in this privacy policy as the 
            “Services”). </p>

            <p>Please read this privacy policy carefully as it will help you make informed 
            decisions about sharing your personal information with us. </p>

            <p>Thank you for choosing to be
            part of our community at Aeroura (“Company”, “we”, “us", or “our”). 
            We are committed to protecting your personal information and your
            right to privacy. If you have any questions or concerns about our policy, or our
            practices with regards to your personal information, please contact us at info
            @Aeroura.com. </p>

            <p> When you visit our mobile application, and use our services, you trust us 
            with your personal information. We take your privacy very seriously. In this privacy 
            policy, we seek to explain to you in the clearest way possible what information 
            we collect, how we use it and what rights you have in relation to it. We hope you 
            take some time to read through it carefully, as it is important. If there are 
            any terms in this privacy policy that you do not agree
            with, please discontinue use of our Apps and our services.</p>

            <p>This privacy policy applies to all information collected through our 
            mobile application, (“Apps”), and/or any related services, sales, marketing 
            or events (we refer to them collectively in this privacy policy as the 
            “Services”). </p>

            <p>Please read this privacy policy carefully as it will help you make informed 
            decisions about sharing your personal information with us. </p>

       </div>
          {/* Scroll to top button */}
        <FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{height: 40, width: 100, display: showScroll ? 'flex' : 'none'}}/>
    </div>
    )
}
