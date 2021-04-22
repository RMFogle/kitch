import React, { Component } from 'react'; 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'


export default class PricingPage extends Component {

    render() {
        return (
            <div className="card-responsive">
                <CardDeck>
                    <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                        <Card.Title>Basic</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        </Card.Footer>
                    </Card>
                    <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
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
                    <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                        <Card.Title>Executive</Card.Title>
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