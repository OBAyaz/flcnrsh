import React from 'react';
import {Radar} from 'react-chartjs-2';
import 'chartjs-plugin-annotation';
import './RadarChart.css'; 

class RadarChart extends React.Component {

    render(){
	
		const yourData= this.props.gameStatData.YourStatData;
		const advisedData = this.props.gameStatData.AdvicedStatData;

		const RadarData= {
				    labels: ['TEAMFIGHT PARTICIPATION', 'TEAMFIGHT EFFECTIVENESS', 'SPLIT PUSHING', 'LANE FARM', 'JUNGLE FARM'],
				    datasets: [
				    {label: "Your statistics", 
				     data: yourData,
				 	 borderColor: 'rgba(92,77,184,1)',
				 	 backgroundColor: 'rgba(92,77,184,0.3)',
				 	},

				    {label: "Advised statistics", 
				     data: advisedData,
				     borderColor: 'rgba(66,113,113,1)',
				 	 backgroundColor: 'rgba(66,113,113,0.3)',
				 	 }
				    ]
				}

		const RadarOptions = {
		    scale: {
		        display: true,
		        ticks: {
                    beginAtZero:true,
                    display: false
                }
		    },
		    maintainAspectRation: false,
		    layout: {
	            padding: {
	                left: 0,
	                right: 100,
	                top: 0,
	                bottom: 0
            	}
            },
		};

      return(
      	
             <Radar
	         data= {RadarData}
	         width={600}
	         height={300}
	         options={RadarOptions}
             />
       )
     }
}
export default RadarChart;