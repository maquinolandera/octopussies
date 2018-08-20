'use strict'

var MovieController = require('../controllers/movie-controller'),
	express = require('express'),
	router = express.Router()




router
	
		.get('/',MovieController.getAll)
		//next()
		.get('/agregar',MovieController.addForm)
		.post('/',MovieController.insert)
		.use(MovieController.error404)
	module.exports = router