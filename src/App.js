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
import TrashInventory from "./components/sendToo-trashInventory.component";
import TrashInventoryFromArchive from "./components/sendToos-trashInventoryFromArchive.component"; 
import ArchiveRestoreInventory from "./components/restore-Inventory.component";
import TrashRestoreInventory from "./components/restores-InventoryTrash.component"; 
import ArchiveBookingList from "./components/archiveBooking-list.component"; 
import ArchiveBooking from "./components/addTo-archiveBooking.component";
import TrashBooking from "./components/addToo-trashBooking.component";
import TrashBookingList from "./components/trashBooking-list.component";
import ArchiveRestoreBooking from "./components/restoreBooking-fromArchive.component";
import TrashBookingFromArchive from "./components/addTooTrash-fromArchiveBooking.component";
import TrashRestoreBooking from "./components/restoresBooking-fromTrash.component"; 
import ArchiveClientList from "./components/archiveClient-list.component"; 
import TrashClientList from "./components/trashClient-list.component"; 
import ArchiveClient from "./components/postTo-archiveClient.component"; 
import TrashClient from "./components/postToo-trashClient.component";
import ArchiveRestoreClient from "./components/restoreClient-fromArchive.component";
import TrashClientFromArchive from "./components/postToTrash-fromArchiveClient.component"; 
import TrashRestoreClient from "./components/restoresClient-fromTrash.component"; 



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
      <Route path="/archive" component={ArchiveBookingList} />
      <Route path="/archive" component={ArchiveClientList} />
      <Route path="/trash" component={TrashInventoryList} />
      <Route path="/trash" component={TrashBookingList} />
      <Route path="/trash" component={TrashClientList} />
      <Route path="/postTo/:id" component={ArchiveClient} />
      <Route path="/postToo/:id" component={TrashClient} />
      <Route path="/postToTrash/:id" component={TrashClientFromArchive} />
      <Route path="/addTo/:id" component={ArchiveBooking} />
      <Route path="/addToo/:id" component={TrashBooking} />
      <Route path="/addTooTrash/:id" component={TrashBookingFromArchive} />
      <Route path="/sendTo/:id" component={ArchiveInventory} />
      <Route path="/sendToo/:id" component={TrashInventory} />
      <Route path="/sendToos/:id" component={TrashInventoryFromArchive} /> 
      <Route path="/restore/:id" component={ArchiveRestoreInventory} />
      <Route path="/restores/:id" component={TrashRestoreInventory} />
      <Route path="/restoreBooking/:id" component={ArchiveRestoreBooking} />
      <Route path="/restoresBooking/:id" component={TrashRestoreBooking} />
      <Route path="/restoreClient/:id" component={ArchiveRestoreClient} />
      <Route path="/restoresClient/:id" component={TrashRestoreClient} />
      </div>
    </Router>
  );
}

export default App;
