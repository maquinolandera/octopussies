'use strict'

var express = require('express'),
	app = express()

app
	.get('/',(req,res)=> {
		res.end('<h1> hola desde express 1 :) </h1>')
	})
	.get('/user/:id',(req,res) => {
		res.end('<h1> hola desde user '+req.params.id+' </h1>')
	})

	.get('/search/:busqueda',(req,res) => {
		res.end('<h1>estas en la pagina de busqueda encontramos lo que se te antoje tu busqueda es '+req.params.busqueda+'</h1>')
	})
	.listen(3000)

	console.log('Iniciando servidor express ')