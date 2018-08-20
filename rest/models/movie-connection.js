'use strict'

var mysql = require('mysql'),
	conf = require('./db-conf'),
	dbOptions =
	 {
		host : 'localhost',
		port : 3306,
		user : 'root',
		password : '',
		database : 'movies'
	},
	myConn = mysql.createConnection(dbOptions)
	

module.exports = myConn