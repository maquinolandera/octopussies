'use strict'
var express = require('express'),
	app = express(),
	http = require('http').createServer(app),
	io = require('socket.io')(http),
	port = process.env.PORT || 3000,
	publicDir = express.static(__dirname+'/public')
	console.log(publicDir)

http.listen(90,()=>{
	console.log('Iniciando express y Socket.io en el puerto %d',port)
})
app
	.use(publicDir)
	.get('/',(req,res)=>{
		res.sendFile(publicDir+'/index.html')
	})


io.on('connection',(socket)=>{
	socket.broadcast.emit('new user',{message:'Ha entrado un nuevo usuario al Chat '})

	socket.on('new message',(message) => {
			io.emit('user says',message)
	})
	socket.on('disconnect',() =>{
		console.log('Ha salido un usuario del chat')
		socket.broadcast.emit('bye bye user',{message : 'Ha salido un usuario del chat'})
	})
})
