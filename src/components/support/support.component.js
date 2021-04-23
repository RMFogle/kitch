import React, { Component } from 'react'; 
import Card from 'react-bootstrap/Card';
import Upgrade from '../assets/img/upgrad-support.png';
import Contact from '../assets/img/contact-support.png';
import UpgradeBottom from '../assets/img/belowupgrad-support.png'
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
                    {/* <Card.Img variant="bottom" src={Upgrade} /> */}
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