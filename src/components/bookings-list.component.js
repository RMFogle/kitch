import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';
import axios from 'axios'; 

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
            <Link to={""}>trash</Link>
            </Button>
            
        </td>
    </tr>
)


export default class BookingsList extends Component {
    constructor(props) { 
        super(props); 

        this.state = {bookings: []}; 
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

    deleteBooking(id) {
        axios.delete('http://localhost:5000/bookings/'+id)
            .then(res => console.log(res.data)); 

        this.setState({
            bookings: this.state.bookings.filter(el => el._id !== id)
        })
    }

    bookingList() {
        return this.state.bookings.map(currentbooking => {
            return <Booking booking={currentbooking} key={currentbooking._id}/>; 
        })
    }

    render() { 
        return (
            <div>
                <h3>Current Bookings</h3>
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
                        { this.bookingList() }
                    </tbody>
                </table>
            </div>
        )
    }
}