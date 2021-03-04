import React, { Component } from 'react'; 
import axios from 'axios'; 
import DatePicker from 'react-datepicker'; 
import "react-datepicker/dist/react-datepicker.css";
import Button from 'react-bootstrap/Button'; 


export default class TrashRestoreBooking extends Component {
    constructor(props) {
        super(props);

        this.onChangeClientname = this.onChangeClientname.bind(this); 
        this.onChangeEventtype = this.onChangeEventtype.bind(this); 
        this.onChangeLocation = this.onChangeLocation.bind(this); 
        this.onChangeDate = this.onChangeDate.bind(this); 
        this.onSubmit = this.onSubmit.bind(this); 
        
        this.state = {
            clientname: '', 
            eventtype: '', 
            location: '', 
            date: new Date(), 
            clients: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/trashBookings/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    clientname: response.data.clientname, 
                    eventtype: response.data.eventtype, 
                    location: response.data.location, 
                    date: new Date(response.data.date)
                })
            })
            .catch(function (error) {
                console.log(error); 
            })

        axios.get('http://localhost:5000/trashBookings/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        clients: response.data.map(client => client.clientname), 

                    })
                }

            })
    }

    onChangeClientname(e) {
        this.setState({
            clientname: e.target.value 
        }); 
    }

    onChangeEventtype(e) {
        this.setState({
            eventtype: e.target.value 
        }); 
    }

    onChangeLocation(e) {
        this.setState({
            location: e.target.value 
        }); 
    }

    onChangeDate(date) {
        this.setState({
            date: date 
        }); 
    }

    restoreToBooking() {
        const booking = {
            clientname: this.state.clientname, 
            eventtype: this.state.eventtype, 
            location: this.state.location, 
            date: this.state.date 
        }

        console.log(booking); 

        axios.post('http://localhost:5000/bookings/add', booking)
            .then(res => console.log(res.data)); 
    }

    deleteTrashBooking() {
        axios.delete('http://localhost:5000/trashBookings/'+this.props.match.params.id)
        .then(res => console.log(res.data));
    }

    onSubmit(e) {
       alert("Added Back To Booking!!!")
        e.preventDefault();

        console.log(this);

        axios.all([this.restoreToBooking(), this.deleteTrashBooking()])
        .then(res => console.log(res.data)); 


        window.location = '/trash';  
    }

    render() { 
        return (
            <div>
                <h3>Restore Booking</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Client Name: </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.clientname}
                        onChange={this.onChangeClientname}
                        readOnly/>
                    </div>
                    <div className="form-group">
                        <label>Event: </label>
                        <input type="text" 
                        required 
                        className="form-control"
                        value={this.state.eventtype}
                        onChange={this.onChangeEventtype}
                        readOnly/>
                    </div>
                    <div className="form-group">
                        <label>Location: </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.location}
                        onChange={this.onChangeLocation}
                        readOnly/>
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker 
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                                readOnly/>
                        </div>
                    </div>

                    <div className="form-group">
                        <Button type="submit" value="Restore Booking">
                        Restore Booking</Button>
                        {" "}
                        <Button href="/trash/">Cancel</Button>
                    </div>
                </form>
            </div>
        )
    }
}