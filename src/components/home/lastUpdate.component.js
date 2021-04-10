import React, { Component } from 'react'; 
import { PropTypes } from 'prop-types';


export default class LastUpdate extends Component {
    constructor(props) {
        super(props);


        this.state = {
            date: PropTypes.instanceOf(Date).isRequired, 
            updateInterval: PropTypes.number 
        }

        this.humanizeDateTime.bind(this); 

    }


    humanizeDateTime({ date, currentDate = new Date() }) {
        const datetimeDiff = currentDate - date; 
        if ( datetimeDiff < 60000 ) {
            return 'just a moment ago'; 
        } else if ( datetimeDiff < 3600000 ) {
            return {datetimeDiff}+'minutes ago';
        }
    }

    componentDidMount() {
        this.intervalUpdate = setInterval(() => {
        this.forceUpdate();
        }, this.props.updateInterval);
    }
        
    componentWillUnmount() {
        if (this.intervalUpdate) {
        clearInterval(this.intervalUpdate);
        this.intervalUpdate = null;
        }
    }


    render() {
        return (
            <div>
            <small className="text-muted">Last updated<span>{this.humanizeDateTime}</span></small>
            </div>
        )
    }
}