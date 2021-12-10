import React from 'react'
import homeVideoDemo from '../images/home-vid-demo.gif'
import './HomeVideo.css'
const HomeVideo = () => {
    return (
        <div className="home-vid-container">
            <img className="home-vid" src={homeVideoDemo} alt="img"/>
            <div className="home-vid-text">
                <h1 id="txt1">Discover</h1>
                <hi id="txt2">Greatness</hi>
                
            </div>
            
            
        </div>
    )
}

export default HomeVideo
