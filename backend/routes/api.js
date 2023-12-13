const express = require('express')
const router = express.Router()

const movieActions = require('../actions/api/movieActions')
const rentActions = require('../actions/api/rentActions')
const customerActions = require('../actions/api/customerActions')


router.get('/movies', movieActions.getAllMovies) 
router.get('/movies/:id', movieActions.getMovie) 
router.post('/movies', movieActions.newMovie) 
router.put('/movies/:id', movieActions.updateMovie) 
router.delete('/movies/:id', movieActions.deleteMovie) 
router.get('/rents', rentActions.getAllRent) 
router.get('/rents/:id', rentActions.getRent)
router.put('/rents/:id', rentActions.updateRent) 
router.post('/rents', rentActions.newRent)  
router.get('/customers', customerActions.getAllCustomer) 
router.get('/customers/:id', customerActions.getCustomer) 
router.delete('/customers/:id', customerActions.deleteMovie) 
router.post('/customers', customerActions.newCustomer)
router.put('/customers/:id', customerActions.updateCustomer)   

module.exports = router;