import React, { Component } from 'react'; 
import Card from 'react-bootstrap/Card'; 
import CardDeck from 'react-bootstrap/CardDeck';
import InventoryIcon from '../assets/img/kitch-inventory-homepage.png'; 
import BookingIcon from '../assets/img/kitch-bookings-homepage.png'; 
import ClientIcon from '../assets/img/kitch-clients-homepage.png';
import Name from './globalVariableTest.component'; 
import '../styles/homePage-style.css'; 


export default class HomePage extends Component {


    render() {
        return (
            <CardDeck className="card-deck">
                <Card className="card">
                    <Card.Body className="card-body-home">
                        <Card.Link href="/inventory">
                            <Card.Img variant="top" src={InventoryIcon} />
                        </Card.Link>
                    </Card.Body>
                    <Card.Footer>
                        {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                    </Card.Footer>
                </Card>
                <Card className="card">
                    <Card.Body className="card-body-home">
                        <Card.Link href="/client">
                            <Card.Img variant="top" src={ClientIcon} />
                        </Card.Link>
                    </Card.Body>
                    <Card.Footer>
                        <Name />
                    </Card.Footer>
                </Card>
                <Card className="card">
                    <Card.Body className="card-body-home">
                        <Card.Link href="/booking">
                            <Card.Img variant="top" src={BookingIcon} />
                        </Card.Link>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardDeck>
        )
    }
}