'use strict'
 
var MovieModel = require('../models/movie-model'),

	MovieController = () => {

}
MovieController.getAll = (req,res,next) => {

	MovieModel.getAll((err,rows)=>{

		let locals = {
				title : 'Peliculas',
				data : rows
		}
		
			res.render('index.jade',locals)
	})

}
MovieController.getOne = (req,res,next) => {

}
MovieController.insert = (req,res,next) => {
	let movie = {
		movie_id : req.body.movie_id,
		title : req.body.title,
		release_year : req.body.release_year,
		rating : req.body.rating,
		image : req.body.image

	}
	MovieModel.insert(movie, (err)=>{
		if(err)
		{
			let locals = {
					title : 'Error de consulta BBDD',
					descripcion : 'Error de sintaxis',
					error : err
			}
			res.render('error.jade',locals)
		}else
		{
			res.redirect('/')
		}

	})

}
MovieController.update = (req,res,next) => {

}
MovieController.delete = (req,res,next) => {

}
MovieController.addForm = (req,res,next) => {
	res.render('add-movie.jade')

}
MovieController.error404 = (req,res) => {

	let locals = {
			title:'La url no se encuentra ',
			description:'Error 404',
			
	}
	res.render('error.jade',locals)

}


module.exports = MovieController