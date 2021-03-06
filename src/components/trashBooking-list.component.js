import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';
import axios from 'axios'; 
import { OverlayTrigger } from 'react-bootstrap';
import Tooltip from 'react-bootstrap/Tooltip';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { Icon } from '@iconify/react';
import roundArrowDropDown from '@iconify-icons/ic/round-arrow-drop-down';

const TrashBooking = props => (
    <tr>
        <td>{props.booking.clientname}</td>
        <td>{props.booking.eventtype}</td>
        <td>{props.booking.location}</td>
        <td>{props.booking.date.substring(0,10)}</td>
        <td>
            <Button variant="outline-warning" size="sm">
            <Link to={"/restoresBooking/"+props.booking._id}>restore</Link>
            </Button> |
            <OverlayTrigger
            placement="top"
            overlay={
                <Tooltip id={`tooltip`}>
                    Warning!!! Will Permanently Delete Item!
                </Tooltip>
            }
            >
            <Button variant="outline-danger" style={{ color: 'blue' }} size="sm" 
                        onClick= {() => { props.deleteBooking(props.booking._id) }}>
            delete</Button>
            </OverlayTrigger>
    </td>
</tr>
)


export default class TrashBookingList extends Component {
    constructor(props) {
        super(props); 

        this.deleteBooking = this.deleteBooking.bind(this); 

        this.state = {bookings: []}

    }

    componentDidMount() {
        axios.get('http://localhost:5000/trashBookings/')
        .then(response => {
            this.setState({ bookings: response.data})
        })
        .catch((error) => {
            console.log(error); 
        })
    }

    deleteBooking(id) {
        axios.delete('http://localhost:5000/trashBookings/'+id)
            .then(res => console.log(res.data)); 

        this.setState({
            bookings: this.state.bookings.filter(el => el._id !== id)
        })
    }

    trashBookingList() {
        return this.state.bookings.map(currentbooking => {
            return <TrashBooking booking={currentbooking} deleteBooking={this.deleteBooking} key={currentbooking._id}/>; 
        })
    }

    render() { 
        return (
            <div>
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                          Trash Booking List
                          <Icon icon={roundArrowDropDown} height="2em" />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Client</th>
                            <th>Event</th>
                            <th>Location</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.trashBookingList() }
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