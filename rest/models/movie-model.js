'use strict'

var conn = require('./movie-connection'),

	MovieModel = () => {}
	MovieModel.getAll = (cb) => {
		conn.query('SELECT * FROM movie',cb)

	}
MovieModel.getOne = () => {}
MovieModel.insert = (data,cb) => {
	conn.query('INSERT INTO movie SET ?',data,cb)
}
MovieModel.update = () => {}
MovieModel.delete = () => {}

module.exports = MovieModel