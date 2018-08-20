'use strict'

var express = require('express'),

	router = express.Router()


function jade(req,res,next)
{
	let locals = {
		title: 'Jade',
		link: 'https://google.es',
		descripcion:'Como debería ser el avatar de un usuario',
		imagen:'http://lorempixel.com/400/200'
	}
	res.render('index.jade',locals)
	
}
router
	.get('/',(req,res)=>{
		
		res.end('<h1>Configuraci&oacute;n terminada de nuestra primera blablabla express</h1>')

	})
	router.get('/jade',jade)

module.exports = router