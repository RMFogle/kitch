const router = require('express').Router(); 
let Booking = require('../models/booking.model'); 

router.route('/').get((req, res) => {
    Booking.find()
    .then(bookings => res.json(bookings))
    .catch(err => res.status(400).json('Error: ' + err)); 
}); 

router.route('/add').post((req, res) => {
    const clientname = req.body.clientname; 
    const eventtype = req.body.eventtype; 
    const location = req.body.location; 
    const date = Date.parse(req.body.date); 
    const time = TimeRanges.parse(req.body.time); 

    
const newBooking = new Booking({
    clientname, 
    eventtype, 
    location, 
    date, 
    time, 
}); 

newBooking.save()
.then(() => res.json('Booking added!'))
.catch(err => res.status(400).json('Error: ' + err)); 
}); 

module.exports = router; 

 

