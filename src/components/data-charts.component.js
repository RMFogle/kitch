import React, { Component } from 'react';


const chartStyle = {
    background: '#FFFFFF',
    border: '1px solid grey', 
    radius: '2px', 
    boxshadow: '0 2px 10px 0 rgba(70, 76, 79, .2)', 
    width: '620px', 
    height: '380px' 
}


const chartStyle1 = {
    background: '#FFFFFF',
    border: '1px solid grey', 
    radius: '2px', 
    boxshadow: '0 2px 10px 0 rgba(70, 76, 79, .2)', 
    width: '420px', 
    height: '380px' 
}

const chartStyle2 = {
    background: '#FFFFFF',
    border: '1px solid grey', 
    radius: '2px', 
    boxshadow: '0 2px 10px 0 rgba(70, 76, 79, .2)', 
    width: '520px', 
    height: '380px' 
}

export default class DataChart extends Component {


    render() {

        return (

            <div className="container">
                <p>Data Charts: (hover cursor over fields to see more data) </p>
                    <div className="row">
                    <div className="col">
                        <iframe title="bookingsMonth" style={chartStyle} src="https://charts.mongodb.com/charts-kitchapp-mtooo/embed/charts?id=44510947-db0d-4fb1-8854-11520c0e906c&theme=light"></iframe>
                    </div>
                    <div className="col">
                        <iframe title="totalBookings" style={chartStyle1} src="https://charts.mongodb.com/charts-kitchapp-mtooo/embed/charts?id=d603a769-7d81-483f-94c7-a75eed28e5a8&theme=light"></iframe>
                    </div>
                    <div className="col">
                        <iframe title="itemsStock" style={chartStyle2} src="https://charts.mongodb.com/charts-kitchapp-mtooo/embed/charts?id=22e59397-68fb-424a-8d7a-f94368bbb198&theme=light"></iframe>
                    </div>
                    <div className="col">
                        <iframe title="itemsToPurchase" style={chartStyle2} src="https://charts.mongodb.com/charts-kitchapp-mtooo/embed/charts?id=7ca76c76-9f5e-4874-8de0-729733b3d212&theme=light"></iframe>
                    </div>
                    <div className="col">
                         <iframe title="itemsMonth" style={chartStyle} src="https://charts.mongodb.com/charts-kitchapp-mtooo/embed/charts?id=70046e8a-76d4-44cb-8311-18c770ba2116&theme=light"></iframe>
                    </div>
                    <div className="col">
                        <iframe title="totalInventory" style={chartStyle1} src="https://charts.mongodb.com/charts-kitchapp-mtooo/embed/charts?id=f2f38670-26f8-4398-be08-f09b53fef370&theme=light"></iframe>
                    </div>
                </div>
            </div>
        ); 
    }
}