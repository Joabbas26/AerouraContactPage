import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";
import {FaTwitter, FaFacebookSquare, FaLinkedin, FaInstagram} from 'react-icons/fa';
import { useTranslation } from "react-i18next";

function Footer () {
  
     const { t } = useTranslation();
        return (
    <div className="main-footer">
        <div className="container-fluid">
          <div className="row">
          {/* Footer List Items Section */}
            <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
              <ul className="footerList">
                {/* Links to legal page */}
                <li style={{fontFamily: 'Karla'}}>Aeroura Travel</li>
                <Link to="/legal"><li style={{fontFamily: 'Karla'}}>{t('footer.privacypolicy')}</li></Link>
                <Link to="/legal"><li style={{fontFamily: 'Karla'}}>{t('footer.terms')}</li></Link>
              </ul>
               {/*&copy;{new Date().getFullYear()}*/}
            </div>
            {/* Footer Icons Section */}
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12" id="footerIcons">
              <div className="icons">
              {/* Individual Footer Icons */}
                  <a href="https://www.facebook.com/Aeroura"><FaFacebookSquare className="footer-icons"/></a>
                  <a href="https://twitter.com/Aeroura_Travel"><FaTwitter className="footer-icons"/></a>
                  <a href="https://www.instagram.com/aeroura_travel/"><FaInstagram className="footer-icons"/></a>
                  <a href="https://www.linkedin.com"><FaLinkedin className="footer-icons"/></a>
              </div>
            </div>
          </div>
        </div>
    </div>
        )
    }
export default Footer

/*


          
*/