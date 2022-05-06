import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import './Footer.css';
import { images } from '../../constants';

const currYear = () => {
  let date = new Date().getFullYear();
  return date;
}

const Footer = () => (

  <div className="app__footer section__padding">

    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">

      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact us</h1>
        <p className="p__opensans">314 Miller Street, Glasgow G1 5DT Scotland</p>
        <br />
        <p className="p__opensans">+77 123 45678</p>
        <p className="p__opensans">+77 234 56789</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="logo" />
        <p className="p__opensans">"The best way to find yourself, is to lose yourself in the servcie of others."</p>
        <img src={images.spoon} alt="spoon" className="spoon__img" style={{marginTop: 15}} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
      <h1 className="app__footer-headtext">Opening Hours</h1>
        <p className="p__opensans">Monday - Friday:</p>
        <p className="p__opensans">1:00pm - 1:00am</p>
        <br />
        <p className="p__opensans">Saturday &amp; Sunday:</p>
        <p className="p__opensans">10:00am - 3:00am</p>
      </div>

    </div>

    <div className="app__footer-copyright">
      <p className="p__opensans">{currYear()} Gericht. All rights reserved.</p>
    </div>
  </div>

)

export default Footer;
