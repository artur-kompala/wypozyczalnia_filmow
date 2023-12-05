const mongoose = require('mongoose')

const Movie = mongoose.model('movie',{
    tytul: String,
    gatunek: String,
    rezyser: String,
    czas_trwania: Number,
    ocena: Number,
    opis: String,
    aktorzy: Array,
    data_dodania: Date
});

module.exports = Movie;