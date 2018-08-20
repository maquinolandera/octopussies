'use strict'
//se instancia la creación del servidor y se asocia a la conexion io con fs leeremos el archivo html
var http = require('http').createServer(server),
	fs = require('fs'),
	io = require('socket.io')(http),
	conexions = 0

//función que nos dará el ok del servidor o error
function server(req,res)
{
	fs.readFile('index.html',(err,data)=>{
		if(err)
		{
			res.writeHead(500,{'Content-Type':'text/html'})
			return res.end('<h1>Error interno del servidor</h1>')
		}else
		{
			res.writeHead(200,{'Content-Type':'text/html'})
			return res.end(data,'utf-8')
		}
	})

}
//Listener del puerto
http.listen(3000)
console.log('Servidor abierto en el puerto 3000 localhost')

//Recurso /handler/manejador de eventos que emitirá al cliente  el mensaje contenido en el objeto data  
io.on('connection',(socket)=>{
	socket.emit('hello',{message : 'Hola Mundo con socket.io'})
//Manejador que recoje el objeto data del cliente
	socket.on('evento2',(data)=>{
		console.log(data.edad)
	})
	conexions++

	console.log('conexiones activas '+conexions)
	//El cliente que emita el evento mandará a la información a las demás conexiones excepto a él mismo
	socket.emit('connect users',{numbers : conexions,names:'Los del Rio '})
	socket.broadcast.emit('connect users',{numbers : conexions,names:'Los del Rio '})
	//Manejador para desconectar la conexión
	socket.on('disconnect',()=>{
		conexions--
		console.log('conexiones Activas '+conexions)
		//dará el valor de las conexiones en cuanto se haya cerrado el cliente, emitirá a los demás las conexiones
		socket.broadcast.emit('connect users',{numbers : conexions,names:'Los del Rio '})

	})

})