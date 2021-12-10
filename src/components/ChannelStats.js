import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import './ChannelStats.css'

const ChannelStats = () => {
    const [channelData,setChannelData] = useState([])
    
    useEffect(async ()=>{
       await axios.get('http://localhost:5000/api/home/')
            .then( res =>{
                setChannelData(res.data.channel_data)
                console.log(res.data.channel_data);
        
               
            })
            .catch( err =>{
                console.log(err);
            })
    }, [])
    return (
        <div className="channel-stats-container">
            <h1 className="channel-stats-title">EKR FILIMS YOUTUBE</h1>
            <div className="stats-container">
                <div className="stats-card">
                    <div className="stats-value">{channelData.totalViews}</div>
                    <div className="stats-title">Views</div>
                    
                </div>
                <div className="stats-card">
                    <div className="stats-value">{channelData.subscriberCount}</div>
                    <div className="stats-title">Subscribers</div>
                    
                </div>
                <div className="stats-card">
                    <div className="stats-value">{channelData.totalLikes}</div>
                    <div className="stats-title">Likes</div>
                    
                </div>
                <div className="stats-card">
                    <div className="stats-value">{channelData.totalVideos}</div>
                    <div className="stats-title">Videos</div>
                    
                </div>
                
            </div>
            
        </div>
    )
}

export default ChannelStats