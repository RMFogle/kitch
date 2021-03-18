import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { Icon } from '@iconify/react';
import arrowDropDownLine from '@iconify-icons/ri/arrow-drop-down-line';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import '../styles/style.css';
import '../styles/table-style.css';


const Booking = props => (
    <tr>
        <td className="bookinglist">{props.booking.clientname}</td>
        <td className="bookinglist">{props.booking.eventtype}</td>
        <td className="bookinglist">{props.booking.location}</td>
        <td className="bookinglist">{props.booking.date.substring(0,10)}</td>
        <td className="bookinglist">{props.booking.starttime}</td>
        <td className="bookinglist">{props.booking.endtime}</td>
        <td className="bookinglist">
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

        this.compareByDescend.bind(this); 
        this.compareByAscend.bind(this); 
        this.sortByUp.bind(this); 
        this.sortByDown.bind(this);
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

    compareByDescend(key) {
        return function (a, b) {
            if (a[key] < b[key]) return -1; 
            if (a[key] > b[key]) return 1; 
            return 0; 
        }; 
    }

    compareByAscend(key) {
        return function (a, b) {
            if (a[key] < b[key]) return 1; 
            if (a[key] > b[key]) return -1; 
            return 0; 
        }; 
    }

    // A-Z and 1-100 
    sortByUp(key) {
        let arrayCopy = [...this.state.bookings]; 
        arrayCopy.sort(this.compareByDescend(key)); 
        this.setState({bookings: arrayCopy});
    }

    // Z-A and 100-1 
    sortByDown(key) {
        let arrayCopy = [...this.state.bookings]; 
        arrayCopy.sort(this.compareByAscend(key)); 
        this.setState({bookings: arrayCopy});
    }

    bookingList() {
        return this.state.bookings.map(currentbooking => {
            return <Booking booking={currentbooking} key={currentbooking._id}/>; 
        })
    }


    render() { 
        return (
            <div className="table-responsive">
                <Accordion defaultActiveKey="1">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                           Booking List
                           <Icon icon={arrowDropDownLine} height="2em" />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>
                <table className="table table-sm table-hover table-bordered">
                    <thead className="thead-light">
                        <tr>
                            <th>
                            Client
                                <ButtonGroup vertical>
                                <i className="fas fa-sort-up" role="button" onClick={() => this.sortByUp('clientname')}>
                                </i>
                                <i className="fas fa-sort-down" role="button" onClick={() => this.sortByDown('clientname')}>
                                </i>
                                </ButtonGroup>
                            </th>
                            <th>
                            Event
                                <ButtonGroup vertical>
                                <i className="fas fa-sort-up" role="button" onClick={() => this.sortByUp('eventtype')}>
                                </i>
                                <i className="fas fa-sort-down" role="button" onClick={() => this.sortByDown('eventtype')}>
                                </i>
                                </ButtonGroup>
                            </th>
                            <th>
                            Location
                                <ButtonGroup vertical>
                                <i className="fas fa-sort-up" role="button" onClick={() => this.sortByUp('location')}>
                                </i>
                                <i className="fas fa-sort-down" role="button" onClick={() => this.sortByDown('location')}>
                                </i>
                                </ButtonGroup>
                            </th>
                            <th>
                            Date
                                <ButtonGroup vertical>
                                <i className="fas fa-sort-up" role="button" onClick={() => this.sortByUp('date')}>
                                </i>
                                <i className="fas fa-sort-down" role="button" onClick={() => this.sortByDown('date')}>
                                </i>
                                </ButtonGroup>
                            </th>
                            <th>
                            Start Time
                                <ButtonGroup vertical>
                                <i className="fas fa-sort-up" role="button" onClick={() => this.sortByUp('starttime')}>
                                </i>
                                <i className="fas fa-sort-down" role="button" onClick={() => this.sortByDown('starttime')}>
                                </i>
                                </ButtonGroup>
                            </th>
                            <th>
                            End Time
                                <ButtonGroup vertical>
                                <i className="fas fa-sort-up" role="button" onClick={() => this.sortByUp('endtime')}>
                                </i>
                                <i className="fas fa-sort-down" role="button" onClick={() => this.sortByDown('endtime')}>
                                </i>
                                </ButtonGroup>
                            </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.bookingList() }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Client</th>
                            <th>Event</th>
                            <th>Location</th>
                            <th>Date</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                            <th>Actions</th>
                        </tr>
                    </tfoot>
                </table>
                </Card.Body>
                </Accordion.Collapse>
                </Card>
                </Accordion>
            </div>
        )
    }
}