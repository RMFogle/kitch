import React, { Component } from 'react'; 
import axios from 'axios'; 
import Button from 'react-bootstrap/Button';
import DatePicker from 'react-date-picker'; 

const BookingTimes = () => (
    <optgroup>
        <option>12:00 AM</option>
        <option>12:30 AM</option>
        <option>1:00 AM</option>
        <option>1:30 AM</option>
        <option>2:00 AM</option>
        <option>2:30 AM</option>
        <option>3:00 AM</option>
        <option>3:30 AM</option>
        <option>4:00 AM</option>
        <option>4:30 AM</option>
        <option>5:00 AM</option>
        <option>5:30 AM</option>
        <option>6:00 AM</option>
        <option>6:30 AM</option>
        <option>7:00 AM</option>
        <option>7:30 AM</option>
        <option>8:00 AM</option>
        <option>8:30 AM</option>
        <option>9:00 AM</option>
        <option>9:30 AM</option>
        <option>10:00 AM</option>
        <option>10:30 AM</option>
        <option>11:00 AM</option>
        <option>11:30 AM</option>
        <option>12:00 PM</option>
        <option>12:30 PM</option>
        <option>1:00 PM</option>
        <option>1:30 PM</option>
        <option>2:00 PM</option>
        <option>2:30 PM</option>
        <option>3:00 PM</option>
        <option>3:30 PM</option>
        <option>4:00 PM</option>
        <option>4:30 PM</option>
        <option>5:00 PM</option>
        <option>5:30 PM</option>
        <option>6:00 PM</option>
        <option>6:30 PM</option>
        <option>7:00 PM</option>
        <option>7:30 PM</option>
        <option>8:00 PM</option>
        <option>8:30 PM</option>
        <option>9:00 PM</option>
        <option>9:30 PM</option>
        <option>10:00 PM</option>
        <option>10:30 PM</option>
        <option>11:00 PM</option>
        <option>11:30 PM</option>
        <option>12:00 PM</option>
    </optgroup>
)


export default class EditBooking extends Component {
    constructor(props) {
        super(props); 

        this.onChangeClientname = this.onChangeClientname.bind(this); 
        this.onChangeEventtype = this.onChangeEventtype.bind(this); 
        this.onChangeLocation = this.onChangeLocation.bind(this); 
        this.onChangeDate = this.onChangeDate.bind(this); 
        this.onChangeStartTime = this.onChangeStartTime.bind(this); 
        this.onChangeEndTime = this.onChangeEndTime.bind(this); 
        this.onSubmit = this.onSubmit.bind(this); 
        
        this.state = {
            clientname: '', 
            eventtype: '', 
            location: '', 
            date: new Date(),
            starttime: '', 
            endtime: '', 
            clients: []
        }
    }


    componentDidMount() {
        axios.get('http://localhost:5000/bookings/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    clientname: response.data.clientname, 
                    eventtype: response.data.eventtype, 
                    location: response.data.location, 
                    date: new Date(response.data.date), 
                    starttime: response.data.starttime, 
                    endtime: response.data.endtime
                })
            })
            .catch(function (error) {
                console.log(error); 
            })

        axios.get('http://localhost:5000/clients/')
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

    onChangeStartTime(e) {
        this.setState({
            starttime: e.target.value 
        });
    }

    onChangeEndTime(e) {
        this.setState({
            endtime: e.target.value 
        });
    }

    bookingTimesList() {
        return <BookingTimes />
    }

    onSubmit(e) { 
        e.preventDefault(); 

        const booking = {
            clientname: this.state.clientname, 
            eventtype: this.state.eventtype, 
            location: this.state.location, 
            date: this.state.date, 
            starttime: this.state.starttime, 
            endtime: this.state.endtime
        }

        console.log(booking);

        axios.post('http://localhost:5000/bookings/update/'+this.props.match.params.id, booking)
        .then(res => console.log(res.data)); 

        window.location = '/booking'; 
    }


    render() { 
        return (
            <div>
               <h3>Edit Booking</h3>
               <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Client: </label>
                    <select ref="clientInput"
                        required
                        className="form-control"
                        value={this.state.clientname}
                        onChange={this.onChangeClientname}>
                        {
                            this.state.clients.map(function(client) {
                                return <option 
                                key={client}
                                value={client}>{client}
                                </option>; 
                            })
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label>Event: </label>
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.eventtype}
                        onChange={this.onChangeEventtype}
                        />
                </div>
                <div className="form-group">
                    <label>Location: </label>
                    <input 
                        type="text"
                        className="form-control"
                        value={this.state.location}
                        onChange={this.onChangeLocation}
                        />
                </div>
                <div class="form-row">
                <div className="form-group col-md-3">
                    <label>Date: </label>
                    <div>
                        <DatePicker
                        value={this.state.date}
                        onChange={this.onChangeDate}
                        />
                    </div>
                </div>
                <div className="form-group col-md-4">
                    <label for="time1">Start Time: </label>
                        <select id="time1"
                        required
                        className="form-control"
                        value={this.state.starttime}
                        onChange={this.onChangeStartTime}>
                            { this.bookingTimesList() }
                        </select>
                        </div>
                        <div className="form-group col-md-4">
                        <label for="time2">End Time: </label>
                        <select id="time2"
                        required
                        className="form-control"
                        value={this.state.endtime}
                        onChange={this.onChangeEndTime}>
                            { this.bookingTimesList() }
                        </select>
                        </div>
                    </div>

                <div className="form-group">
                    <input type="submit" value="Save" className="btn btn-primary" />
                    {" "}
                    <Button href="/booking/">Cancel</Button>
                </div>
            </form>
            </div>
        )
    }
}