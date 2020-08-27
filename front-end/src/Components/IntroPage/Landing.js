import React from 'react'
import './Intro.css'
import {Link} from 'react-router-dom'

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
        <div className="Header">
            <div className="body">
                <h1>New View</h1>
                <p>Search for the Movies you want...</p>
                <button type="button"><Link to ="/signup">Register</Link></button>
            </div>
        </div>
            )
    }
}

export default Landing