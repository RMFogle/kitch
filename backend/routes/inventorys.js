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

    router.route('/:id').get((req, res) => {
        Inventory.findById(req.params.id)
            .then(inventory => res.json(inventory))
            .catch(err => res.status(400).json('Error: ' + err));
    }); 

    router.route('/:id').delete((req, res) => {
        Inventory.findByIdAndDelete(req.params.id)
            .then(() => res.json('Inventory deleted'))
            .catch(err => res.status(400).json('Error: ' + err)); 
    }); 

    router.route('/update/:id').post((req, res) => {
        Inventory.findById(req.params.id)
            .then(inventory => {
                inventory.fooditem = req.body.fooditme; 
                inventory.category = req.body.category; 
                inventory.unitsize = req.body.unitsize; 
                inventory.instock = Number(req.body.instock); 
                inventory.needed = Number(req.body.needed); 
                inventory.topurchase = Number(req.body.topurchase); 
                inventory.unitprice = Number(req.body.unitprice); 
                inventory.totalcost = Number(req.body.totalcost); 

                inventory.save()
                    .then(() => res.json('Inventory updated!'))
                    .catch(err => res.status(400).json('Error: ' + err)); 
            })
            .catch(err => res.status(400).json('Error: ' + err)); 
    });


    module.exports = router; 

