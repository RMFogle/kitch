import React, { Component } from 'react'; 
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'; 
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion'; 
import Form from 'react-bootstrap/Form';
import { Icon } from '@iconify/react';
import arrowDropDownLine from '@iconify-icons/ri/arrow-drop-down-line';
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
import FreeDemo from '../assets/img/getstarted-freedemo.png'
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
            <Image src={Quote} fluid />
    </Card>
    </div>
    </div>
    </div>
        <br>
        </br>
        <div className="container-three">
        <div className="row">
            <div className="col-6">
        <Card className="card-info" id="how">
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
            <Card className="card1">
                    <Card.Img variant="top" src={FreeDemo} />
                        <Card.Body>
                        <div className="row">
                            <div className="col-4">
                            <Button href="/demo" variant="info" size="lg">FREE Demo</Button>
                            </div>
                            <br></br>
                            <div className="col-8">
                        <Accordion defaultActiveKey="1" id="schedule">
                            <Card border="info">
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                <h4><Icon icon={arrowDropDownLine} height="2em" /> Click here to schedule a demo for you and your team</h4>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <Form>
                                            <Form.Group controlId="formGroupEmail">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control type="name" placeholder="Enter name" />
                                            </Form.Group>
                                            <Form.Group controlId="formGroupPassword">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" placeholder="Email" />
                                            </Form.Group>
                                            <Form.Group controlId="formGroupPassword">
                                                <Form.Label>Phone</Form.Label>
                                                <Form.Control type="phone" placeholder="Phone" />
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                                <Form.Label>Message (Include a date and time and one of our
                                                customer service associates will contact you)</Form.Label>
                                            <Form.Control type="message" as="textarea" rows={3} />
                                            </Form.Group>
                                                <Button variant="primary" type="submit">
                                                Submit
                                                </Button>
                                        </Form>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
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