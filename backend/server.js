const express = require('express'); 
const cors = require('cors'); 
const mongoose = require('mongoose'); 

require('dotenv').config(); 

const app = express(); 
const port = process.env.PORT || 5000; 

app.use(cors()); 
app.use(express.json()); 

const uri = process.env.ATLAS_URI; 
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection; 
connection.once('open', () => {
    console.log("MongoDB database connection established successfully"); 
})

const bookingsRouter = require('./routes/bookings'); 
const clientsRouter = require('./routes/clients'); 
const inventorysRouter = require('./routes/inventorys'); 

app.use('/bookings', bookingsRouter); 
app.use('/clients', clientsRouter); 
app.use('/inventorys', inventorysRouter); 

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`); 
}); 