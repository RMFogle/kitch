import React, { Component } from 'react'; 
import Card from 'react-bootstrap/Card';
import Upgrade from '../assets/img/upgrad-support.png';
import Contact from '../assets/img/contact-support.png';
import UpgradeBottom from '../assets/img/upgradebelow-support.png'; 
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion'; 
import Form from 'react-bootstrap/Form';
import '../styles/support-style.css'; 



export default class SupportPage extends Component {

    render() {
        return (
            <div className="card-responsive">
                <div className="row">
                <Card className="col-6" id="card3">
                    <Card.Img variant="top" src={Upgrade} />
                    <Card.Body>
                        <Card.Text>
                        </Card.Text>
                        <Button href="/pricing" variant="success" size="lg">Go</Button>
                    </Card.Body>
                    <Card.Img variant="bottom" src={UpgradeBottom} />
                </Card>
                <Card className="col-6" id="card4" border="info">
                    <Card.Img variant="top" src={Contact} />
                    <Card.Body>
                        <Card.Text></Card.Text>
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
                                    <Form.Label>Issue</Form.Label>
                                    <Form.Control type="message" as="textarea" rows={3} />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                Submit
                                </Button>
                            </Form>
                    </Card.Body>
                </Card>
                </div>
                {/* break */}
                <br></br>
                {/* FAQ: 
                    Q: Write out question
                                --> have as accordian on click to show answer */}
                <div>
                    <h2>FAQ's:</h2>
                </div>
                <Accordion>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            I cancelled a booking by mistake. How can I undo?
                            </Accordion.Toggle>
                        </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>All cancelled bookings are located in your Archive Booking List. You can restore the booking back to your main list, or send it to the trash for permanete deletion.</Card.Body>
                    </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            I just added data to my Inventory and it's not showing up in my reports or data charts. How long does this take? 
                            </Accordion.Toggle>
                        </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>Data charts are automatically updated. It can take up to 30min. If your updates take longer than 30min please contact us at ###-####.</Card.Body>
                    </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            I want to clean up my list. Is there a way to do that? 
                            </Accordion.Toggle>
                        </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>For clients you haven't booked in a while you can send their profile to your Client Archive.</Card.Body>
                    </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="3">
                            I don't see the menu option we're offering our clients. How do I add a new menu selection when I create a booking? 
                            </Accordion.Toggle>
                        </Card.Header>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>We can add it for you. Contact us at ###-####</Card.Body>
                    </Accordion.Collapse>
                    </Card>
                </Accordion>
                {/* break */}
                
            </div>
        )
    }
}