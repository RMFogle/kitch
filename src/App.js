import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"; 
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

import Navbar from "./components/navbar.component"; 
import BookingsList from "./components/bookings-list.component";
import EditBooking from "./components/edit-booking.component"; 
import CreateBooking from "./components/create-booking.component"; 
import CreateClient from "./components/create-client.component"; 

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={BookingsList} />
      <Route path="/edit/:id" component={EditBooking} />
      <Route path="/create" component={CreateBooking} />
      <Route path="/client" component={CreateClient} /> 
      </div>
    </Router>
  );
}

export default App;
