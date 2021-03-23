import React, { Component } from 'react';
import '../styles/dataChart-style.css';

export default class DataChart extends Component {


    render() {

        return (

            <div className="container">
                <p>Data Charts: (hover cursor over fields to see more data) </p>
                    <div className="row">
                    <div className="col">
                        <iframe title="itemsStock" className="chartStyle2" src="https://charts.mongodb.com/charts-kitchapp-mtooo/embed/charts?id=22e59397-68fb-424a-8d7a-f94368bbb198&theme=dark"></iframe>
                    </div>
                    <div className="col">
                        <iframe title="itemsToPurchase" className="chartStyle2" src="https://charts.mongodb.com/charts-kitchapp-mtooo/embed/charts?id=7ca76c76-9f5e-4874-8de0-729733b3d212&theme=dark"></iframe>
                    </div>
                    <div className="col">
                        <iframe title="itemsMonth" className="chartStyle" src="https://charts.mongodb.com/charts-kitchapp-mtooo/embed/charts?id=70046e8a-76d4-44cb-8311-18c770ba2116&theme=dark"></iframe>
                    </div>
                    <div className="col">
                        <iframe title="totalInventory" className="chartStyle1" src="https://charts.mongodb.com/charts-kitchapp-mtooo/embed/charts?id=f2f38670-26f8-4398-be08-f09b53fef370&theme=dark"></iframe>
                    </div>
                    <div className="col">
                        <iframe title="bookingsMonth" className="chartStyle" src="https://charts.mongodb.com/charts-kitchapp-mtooo/embed/charts?id=44510947-db0d-4fb1-8854-11520c0e906c&theme=dark"></iframe>
                    </div>
                    <div className="col">
                        <iframe title="totalBookings" className="chartStyle1" src="https://charts.mongodb.com/charts-kitchapp-mtooo/embed/charts?id=d603a769-7d81-483f-94c7-a75eed28e5a8&theme=dark"></iframe>
                    </div>
                    <div className="col">
                    <iframe title="clientsMonth" className="chartStyle" src="https://charts.mongodb.com/charts-kitchapp-mtooo/embed/charts?id=7cb58324-6757-47d3-a782-a922889e6fce&theme=dark"></iframe>
                    </div>
                    <div className="col">
                    <iframe title="totalClients" className="chartStyle1" src="https://charts.mongodb.com/charts-kitchapp-mtooo/embed/charts?id=c9000fdb-590f-4d5a-9d8f-5a1219fa0f5b&theme=dark"></iframe>
                    </div>
                </div>
            </div>
        ); 
    }
}