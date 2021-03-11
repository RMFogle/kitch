import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';
import axios from 'axios'; 
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { Icon } from '@iconify/react';
import roundArrowDropDown from '@iconify-icons/ic/round-arrow-drop-down';

const Booking = props => (
    <tr>
        <td>{props.booking.clientname}</td>
        <td>{props.booking.eventtype}</td>
        <td>{props.booking.location}</td>
        <td>{props.booking.date.substring(0,10)}</td>
        <td>
            {/* Change buttons below to new layout and add actions needed */}
            <Button variant="outline-warning" size="sm">
            <Link to={"/edit/"+props.booking._id}>edit</Link>
            </Button> |
            <Button variant="outline-warning" size="sm">
            <Link to={"/addTo/"+props.booking._id}>archive</Link>
            </Button> |
            <Button variant="outline-warning" size="sm">
            <Link to={"/addToo/"+props.booking._id}>trash</Link>
            </Button>
            
        </td>
    </tr>
)


export default class BookingsList extends Component {
    constructor(props) { 
        super(props); 

        this.state = {bookings: []}; 

        this.compareBy.bind(this); 
        this.sortBy.bind(this); 
    }

    componentDidMount() {
        axios.get('http://localhost:5000/bookings/')
        .then(response => {
            this.setState({ bookings: response.data})
        })
        .catch((error) => {
            console.log(error); 
        })
    }

    compareBy(key) {
        return function (a, b) {
            if (a[key] < b[key]) return -1; 
            if (a[key] > b[key]) return 1; 
            return 0; 
        };
    }

    sortBy(key) {
        let arrayCopy = [...this.state.bookings]; 
        arrayCopy.sort(this.compareBy(key)); 
        this.setState({bookings: arrayCopy}); 
    }

    bookingList() {
        return this.state.bookings.map(currentbooking => {
            return <Booking booking={currentbooking} key={currentbooking._id}/>; 
        })
    }

    render() { 
        return (
            <div>
                <Accordion defaultActiveKey="1">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                           Booking List
                           <Icon icon={roundArrowDropDown} height="2em" />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th onClick={() => this.sortBy('clientname')}>Client</th>
                            <th onClick={() => this.sortBy('eventtype')}>Event</th>
                            <th onClick={() => this.sortBy('location')}>Location</th>
                            <th onClick={() => this.sortBy('date')}>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.bookingList() }
                    </tbody>
                </table>
                </Card.Body>
                </Accordion.Collapse>
                </Card>
                </Accordion>
            </div>
        )
    }
}