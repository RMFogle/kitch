import React, { Component } from 'react'; 
import axios from 'axios'; 


    const Updated = ({ lastUpdated }) => (
        <div>
            <small className="text-muted">Last updated <span>{lastUpdated}</span></small>
        </div>
    )

export default class Name extends Component {
    constructor(props) {
        super(props); 

        this.state = {
            event: new Date('01 Janurary 1900 01:01 UTC'), 
            currentDateTime: Date(),  
            clients: []
        };

        // this.compareDates = this.compareDates.bind(this); 
        this.compareDate.bind(this); 
        this.showLastUpdated.bind(this);
        // this.clientList.bind(this); 
        this.renderLastUpdated = this.renderLastUpdated.bind(this); 

    }

    componentDidMount() {
        axios.get('http://localhost:5000/clients/')
        .then(response => {
            this.setState({ 
                clients: response.data
            })
        })
        .catch((error) => {
            console.log(error); 
        })
    }

    // compareDates = () => {
    //     const updatedDateTime = []; 
    //     for(let i = 0; i < this.state.clients.length; i++) {
    //         let lastUpdated = this.state.clients[i].updatedAt;
    //         let newArray = lastUpdated; 
    //         if (newArray > this.state.event) {
    //             updatedDateTime = newArray;  
    //         } 
    //     }
    //     return updatedDateTime.push(<Updated lastUpdated={newArray} />); 
    // }

    compareDate = () => {
        const d3 = new Date('2021-05-03T05:21:09.602Z'); 
        const d4 = new Date()
        let diff = d4 - d3; 
        if (diff > 60e3) 
        return Math.floor(diff / 60e3); 
        else return Math.floor(diff / 1e3); 
    }

    showLastUpdated = () => {
        // const newArray = []; 
        for(let i = 0; i < this.state.clients.length; i++) {
            let lastUpdated = this.state.clients[i].updatedAt;
            // let newArray = lastUpdated; 
            return lastUpdated; 
        }
    }

    renderLastUpdated = () => {
        const updatedAtList = [];
        for(let i = 0; i < this.state.clients.length; i++) {
            let lastUpdated = this.state.clients[i].updatedAt;
            let newArray = lastUpdated;
            updatedAtList.push(<Updated lastUpdated={newArray} />); 
        }
        return updatedAtList; 
    }

    render() {

        const d1 = this.state.event.toISOString(); 
        const d2 = this.renderLastUpdated();

        return (
            <div>
                {/* { this.renderLastUpdated()} */}
                <div>
                { this.state.currentDateTime }
                </div>
                <div>
                    { d1 }
                </div>
                <div>
                    { d2 }
                </div>
                <div>
                <small className="text-muted">Last updated { this.compareDate() } mins ago</small></div>
                <div>
                    <span>{ this.showLastUpdated() }</span>
                </div>
            </div>
            )
    }
}