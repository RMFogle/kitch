import React, { Component } from 'react'; 
import axios from 'axios'; 
import DatePicker from 'react-datepicker'; 
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { Icon } from '@iconify/react';
import arrowDropDownLine from '@iconify-icons/ri/arrow-drop-down-line';


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


export default class CreateBooking extends Component {
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
        axios.get('http://localhost:5000/clients/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        clients: response.data.map(client => client.clientname), 
                        clientname: response.data[0].clientname
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
        registerLocale('es', es); 
        setDefaultLocale('es');
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
       alert("Booking Successfully Added!!!")
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

        axios.post('http://localhost:5000/bookings/add', booking)
            .then(res => console.log(res.data)); 

            this.setState({
                clientname: '', 
                eventtype: '', 
                location: '',
                date: '', 
                starttime: '', 
                endtime: '' 
            })

        window.location.reload(); 
    }
    
    render() { 
        return (
            <div>
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                           +Add Booking
                           <Icon icon={arrowDropDownLine} height="2em" />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                <h3>Create Booking</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Client Name: </label>
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
                        <input type="text"
                        required
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
                                locale="es"
                                selected={ this.state.date}
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
                        <input type="submit" value="Save Booking" className="btn btn-primary"/>
                    </div>
                </form>
                </Card.Body>
                </Accordion.Collapse>
                </Card>
                </Accordion>
            </div>
        )
    }
}