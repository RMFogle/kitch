import React, { Component } from 'react'; 
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'; 

export default class MainNavbar extends Component {

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/home">kitch</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/inventory" activeClassName="selectedLink">Inventory</Nav.Link>
                        <Nav.Link href="/booking">Bookings</Nav.Link>
                        <Nav.Link href="/client">Clients</Nav.Link>
                            <NavDropdown title="Other" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/Archive">Archive</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/Trash">Trash</NavDropdown.Item>
                            </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Sign in</Nav.Link>
                        {/* <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}