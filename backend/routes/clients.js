const router = require('express').Router(); 
let Client = require('../models/client.model'); 

router.route('/').get((req, res) => {
    Client.find()
        .then(clients => res.json(clients))
        .catch(err => res.status(400).json('Error: ' + err)); 
}); 

router.route('/add').post((req, res) => { 
    const clientname = req.body.clientname; 
    const phone = req.body.phone; 
    const email = req.body.email; 
    const notes = req.body.notes; 
    
    const newClient = new Client({
        clientname,
        phone,
        email, 
        notes, 
    }); 

    newClient.save()
        .then(() => res.json('Client added!'))
        .catch(err => res.status(400).json('Error: ' + err)); 
}); 

module.exports = router; 