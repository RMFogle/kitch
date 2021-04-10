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
            clients: []
        };

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

    renderLastUpdated = () => {
        const updatedAtList = []; 
        for(let i = 0; i < this.state.clients.length; i++) {
            let lastUpdated = this.state.clients[i].updatedAt;
            let newArray = lastUpdated.substring(0, 10)
            updatedAtList.push(<Updated lastUpdated={newArray} />); 
        }
        return updatedAtList; 
    }

    render() {
        return (
            <div>
                { this.renderLastUpdated() }
            </div>
            )
    }
}