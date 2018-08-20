'use strict'

var http = require('http'),
	options = {
		host : 'www.indeed.es',
		port : 80,
		path : ''
	},
	htmlCode = ''
	function httpClient(res)
	{
		console.log('el sitio' +options.host+' ha respondido. Código de estado '+res.statusCode)
		res.on('data',function(data){
			htmlCode += data
			console.log(data,data.toString()
				)
		})
	}
	function httpError(err)
	{
		console.log('El sitio web '+ options.host +' no ha respondido.  Código de estado '+err.code+' Error '+err.message)
	}
	function webServer(req,res)
	{	
		res.writeHead(301,{'ContentType':'text/html'})
		res.end(htmlCode)
	}
	//Instancia cliente
	http
		.get(options,httpClient)
		.on('error',httpError)
	//Instancia servidor
	http
		.createServer(webServer)
		.listen(80)
	
	console.log('Servidor abierto en el puerto en localhost:'+options.port)