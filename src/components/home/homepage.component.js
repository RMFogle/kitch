import React, { Component } from 'react'; 
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'; 
import Button from 'react-bootstrap/Button';
import KitchCarousel from '../assets/img/kitch-carousel.jpg';
import InventoryCarousel from '../assets/img/inventory-carousel.jpg'; 
import ClientsCarousel from '../assets/img/clients-carousel.jpg'; 
import BookingCarousel from '../assets/img/bookings-carousel.jpg'; 
import ReportsCarousel from '../assets/img/reports-carousel.jpg'; 
import InventoryScreenshot from '../assets/img/inventory-info-1280x720.jpg';
import ClientScreenshot from '../assets/img/client-info-1280x720.jpg'; 
import BookingScreenshot from '../assets/img/booking-info-1280x720.jpg'; 
import ReportScreenshot from '../assets/img/reports-info-1280x720.jpg'; 

import '../styles/homePage-style.css'; 


export default class HomePage extends Component {

    render() {

        return (
            <div className="container-main">
                <div className="container-one">
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
        <div className="container-two">
            <div className="row">
                <div className="col">
        <Card>
    <Card.Header></Card.Header>
        <Card.Body>
            <blockquote className="blockquote mb-0">
                <p>
                {' '}
                A Good System Shortens The Road To The Goal.{' '}
                </p>
                <footer className="blockquote-footer">
                Orison Swett Marden
                </footer>
            </blockquote>
        </Card.Body>
    </Card>
    </div>
    </div>
    </div>
        <br>
        </br>
        <div className="container-three">
        <div className="row">
            <div className="col-6">
        <Card className="card-info">
            <Card.Header>Inventory</Card.Header>
                <Card.Body>
                <Card.Title>Manage Your Inventory</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                </Card.Body>
        </Card>
        </div>
            <div className="col-6">
        <Image src={InventoryScreenshot} fluid />
        </div>
        </div>
        </div>
        <br>
        </br>
        <div className="container-four">
        <div className="row">
            <div className="col-6">
            <Image src={ClientScreenshot} fluid />
        </div>
            <div className="col-6">
        <Card className="card-info">
            <Card.Header>Clients</Card.Header>
                <Card.Body>
                <Card.Title>Keep Track Of Your Clients</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                </Card.Body>
        </Card>
        </div>
        </div>
        </div>
        <br>
        </br>
        <div className="container-five">
        <div className="row">
            <div className="col-6">
        <Card className="card-info">
            <Card.Header>Bookings</Card.Header>
                <Card.Body>
                <Card.Title>Schedule Bookings</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                </Card.Body>
        </Card>
        </div>
            <div className="col-6">
        <Image src={BookingScreenshot} fluid />
        </div>
        </div>
        </div>
        <br>
        </br>
        <div className="container-six">
        <div className="row">
            <div className="col-6">
            <Image src={ReportScreenshot} fluid />
        </div>
            <div className="col-6">
        <Card className="card-info">
            <Card.Header>Data Charts</Card.Header>
                <Card.Body>
                <Card.Title>Generate Reports and Data Charts</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                </Card.Body>
        </Card>
        </div>
        </div>
        </div>
        <br>
        </br>
        <div className="container-seven">
            <div className="row">
                <div className="col">
        <Card className="text-center">
            <Card.Header>Get Started</Card.Header>
                <Card.Body>
                    <Card.Title>Manage Your Catering Business Today</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Start Demo</Button>
                </Card.Body>
        </Card>
        </div>
        </div>
        </div>
        <br>
        </br>
        </div>
        )
    }
}