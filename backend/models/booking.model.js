const mongoose = require('mongoose'); 

const Schema = mongoose.Schema; 

const bookingSchema = new Schema({
    clientname: { type: String, required: true, },
    eventtype: { type: String, required: true, }, 
    location: { type: String, required: true, }, 
    date: { type: Date, required: true }, 
    starttime: { type: String, required: true, }, 
    endtime: { type: String, required: true, }, 
    guestcount: { type: Number, required: true, }, 
}, {
    timestamps: true, 
}); 

const Booking = mongoose.model('Booking', bookingSchema); 

module.exports = Booking; 