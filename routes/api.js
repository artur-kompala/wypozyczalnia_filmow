const express = require('express')
const router = express.Router()

const movieActions = require('../actions/api/movieActions.js')


router.get('/movies', movieActions.getAllMovies) 
router.get('/movies/:id', movieActions.getMovie) 
router.post('/movies', movieActions.newMovie) 
router.put('/movies:id', movieActions.updateMovie) 
router.delete('/movies:id', movieActions.deleteMovie) 


module.exports = router;