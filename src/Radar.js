import React, { Component } from 'react';
import './Radar.css';
import RadarChart from'./RadarChart.js';

class Radar extends Component {

  listItems = this.props.summary.map((summary) =>
    <li>{summary}</li>
  );

  render() {
    return (
      <div className="Radar">

      	<button
      		className="Radar-dataButton"
      		id="Radar-backButton" 
      		data-action="back" 
      		data-game={this.props.game}
      		onClick={(e) => this.props.onClick(e)}
      	> 
      		&lt; 
      	</button>
      	<button
      		className="Radar-dataButton"
      		id="Radar-nextButton" 
      		data-action="next" 
      		data-game={this.props.game}
      		onClick={(e) => this.props.onClick(e)}
      	> 
      		&gt;
      	</button>

      	<div className="Radar-flexbox">
	      	<div>
	        	<RadarChart gameStatData={this.props.gameStatData}/>
	        </div>

	        <div className="Radar-summary">
	          <ul>{this.listItems}</ul>
	        </div>
       	</div>
      </div>
    );
  }
}

export default Radar;
