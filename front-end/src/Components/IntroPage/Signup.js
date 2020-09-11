import React from 'react'
import './Intro.css'
import {Link} from 'react-router-dom'
class Signup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName : '',
            lastName : '',
            email : '',
            password : '',
            conformPassword: '',
            mobileNumber : ''
        }
    }
    handleOnClick = () => {
        if(!navigator.onLine){
            alert("Network not available")
          }      
        //Cutomize your  onClick method 
    }
    render(){
        return(
            <div className="Signup">
                <h1>Create your Account</h1>
                <div className="inputBox">
                    <p>First name <span style={{color:"red"}}>*</span></p>
                    <input type="text" label="firstname" placeholder="First name"/>
                    <p>Last name <span style={{color:"red"}}>*</span></p>
                    <input type="text" label="lastname"  placeholder="Last name"/>
                    <p>Email <span style={{color:"red"}}>*</span></p>
                    <input type="text" label="Email"  placeholder="Email"/>
                    <p>Mobile Number <span style={{color:"red"}}>*</span></p>
                    <input type="text" label="mobilenumber"  placeholder="Mobile Number"/>
                    <p>Password <span style={{color:"red"}}>*</span></p>
                    <input type="text" label="password" placeholder="Password"/>
                    <p>Conform your Password <span style={{color:"red"}}>*</span></p>
                    <input type="text" label="cpassword" placeholder="Conform your Password"/>
                </div>
                <div className="buttons">
                    <button type="button" onClick={this.handleOnClick}>SUBMIT</button>
                </div>
                <p style={{fontSize:'12px',marginLeft:'30px'}}> If you have an account ,<Link to="/login">click here</Link></p>
            </div>
        )
    }
}

export default Signup
