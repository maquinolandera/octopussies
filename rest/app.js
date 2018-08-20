

var express = require('express'),
	
	favicon = require('serve-favicon'),
	bodyParser = require('body-parser'),
	jade = require('jade'),
	morgan = require('morgan'),
	restFul = require('express-method-override')('_method'),
	routes = require('./routes/movie-route'),
	faviconURL = __dirname+'/public/img/favicons.png',
	publicDir = express.static( __dirname+'/public'),
	viewDir =  __dirname+'/views',
	port = (process.env.PORT||3000)
	app = express()

	app
		.set('views',viewDir)
		.set('view engine',jade)
		.set('port',port)

		.use(favicon(faviconURL))
		.use(bodyParser.json())
		.use(bodyParser.urlencoded({extended: false}))
		.use(restFul)
		.use(morgan('dev'))
		.use(publicDir)
		.use(routes)

	module.exports = app



