const mongoose = require('mongoose'); 

const Schema = mongoose.Schema; 

const bookingSchema = new Schema({
    clientname: { type: String, required: true, },
    eventtype: { type: String, required: true, }, 
    location: { type: String, required: true, }, 
    date: { type: Date, required: true }, 
    time: { type: TimeRanges, required: true }, 
}, {
    timestamps: true, 
}); 

const Booking = mongoose.model('Booking', bookingSchema); 

module.exports = Booking; 