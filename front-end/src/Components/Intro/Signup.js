import React from 'react'
import './Intro.css'
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
    render(){
        return(
            <div className="Signup">
                <h1>Create your Account</h1>
                <div className="inputBox">
                    <p>First name</p>
                    <input type="text" label = "first name"/>
                    <p>Last name</p>
                    <input type="text" label = "last name"/>
                    <p>Email</p>
                    <input type="text" label = "Email"/>
                    <p>Mobile Number</p>
                    <input type="text" label = "Mobile Number"/>
                    <p>Password</p>
                    <input type="text" label = "Password"/>
                    <p>Conform your Password</p>
                    <input type="text" label = "Conform Password"/>
                </div>
                <div className="buttons">
                    <button type="button" label = "Submit_Button">SUBMIT</button>
                </div>  
            </div>
        )
    }
}

export default Signup
