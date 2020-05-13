const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

const validateInfoInput = require("../../validation/booking");

// Load Booking model
const Booking = require("../../models/Booking");

// posting booking details
router.post("/booking", (req, res) => {

    // Form validation
    const { errors, isValid } = validateInfoInput(req.body);

    // Check validation
        if (!isValid) {
            return res.status(400).json(errors);
        }
    Booking.findOne({ emailing_address: req.body.emailing_address }).then(user => {
        if (user) {
            return res.status(400).json({ emailing_address: "Email already exists" });
        } else {
            const newBooking = new Booking({
                name: req.body.name,
                room_size: req.body.room_size,
                emailing_address: req.body.emailing_address,
                phone_number: req.body.phone_number,
                company_name: req.body.company_name,
                company_address: req.body.company_address,
            });
        console.log(newBooking);
        //save the note to the database
        newBooking.save()
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Error occured while booking!!!"
                });
            }); 
        }

    //Token
        jwt.sign(
            keys.secretOrKey,
            {
                expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
                res.json({
                    success: true,
                    token: "Bearer " + token
                });
            }
        )
    });
});

module.exports = router;