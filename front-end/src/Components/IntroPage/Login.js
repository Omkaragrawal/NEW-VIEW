import React from 'react'
import './Intro.css'
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username : "",
            password : ""
        }
    }

    handleInput = event => {
        this.setState({username : event.target.value })
    }

    handleInputPassword = event => {
        this.setState({password : event.target.value })
    }

    handleOnClick = () => {
        if(!navigator.onLine){
            alert("Network not available")
        }
    }

    //onClick for facebook
    facebookOnclick = () => {
        if(!navigator.onLine){
            alert("Network not available")
        }
    }

    //onClick for google
    googleOnclick = () => {
        if(!navigator.onLine){
            alert("Network not available")
        }
    }

    //onClick for twitter
    twitterOnclick = () => {
        if(!navigator.onLine){
            alert("Network not available")
        }
    }

    //onClick for Github
    githubOnclick = () => {
        if(!navigator.onLine){
            alert("Network not available")
        }
    }

    render() {
        return(
        <div className="login">
            <p style={{margin : '30px'}}>Login to your Account</p>
            <div className="inputBox-login">
                <p style={{fontWeight:"500",fontSize:"12px"}}>Username or E-mail <span style={{color:"red"}}>*</span></p>
                <input type="text" onChange={this.handleInput} 
                label="username"
                className="user"
                placeholder = "Enter email or username"
                style={{fontWeight:"500",textIndent:"0.1in"}}/>
                    <p 
                    style={{fontWeight:"500",
                    fontSize:"12px"}}>Password <span style={{color:"red"}}>*</span></p>

                    <input type="password" 
                    onChange={this.handleInputPassword} 
                    label="password"
                    className="pass" 
                    placeholder = "Enter email or username"
                    style={{fontWeight:"500",textIndent:"0.1in"}}/>
                </div>
                
                <div className="buttons">
                    <button type="button" onClick={this.handleOnClick}>LOGIN</button>
                    <p style={{margin: "10px 70px"}}>----------------------(or)--------------------</p>
                    
                    <button class="loginBtn loginBtn--facebook" onClick={this.facebookOnclick.bind(this)}>Facebook</button>
                    
                    <button class="loginBtn loginBtn--google" onClick={this.googleOnclick.bind(this)}>Google</button>
                    
                    <button class="loginBtn loginBtn--twitter" onClick={this.twitterOnclick.bind(this)}>Twitter</button>
                    
                    <button class="loginBtn loginBtn--github" onClick={this.githubOnclick.bind(this)}>Github</button>
                    
                    <p style={{fontSize:"13px",marginLeft:"30px",fontWeight:'lighter'}}>Register to get an Account... <Link to="/signup">Click here</Link></p>
                        
                </div>
            </div>
        )
    }
}

export default Login
