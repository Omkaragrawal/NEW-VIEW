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
        //Cutomize your  onClick method 
    }
    render(){
        return(
            <div className="Signup">
                <h1>Create your Account</h1>
                <div className="inputBox">
                    <p>First name</p>
                    <input type="text"/>
                    <p>Last name</p>
                    <input type="text"/>
                    <p>Email</p>
                    <input type="text"/>
                    <p>Mobile Number</p>
                    <input type="text"/>
                    <p>Password</p>
                    <input type="text"/>
                    <p>Conform your Password</p>
                    <input type="text"/>
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