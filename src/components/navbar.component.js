import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
              <Link to="/" className="navbar-brand">kitch</Link>
              <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                    <Link to="/" className="nav-link">Bookings</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/create" className="nav-link">Create Booking</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/client" className="nav-link">Clients</Link>
                    </li>
              </ul>
              </div>
            </nav>
        );
    }
}