import React, { Component } from 'react'; 
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'; 
import Button from 'react-bootstrap/Button';
import { Icon } from '@iconify/react';
import listOutline from '@iconify-icons/eva/list-outline';
import peopleGroup from '@iconify-icons/vs/people-group';
import calendarClockOutline from '@iconify-icons/mdi/calendar-clock-outline';
import barGraph from '@iconify-icons/entypo/bar-graph';
import KitchCarousel from '../assets/img/kitch-carousel.jpg';
import InventoryCarousel from '../assets/img/inventory-carousel.jpg'; 
import ClientsCarousel from '../assets/img/clients-carousel.jpg'; 
import BookingCarousel from '../assets/img/bookings-carousel.jpg'; 
import ReportsCarousel from '../assets/img/reports-carousel.jpg'; 
import InventoryScreenshot from '../assets/img/inventory-info-1280x720.jpg';
import ClientScreenshot from '../assets/img/client-info-1280x720.jpg'; 
import BookingScreenshot from '../assets/img/booking-info-1280x720.jpg'; 
import ReportScreenshot from '../assets/img/reports-info-1280x720.jpg';
import Quote from '../assets/img/quote-homepage.png'; 
import FreeDemo from '../assets/img/getstarted-freedemo.png'; 
import CreateScheduleDemo from './scheduleDemo.component'; 
import '../styles/homePage-style.css';




export default class HomePage extends Component {

    render() {

        return (
            <div className="container-main">
                <div className="container-carousel">
                <div className="row">
                    <div className="col">
            <Carousel className="carousel">
                <Carousel.Item interval={3000}>
                <img
                className="d-block w-100"
                src={KitchCarousel}
                alt="First slide"
                />
            </Carousel.Item>
                <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={InventoryCarousel}
                alt="Second slide"
                />
            </Carousel.Item>
                <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={ClientsCarousel}
                alt="Third slide"
                />
            </Carousel.Item>
                <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={BookingCarousel}
                alt="Fourth slide"
                />
            </Carousel.Item>
                <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={ReportsCarousel}
                alt="Fifth slide"
                />
            </Carousel.Item>
        </Carousel>
        </div>
        </div>
        </div>
        <br>
        </br>
        <div className="container-quote">
            <div className="row">
                <div className="col">
        <Card>
    <Card.Header></Card.Header>
            <Image src={Quote} fluid className="info-image" />
    </Card>
    </div>
    </div>
    </div>
        <br>
        </br>
        <div className="container-info">
        <div className="row">
            <div className="col-6">
        <Card className="card-info" id="how">
            <Card.Header><Icon icon={listOutline} /></Card.Header>
                <Card.Body>
                <Card.Title>Manage Your Inventory</Card.Title>
                    <Card.Text>
                        Add food items and kitchen supplies. Keep track of total costs and stock. 
                    </Card.Text>
                </Card.Body>
        </Card>
        </div>
            <div className="col-6">
        <Image src={InventoryScreenshot} fluid className="info-image" />
        </div>
        </div>
        </div>
        <br>
        </br>
        <div className="container-info">
        <div className="row">
            <div className="col-6">
            <Image src={ClientScreenshot} fluid className="info-image" />
        </div>
            <div className="col-6">
        <Card className="card-info">
            <Card.Header><Icon icon={peopleGroup} /></Card.Header>
                <Card.Body>
                <Card.Title>Keep Track Of Your Clients</Card.Title>
                    <Card.Text>
                        Sortable tables make it easy to find a client and update their contact information. 
                    </Card.Text>
                </Card.Body>
        </Card>
        </div>
        </div>
        </div>
        <br>
        </br>
        <div className="container-info">
        <div className="row">
            <div className="col-6">
        <Card className="card-info">
            <Card.Header><Icon icon={calendarClockOutline} /></Card.Header>
                <Card.Body>
                <Card.Title>Schedule Bookings</Card.Title>
                    <Card.Text>
                        Know when, where and how many guests you need to feed for your clients next event. 
                    </Card.Text>
                </Card.Body>
        </Card>
        </div>
            <div className="col-6">
        <Image src={BookingScreenshot} fluid className="info-image" />
        </div>
        </div>
        </div>
        <br>
        </br>
        <div className="container-info">
        <div className="row">
            <div className="col-6">
            <Image src={ReportScreenshot} fluid className="info-image" />
        </div>
            <div className="col-6">
        <Card className="card-info">
            <Card.Header><Icon icon={barGraph} /></Card.Header>
                <Card.Body>
                <Card.Title>Generate Reports and Data Charts</Card.Title>
                    <Card.Text>
                        Visulized data shows you how much you spend on inventory each month. 
                        How many new clients you've booked, or how many bookings you've cancelled per month. 
                        Make informed decisions about your business with our data charts powered by mongoDB Charts. 
                    </Card.Text>
                </Card.Body>
        </Card>
        </div>
        </div>
        </div>
        <br>
        </br>
        <div className="container-demo">
            <Card className="card1">
                    <Card.Img variant="top" src={FreeDemo} />
                        <Card.Body>
                        <div className="row">
                            <div className="col-4">
                            <Button href="/demo" variant="info" size="lg">FREE Demo</Button>
                            </div>
                            <br></br>
                            <div className="col-8">
                            <CreateScheduleDemo />
                        </div>
                        </div>
                        </Card.Body>
                    </Card>
                    <br></br>
                <Card className="text-center" id="card2">
                    {/* <Card.Header></Card.Header> */}
                    <Card.Body>
                        <Card.Title><h4>Manage Your Catering Business Today!</h4></Card.Title>
                        <Card.Text>See which plan is right for you.</Card.Text>
                        <Button href="/pricing" variant="success" size="lg">Sign up</Button>
                    </Card.Body>
                    {/* <Card.Footer className="text-muted"></Card.Footer> */}
                </Card>
                {/* break */}
                <br></br>
        </div>
        </div>
        )
    }
}