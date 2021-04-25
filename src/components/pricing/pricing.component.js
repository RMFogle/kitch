import React, { Component } from 'react'; 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'; 
import ListGroup from 'react-bootstrap/ListGroup'; 
import { Icon } from '@iconify/react';
import checkmarkCircle2Fill from '@iconify-icons/eva/checkmark-circle-2-fill';
import Starter from '../assets/img/starter-pricing.png'; 
import Pro from '../assets/img/pro-pricing.png'; 
import Enterprise from '../assets/img/enter-pricing.png'; 
import '../styles/pricing-style.css'; 


export default class PricingPage extends Component {

    render() {
        return (
            <div className="card-responsive">
                <CardDeck>
                    <Card>
                    <Card.Img variant="top" src={Starter} />
                        <Card.Body>
                        <Button href="/checkout" variant="success" size="lg" className="buybutton">Buy It</Button>
                        <Card.Title>_________________________________________</Card.Title>
                            <Card.Text>
                            <ListGroup variant="flush">
                            <ListGroup.Item><Icon icon={checkmarkCircle2Fill} className="checkmark" />{" "}<small>Good for Start Ups or Small Businesses</small></ListGroup.Item>
                            <ListGroup.Item><Icon icon={checkmarkCircle2Fill} className="checkmark"/>{" "}<small>100 GB Secure Storage</small></ListGroup.Item>
                            <ListGroup.Item><Icon icon={checkmarkCircle2Fill} className="checkmark"/>{" "}<small>Mobile and Sync Capabilities</small></ListGroup.Item>
                            <ListGroup.Item><Icon icon={checkmarkCircle2Fill} className="checkmark"/>{" "}<small>Up to 10 Embedded Data Charts</small></ListGroup.Item>
                            <ListGroup.Item><Icon icon={checkmarkCircle2Fill} className="checkmark"/>{" "}<small>Customer Support Help Desk</small></ListGroup.Item>
                            </ListGroup>
                            ___________________________________________________
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        </Card.Footer>
                    </Card>
                    <Card>
                    <Card.Img variant="top" src={Pro} />
                        <Card.Body>
                        <Button href="/checkout" variant="success" size="lg" className="buybutton">Buy It</Button>
                        <Card.Title>_________________________________________</Card.Title>
                            <Card.Text>
                            <ListGroup variant="flush">
                            <ListGroup.Item><Icon icon={checkmarkCircle2Fill} className="checkmark"/>{" "}<small>All Starter Features +</small></ListGroup.Item>
                            <ListGroup.Item><Icon icon={checkmarkCircle2Fill} className="checkmark"/>{" "}<small>Minimum 3 Users</small></ListGroup.Item>
                            <ListGroup.Item><Icon icon={checkmarkCircle2Fill} className="checkmark"/>{" "}<small>500 GB Secure Storage</small></ListGroup.Item>
                            <ListGroup.Item><Icon icon={checkmarkCircle2Fill} className="checkmark"/>{" "}<small>Up to 25 Embedded Data Charts</small></ListGroup.Item>
                            <ListGroup.Item><Icon icon={checkmarkCircle2Fill} className="checkmark"/>{" "}<small>Client Side Online Ordering</small></ListGroup.Item>
                            </ListGroup>
                            ___________________________________________________
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        </Card.Footer>
                    </Card>
                    <Card>
                    <Card.Img variant="top" src={Enterprise} />
                        <Card.Body>
                        <Button href="/checkout" variant="success" size="lg" className="buybutton">Buy It</Button>
                        <Card.Title>_________________________________________</Card.Title>
                            <Card.Text>
                            <ListGroup variant="flush">
                            <ListGroup.Item><Icon icon={checkmarkCircle2Fill} className="checkmark"/>{" "}<small>All Professional Features +</small></ListGroup.Item>
                            <ListGroup.Item><Icon icon={checkmarkCircle2Fill} className="checkmark"/>{" "}<small>Unlimited Secure Storage</small></ListGroup.Item>
                            <ListGroup.Item><Icon icon={checkmarkCircle2Fill} className="checkmark"/>{" "}<small>Enhanced Session and Account Management</small></ListGroup.Item>
                            <ListGroup.Item><Icon icon={checkmarkCircle2Fill} className="checkmark"/>{" "}<small>Unlimited Embedded Data Charts</small></ListGroup.Item>
                            <ListGroup.Item><Icon icon={checkmarkCircle2Fill} className="checkmark"/>{" "}<small>Full Customization of SDK Data Charts Package</small></ListGroup.Item>
                            </ListGroup>
                            ___________________________________________________
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </div>
        )
    }
}