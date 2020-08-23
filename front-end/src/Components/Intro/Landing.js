import React from 'react'
import './Intro.css'

class Landing extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            message :''
        }
    }

    clicked (){
        return(
            <div>

            </div>
        )
    }
    render(){
        return(
        <div className="landing" >
            <div className='nav'>
            <img src={require('./tmdb.svg')}></img>
                <div className="menu">
                    <ul>
                        <li><a href='./Landing.js'>Home</a></li>
                        <li><a href='./Login.js'>Login</a></li>
                        {/*About Page Should but created !!!!*/}
                        <li><a href='./Landing.js'>About</a></li>
                    </ul>
                </div>
                <div className ="Header">
                    <h1>
                    NEW VIEW
                    </h1>    
                    <p>
                        Click below to Register!!
                    </p>
                    <button type="button" onClick={this.clicked}><a href="./Signup.js">Register</a></button>
                </div>
            </div>
        </div>)
    }
}

export default Landing