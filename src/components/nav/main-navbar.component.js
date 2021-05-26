import React, { Component } from 'react'; 
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Logo1 from '../assets/img/kitch-navlogo-2a.png';
import '../styles/table-style.css'; 


export default class MainNavbar extends Component {

    render() {

        const popover = (
            <Popover id="popover-basic">
                <Popover.Title as="h3">Sign In Disabled</Popover.Title>
                    <Popover.Content>
                    Check out our <strong>FREE DEMO</strong>. Link at the bottom of the home page.
                </Popover.Content>
            </Popover>
        );

        return (
            <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand>
                    <Link to="/kitch">
                    <img width="auto" height="auto" className="img-responsive" src={Logo1} alt="logo"></img>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/kitch/#how">How it Works</Nav.Link>
                        <Nav.Link href="/support">Support</Nav.Link>
                        <Nav.Link href="/pricing">Pricing</Nav.Link>
                        <Nav.Link href="/Demo">Demo</Nav.Link>
                    </Nav>
                    <Nav>
                    <OverlayTrigger trigger="click" placement="left" overlay={popover}>
                        <Nav.Link href="#deets">Sign In</Nav.Link>
                    </OverlayTrigger>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}