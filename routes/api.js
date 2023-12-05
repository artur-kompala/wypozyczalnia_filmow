const express = require('express')
const router = express.Router()

const movieActions = require('../actions/api/movie')


router.get('/', movieActions.newMovie) 



module.exports = router;