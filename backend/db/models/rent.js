const mongoose = require('mongoose')

const Rent = mongoose.model('rent',{
    klient: String,
    film: String,
    data_wypozyczenia: Date,
    planowany_zwrot: Date,
    faktyczny_zwrot: Date,
});

module.exports = Rent;