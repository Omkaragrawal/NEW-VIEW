import React from 'react';
import './App.css';
import Landing from './Pages/Landing';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      message : ''
    }
  }
  render(){
    return (
      <div className="App">
        <Landing />
      </div>
    );
  }
}
export default App;