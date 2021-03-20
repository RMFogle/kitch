import React, { Component } from 'react'; 

const chartStyle = {
    background: '#FFFFFF',
    border: 'none', 
    radius: '2px', 
    boxshadow: '0 2px 10px 0 rgba(70, 76, 79, .2)', 
    width: '640px', 
    height: '480px' 
}

export default class DataChart extends Component {

    render() {
        return (

            <div className="container">

                <p>
                My First MongoDB Chart!
                </p>
                <div className="row">
                    <div class="col">
                        <iframe title="chart1" style={chartStyle} src="https://charts.mongodb.com/charts-kitchapp-mtooo/embed/charts?id=44510947-db0d-4fb1-8854-11520c0e906c&theme=light"></iframe>
                    </div>
                    <div class="col">
                        <iframe title="chart2" style={chartStyle} src="https://charts.mongodb.com/charts-kitchapp-mtooo/embed/charts?id=70046e8a-76d4-44cb-8311-18c770ba2116&theme=light"></iframe>
                    </div>
                </div>
            </div>
        ); 
    }
}