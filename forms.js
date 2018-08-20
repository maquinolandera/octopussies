'use strict'

var http = require('http').createServer(webServer),
	form = require('fs').readFileSync('form.html'),
	querystring = require('querystring'),
	util = require('util'),
	dataString = ''

function webServer(req,res)
{
	if(req.method == 'GET')
	{
		res.writeHead(200,{'Content-Type':'text/html'})
		res.end(form)
	}
	if(req.method == 'POST')
	{
		req
			.on('data',function(data){
				dataString += data
				
			})
			.on('end',function(){
				var dataObject = querystring.parse(dataString),
				dataJson = util.inspect(dataObject),
				texto =
`Los datos enviados por POST: ${dataString}
 
 Los datos enviados en JSON: ${dataJson}
 `
				console.log(texto)
				res.end(texto)
			})
	}
}
http.listen(80)

console.log('servidor corriendo running serverot')