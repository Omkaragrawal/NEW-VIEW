import React from 'react'
import './Intro.css'
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username : '',
            password : ''
        }
    }

    handleInput = event => {
        this.setState({username : event.target.value })
    }

    handleInputPassword = event => {
        this.setState({password : event.target.value })
    }

    render() {
        return(
            <div className="login">
                {console.log(this.state.username)}
                {console.log(this.state.password)}
                <p style={{margin : '30px'}}>Login to your Account</p>
                    <div className="inputBox-login">
                        <p>Username or E-mail</p>
                        <input type="text" onChange={this.handleInput}/>
                        <p>Password</p>
                        <input type="password" onChange={this.handleInputPassword}/>
                </div>
                <div className="buttons">
                    <button type="button">SUBMIT</button>
                    <hr style={{marginLeft:"20px",marginRight:'20px',marginTop:'40px'}}/>
                </div>
            </div>
        )
    }
}

export default Login