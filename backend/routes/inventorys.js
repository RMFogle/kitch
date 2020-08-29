const router = require('express').Router(); 
let Inventory = require('../models/inventory.model'); 

router.route('/').get((req, res) => {
    Inventory.find()
    .then(inventorys => res.json(inventorys))
    .catch(err => res.status(400).json('Error: ' + err)); 
}); 


    router.route('/add').post((req, res) => {
        const fooditem = req.body.fooditem; 
        const category = req.body.category; 
        const unitsize = req.body.unitsize; 
        const instock = Number(req.body.instock); 
        const needed = Number(req.body.needed); 
        const topurchase = Number(req.body.topurchase); 
        const unitprice = Number(req.body.unitprice); 
        const totalcost = Number(req.body.totalcost); 

        const newInvetory = new Inventory({
            fooditem, 
            category, 
            unitsize, 
            instock, 
            needed,
            topurchase,
            unitprice, 
            totalcost, 
        }); 

        newInvetory.save()
        .then(() => res.json('Inventory added!'))
        .catch(err => res.status(400).json('Error: ' + err)); 
    }); 

    module.exports = router; 

