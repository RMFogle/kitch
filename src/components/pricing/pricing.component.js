import React, { Component } from 'react'; 
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'; 
import Starter from '../assets/img/starter-pricing.png'; 
import Pro from '../assets/img/pro-pricing.png'; 
import Enterprise from '../assets/img/enter-pricing.png'; 


export default class PricingPage extends Component {

    render() {
        return (
            <div className="card-responsive">
                <CardDeck>
                    <Card>
                    <Card.Img variant="top" src={Starter} />
                        <Card.Body>
                        <Card.Title>Starter</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        </Card.Footer>
                    </Card>
                    <Card>
                    <Card.Img variant="top" src={Pro} />
                        <Card.Body>
                        <Card.Title>Pro</Card.Title>
                            <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        </Card.Footer>
                    </Card>
                    <Card>
                    <Card.Img variant="top" src={Enterprise} />
                        <Card.Body>
                        <Card.Title>Enterprise</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
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