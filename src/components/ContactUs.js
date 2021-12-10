import React from 'react'
import './ContactUs.css'
import youtube_logo from '../images/youtube_logo.png'
import insta_logo from '../images/insta_logo.png'
import whatsapp_logo from '../images/whatsapp_logo.png'

function ContactUs() {
    return (
        <div className="contacts-container" id="contacts">
           <h1 className="contacts-title">Contact Us</h1>
           <div className="constacts-card-container">

                <div className="constacts-card">
                <img className="constacts-icon-yt"  src={youtube_logo} alt="img" alt="template"/>
                <p className="contacts-info">EKR FILIMS</p>
                </div>

                <div className="constacts-card">
                <img className="constacts-icon-ig"  src={insta_logo} alt="img" alt="template"/>
                <p className="contacts-info">@ekr_filims</p>
                </div>

                <div className="constacts-card">
                <img className="constacts-icon-wa"  src={whatsapp_logo } alt="img" alt="template"/>
                <p className="contacts-info">7558822577</p>
                </div>
           </div>
         
        </div>
    )
}

export default ContactUs
