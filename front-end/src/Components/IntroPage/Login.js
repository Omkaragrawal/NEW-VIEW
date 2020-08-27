import React from 'react'
import './Intro.css'
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username : null,
            password : null
        }
    }

    handleInput = event => {
        this.setState({username : event.target.value })
    }

    handleInputPassword = event => {
        this.setState({password : event.target.value })
    }

    handleOnClick = () => {
        //OnClick handler for  the submit button

    }

    render() {
        return(
            <div className="login">
                {/* {console.log(this.state.username)}
                {console.log(this.state.password)} */}
                <p style={{margin : '30px'}}>Login to your Account</p>
                    <div className="inputBox-login">
                        <p>Username or E-mail</p>
                        <input type="text" onChange={this.handleInput}/>
                        <p>Password</p>
                        <input type="password" onChange={this.handleInputPassword}/>
                </div>
                <div className="buttons">

        <button type="button" onClick={this.handleOnClick}>LOGIN</button>
                    <p style={{margin: "10px 70px"}}>----------------------(or)--------------------</p>
                    <button class="loginBtn loginBtn--facebook">Facebook</button>
                    <button class="loginBtn loginBtn--google">Google</button>
                    <button class="loginBtn loginBtn--twitter">Twitter</button>
                    <button class="loginBtn loginBtn--github">Github</button>
                    <p style={{fontSize:"13px",marginLeft:"30px",fontWeight:'lighter'}}>Register to get an Account... <Link to="/signup">Click here</Link></p>
                        
                </div>
            </div>
        )
    }
}

export default Login