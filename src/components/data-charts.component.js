import React, { Component } from 'react';
import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom'; 

const sdk = new ChartsEmbedSDK({
    baseUrl: 'https://charts.mongodb.com/charts-kitchapp-mtooo',
});

const chart1 = sdk.createChart({
    chartId: '44510947-db0d-4fb1-8854-11520c0e906c',
});

const chart2 = sdk.createChart({
    chartId: '70046e8a-76d4-44cb-8311-18c770ba2116',
});


const chartStyle = {
    background: '#FFFFFF',
    border: 'none', 
    radius: '2px', 
    boxshadow: '0 2px 10px 0 rgba(70, 76, 79, .2)', 
    width: '480px', 
    height: '360px' 
}

export default class DataChart extends Component {

    renderChart1() {
        chart1.render(document.getElementById('chart1'))
        .catch(() => window.alert('Chart failed to initialise'));
    }

    renderChart2() {
        chart2.render(document.getElementById('chart2'))
        .catch(() => window.alert('Chart failed to initialise'));
    }

    render() {
        return (

            <div className="container">

                <p>
                My First MongoDB Chart!
                </p>
                <div id="chart1" ref={this.renderChart1} style={chartStyle}>
                </div>
                <div id="chart2" ref={this.renderChart2} style={chartStyle}>
                </div>
                {/* <div className="row">
                    <div class="col">
                        <iframe title="chart1" style={chartStyle} src="https://charts.mongodb.com/charts-kitchapp-mtooo/embed/charts?id=44510947-db0d-4fb1-8854-11520c0e906c&theme=light"></iframe>
                    </div>
                    <div class="col">
                        <iframe title="chart2" style={chartStyle} src="https://charts.mongodb.com/charts-kitchapp-mtooo/embed/charts?id=70046e8a-76d4-44cb-8311-18c770ba2116&theme=light"></iframe>
                    </div>
                </div> */}
            </div>
        ); 
    }
}