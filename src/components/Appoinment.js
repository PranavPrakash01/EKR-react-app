import React from 'react'
import './Appoinment.css'
import Form from './common/form'
const Appoinment = () => {
    return (
        <div className="appoinment-container">
          
            <div className="black-appoinments-container">
                <div className="appoinment-ribbon">
                 <h1 className="ribbon-title">MAKE YOUR APPOINMENTS HERE</h1>
                </div>
                <div className="appoinment-form-container">
                    <Form/>
                </div>  
              
            </div>
          
        </div>
    )
}

export default Appoinment
