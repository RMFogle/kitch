const mongoose = require('mongoose'); 

const Schema = mongoose.Schema; 

const trashBookingSchema = new Schema({
    clientname: { type: String, required: true, },
    eventtype: { type: String, required: true, }, 
    location: { type: String, required: true, }, 
    date: { type: Date, required: true },
    starttime: { type: String, required: true, }, 
    endtime: { type: String, required: true, }, 
}, {
    timestamps: true, 
}); 

const TrashBooking = mongoose.model('TrashBooking', trashBookingSchema); 

module.exports = TrashBooking; 