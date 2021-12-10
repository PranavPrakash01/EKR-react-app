import React from 'react'
import './Cards.css'
import { useEffect,useState } from 'react'
import axios from 'axios'
import like_ico from '../images/like.png'
import eye_ico from '../images/eye.png'


const Cards =()=> {
    const [cardData,setCardData] = useState([])
    
    useEffect(async ()=>{
       await axios.get('http://localhost:5000/api/home/')
            .then( res =>{
                setCardData(res.data.videos_data)
                console.log(res.data);
        
               
            })
            .catch( err =>{
                console.log(err);
            })
    }, [])

    return (
        <div className="cards-container" id="cards-container">
            <h1 className="title">Our Creations</h1>
            <div className="black-cards-container">
                <div className="card-view">

                    {cardData.sort((a, b) => b.views - a.views).slice(0, 5).map(e =>
                    <a className="video-link" href={e.videoURL} target="_blank">
                        <div className="card">
                            <img className="card-img" src={e.thumbnails}  alt="template"/>
                            <div className="card-title-container"><h1 className="card-title">{e.title}</h1></div>
                            <div className="card-description-container">
                                <p className="card-description">
                                    <img src={eye_ico} alt="ico" width="25px" height="25px"/>
                                    &nbsp; {e.views} Views
                                </p>
                                <p className="card-description">
                                    <img src={like_ico} alt="ico" width="25px" height="25px"/>
                                    &nbsp; {e.likes} Likes
                                </p>
                            </div>
                        </div>
                    </a>

                        )}
                        

                  

                    

                   
                    <a href="https://www.youtube.com/channel/UCtxs-UF_cW0zCP123nbHTAw"  target="_blank">
                    <div className="more-cards">
                        <p className="more-cards-txt">MORE</p>
                    </div>
                    </a>
    
                </div>
               
            </div>
        </div>
    )
}

export default Cards
