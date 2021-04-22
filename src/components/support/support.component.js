import React, { Component } from 'react'; 
import Card from 'react-bootstrap/Card';
import Image from '../assets/img/800x400solid.png'; 
import Image2 from '../assets/img/674x180solid.png'; 
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion'; 
import Form from 'react-bootstrap/Form';



export default class SupportPage extends Component {

    render() {
        return (
            <div className="card-responsive">
                <Card className="bg-dark text-white">
                    <Card.Img src={Image} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title><h4>Explore our FREE Demo</h4></Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                        </Card.Text>
                        <Button href="/demo" variant="info">FREE Demo</Button>
                    </Card.ImgOverlay>
                </Card>
                <Accordion defaultActiveKey="1">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                        <h4>Click here to schedule a demo for you and your team</h4>
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
                <Card className="text-center">
                    <Card.Header></Card.Header>
                    <Card.Body>
                        <Card.Title>Get Started</Card.Title>
                        <Card.Text>
                        See which plan is right for you
                        </Card.Text>
                        <Button href="/pricing" variant="primary">Sign up</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted"></Card.Footer>
                </Card>
                {/* break */}

                <div className="row">
                <Card className="col-6">
                    <Card.Img variant="top" src={Image2} />
                    <Card.Body>
                        <Card.Text>
                            info instructions here in the image card above. 
                        </Card.Text>
                        <Button href="/pricing" variant="primary">Upgrade</Button>
                    </Card.Body>
                </Card>
                <Card className="col-6">
                    <Card.Img variant="top" src={Image2} />
                    <Card.Body>
                        <Card.Text>Problem with your account? Contact us.</Card.Text>
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
                            Question one here?
                            </Accordion.Toggle>
                        </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>Answer one here.</Card.Body>
                    </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Question two here?
                            </Accordion.Toggle>
                        </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>Answer two here.</Card.Body>
                    </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            Question three here?
                            </Accordion.Toggle>
                        </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>Answer three here.</Card.Body>
                    </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="3">
                            Question four here?
                            </Accordion.Toggle>
                        </Card.Header>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>Answer four here.</Card.Body>
                    </Accordion.Collapse>
                    </Card>
                </Accordion>
                {/* break */}
                
            </div>
        )
    }
}