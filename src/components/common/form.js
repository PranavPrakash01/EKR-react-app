import React,{Component} from 'react';
import './form.css'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios';

class Form extends Component{
   
    constructor(props) {
        super(props)
    
        this.state = {
            username:'',
            phone:'',
            description:'',
            startDate: '',
            message:''      
             
        }
    }

    handleUsernameChange=(event)=>{
        this.setState({
            username: event.target.value
        })

    }
    handlePhoneChange=(event)=>{
        this.setState({
            phone: event.target.value
        })
    }
    handleDescriptionChange=(event)=>{
        this.setState({
            description: event.target.value
        })
    }
    
   
    handleSubmit=(event)=>{
      
       

        let payload={ 

            name:this.state.username,
            phone:this.state.phone,
            description:this.state.description,
            appoinmentDate:`${this.state.startDate}`,
           
            
            
            
        }
        
        axios.post(`/api/appoinments`,payload)
         .then(res => {
          console.log(res.data);
          alert(`Appoinment booked on ${res.data}`)
          this.setState({
            username: '',
            phone:'',
            description:'',
            startDate: ''
          }) 
        }).catch((err)=> {})
        
        
        event.preventDefault()
    }
    
    render(){
        return (
            <>
           <form class="form" onSubmit={this.handleSubmit}>
               
               <div>
                   
                   <input 
                   type="text" 
                   placeholder="Full Name"
                   value={this.state.username} 
                   onChange={this.handleUsernameChange}/>
               </div>
               <div>
                  
                   <input 
                   type="text" 
                    placeholder="Contact Number"
                   value={this.state.phone} 
                   onChange={this.handlePhoneChange} />
               </div>
               <div>
                  
                  <input 
                  type="text" 
                   placeholder="Work Description"
                  value={this.state.description} 
                  onChange={this.handleDescriptionChange} />
              </div>
               <div id="form-date">
                 <DatePicker 
                    selected={ this.state.startDate }
                    onChange={(date)=>{this.setState({startDate: date})} }
                    placeholderText="Appoinment Date" 
                    dateFormat={'dd/MM/yyyy'}
                    minDate={new Date()}
                    
                    />
               </div>

               <button type="submit">Make Appoinment</button>

           </form>
           <div className="form-message">
            <h1 className="form-message-msg" >We will contact you on the Appoinment Date. </h1>
            <h1 className="form-message-msg" >Please enter a detailed work description  </h1>
            <h1 className="form-response-message">{this.state.message}</h1>
           </div>
          
           </>
        )
    }
}

export default Form;