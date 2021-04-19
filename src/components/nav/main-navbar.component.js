import React, { Component } from 'react'; 
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Link } from 'react-router-dom'; 
import Logo1 from '../assets/img/kitch-navlogo-2a.png';
import '../styles/table-style.css'; 

export default class MainNavbar extends Component {

    render() {
        return (
            <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand>
                    <img width="auto" height="auto" className="img-responsive" src={Logo1} alt="logo"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href=""></Nav.Link>
                        <Nav.Link href=""></Nav.Link>
                        <Nav.Link href=""></Nav.Link>
                            {/* <NavDropdown title="" id="collasible-nav-dropdown">
                                <NavDropdown.Item href=""></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href=""></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href=""></NavDropdown.Item>
                            </NavDropdown> */}
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Sign In</Nav.Link>
                        {/* <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}