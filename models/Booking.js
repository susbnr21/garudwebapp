const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const BookingSchema = new Schema({
    name: {
        type: String,
    },
    room_size: {
        type: String,
    },
    emailing_address: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    company_name: {
        type: String,
        required: true
    },
    company_address: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});
module.exports = Booking =mongoose.model("bookings", BookingSchema);