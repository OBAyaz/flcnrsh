import React, { Component } from 'react';
import heroIcon from './Kunkka_icon.png'
import './Result.css';

class Result extends Component {
  
  render() {
    return (
      <div className="Result">
        
        <div>
          <img src={heroIcon} className="Hero-icon" alt="hero icon" />
        
        	<div>Kunkka</div>
        </div>
        <div className="Result-container Result-score" id="home"> 35 </div> 
        <div className="Result-container"> All Draft <br /> 38:02 <br /> 1 day ago</div>
        <div className="Result-container Result-score" id="away"> 44 </div>
        <div className="Result-container"> MATCH ID 2141241 <br/> REGION EUROPE <br/> SKILL VERY HIGH </div>

      </div>
    );
  }
}

export default Result;
