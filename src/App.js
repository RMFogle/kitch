import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import MainNavbar from "./components/main-navbar.component"; 
import InventoryList from "./components/inventorys-list.component"; 
import EditInventory from "./components/editss-inventory.component"; 
import CreateInventory from "./components/create-inventory.component"; 
import BookingsList from "./components/bookings-list.component";
import EditBooking from "./components/edit-booking.component"; 
import CreateBooking from "./components/create-booking.component"; 
import ClientsList from "./components/clients-list.component"; 
import EditClient from "./components/edits-client.components";
import CreateClient from "./components/create-client.component"; 
import ArchiveInventoryList from "./components/archiveInventory-list.component"; 
import TrashInventoryList from "./components/trashInventory-list.component";
import ArchiveInventory from "./components/sendTo-archiveInventory.component";

function App() {
  return (
    <Router>
      <div className="container">
      <MainNavbar />
      <br/>
      <Route path="/inventory" component={CreateInventory} />
      <Route path="/inventory" component={InventoryList} />
      <Route path="/editss/:id" component={EditInventory} />
      <Route path="/booking" component={CreateBooking} />
      <Route path="/booking" exact component={BookingsList} />
      <Route path="/edit/:id" component={EditBooking} />
      <Route path="/client" component={CreateClient} /> 
      <Route path="/client" component={ClientsList} />
      <Route path="/edits/:id" component={EditClient} />
      <Route path="/archive" component={ArchiveInventoryList} />
      <Route path="/trash" component={TrashInventoryList} />
      <Route path="/sendTo/:id" component={ArchiveInventory} />
      </div>
    </Router>
  );
}

export default App;
