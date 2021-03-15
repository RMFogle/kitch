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
    const starttime = req.body.starttime; 
    const endtime = req.body.endtime; 

    
const newBooking = new Booking({
    clientname, 
    eventtype, 
    location, 
    date, 
    starttime, 
    endtime,
}); 

newBooking.save()
.then(() => res.json('Booking added!'))
.catch(err => res.status(400).json('Error: ' + err)); 
}); 

router.route('/:id').get((req, res) => {
    Booking.findById(req.params.id)
        .then(booking => res.json(booking))
        .catch(err => res.status(400).json('Error: ' + err)); 
}); 

router.route('/:id').delete((req, res) => {
    Booking.findByIdAndDelete(req.params.id)
        .then(() => res.json('Booking deleted'))
        .catch(err => res.status(400).json('Error: ' + err)); 
}); 

router.route('/update/:id').post((req, res) => {
    Booking.findById(req.params.id)
        .then(booking => {
            booking.clientname = req.body.clientname; 
            booking.eventtype = req.body.eventtype; 
            booking.location = req.body.location; 
            booking.date = Date.parse(req.body.date); 
            booking.starttime = req.body.starttime; 
            booking.endtime = req.body.endtime; 

            booking.save()
                .then(() => res.json('Booking updated!'))
                .catch(err => res.status(400).json('Error: ' + err)); 
        }) 
        .catch(err => res.status(400).json('Error: ' + err)); 
}); 

module.exports = router; 

 

