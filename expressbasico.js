'use strict'

var express = require('express'),
	app = express()

app
	.get('/',(req,res) => {
	 //res.end('<h1>Hola viva Express</h1>')
	 	res.sendFile(__dirname + '/express.html')
})
	.get('/artisteos',(req,res) =>{
	  	//res.send('<h1>Pagina artística para cosas del artisteo</h1>')
	  	res.redirect(301,'https://google.es')
	})
	.get('/json',(req,res)=>{
		res.json({
				name:"franchu",
				edad:42,
				twitter:"@temeto"
			})
	})
	.get('/render',(req,res)=>{
		
	})

	.listen(3000)

console.log('Inicio de express en el puerto 3000 '+__dirname)