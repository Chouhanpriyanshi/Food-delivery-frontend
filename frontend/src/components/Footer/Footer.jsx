import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'> 
      <div className="footer-content">
        
        <div className="footer-content-left">
            <img src={assets.logo} alt="" className="" />
            <p> Fresh Flavors, Transparent Policies, Trusted Always.</p>
            <div className="footer-social-icon"></div>
            <img src={assets.facebook_icon} alt="" className="" />
            <img src={assets.twitter_icon} alt="" className="" />
            <img src={assets.linkedin_icon} alt="" className="" />
        </div>
              <div className="footer-content-center">
                  <h2 >COMPANY</h2>
                  <ul >
                      <li >Home</li>
                      <li >About us</li>
                      <li >Delivery</li>
                      <li >Privacy Policy</li>
                  </ul>
              </div>

        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul >
                <li >+91-89899-98989</li>
                <li >contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright"> Copyright 2025 tomato.com - All Rights Reserved</p>
    </div>
  )
}

export default Footer
