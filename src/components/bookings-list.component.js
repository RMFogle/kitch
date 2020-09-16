import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 
import axios from 'axios'; 


export default class BookingsList extends Component {
    constructor(props) { 
        super(props); 

 this.deleteBooking = this.deleteBooking.bind(this); 

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
        axios.delete('http://localhost:5000/bookings/' + id)
            .then(res => console.log(res.data)); 
            
        this.setState({
            bookings: this.state.bookings.filter(el => el.id !== id)
        })
    }

    render() { 
        return (
            <div>
                <p>You are on the Bookings List Component!</p>
            </div>
        )
    }
}