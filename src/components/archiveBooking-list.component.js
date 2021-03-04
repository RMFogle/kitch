import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';
import axios from 'axios'; 

const ArchiveBooking = props => (
    <tr>
        <td>{props.booking.clientname}</td>
        <td>{props.booking.eventtype}</td>
        <td>{props.booking.location}</td>
        <td>{props.booking.date.substring(0,10)}</td>
        <td>
            <Button variant="outline-warning" size="sm">
            <Link to={"/restoreBooking/"+props.booking._id}>restore</Link>
            </Button> |
            <Button variant="outline-warning" size="sm">
            <Link to={"/addTooTrash/"+props.booking._id}>trash</Link>
            </Button>
        
    </td>
</tr>
)


export default class ArchiveBookingList extends Component {
    constructor(props) {
        super(props); 

        this.state = {bookings: []}

    }

    componentDidMount() {
        axios.get('http://localhost:5000/archiveBookings/')
        .then(response => {
            this.setState({ bookings: response.data})
        })
        .catch((error) => {
            console.log(error); 
        })
    }

    archiveBookingList() {
        return this.state.bookings.map(currentbooking => {
            return <ArchiveBooking booking={currentbooking} key={currentbooking._id}/>; 
        })
    }

    render() { 
        return (
            <div>
                <h3>Archived Bookings</h3>
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
                        { this.archiveBookingList() }
                    </tbody>
                </table>
            </div>
        )
    }
}