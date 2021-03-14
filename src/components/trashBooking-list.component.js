import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';
import axios from 'axios'; 
import { OverlayTrigger } from 'react-bootstrap';
import Tooltip from 'react-bootstrap/Tooltip';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { Icon } from '@iconify/react';
import arrowDropDownLine from '@iconify-icons/ri/arrow-drop-down-line';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import '../styles/style.css'; 


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
                    }>
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

        this.compareByDescend.bind(this); 
        this.compareByAscend.bind(this); 
        this.sortByUp.bind(this); 
        this.sortByDown.bind(this);
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
                          <Icon icon={arrowDropDownLine} height="2em" />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>
                <table className="table" class="table table-sm table-hover table-bordered">
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