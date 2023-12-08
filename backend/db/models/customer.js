const mongoose = require('mongoose')

const Customer = mongoose.model('customer',{
    imie: String,
    nazwisko: String,
    adres: String,
    telefon: Number,
    data_rejestracji: Date,
});

module.exports = Customer;