'use strict'

var movies = require('../models/movies'),
	express = require('express'),
	router = express.Router()


function error404(req,res,next)
{
	let error = new Error(),
	  locals = {
		title:'Error 404',
		description: 'Recurso no encontrado',
		error : error
	}
	//error.status = 404
	res.render('error.jade',locals)
	next()
}
router.use(movies)
router.get('/',(req,res,next)=>{
		
		req.getConnection((err,movies)=>{
			movies.query('SELECT * FROM movie', (err, rows)=>{
				let locals = {
					title:'Lista Peliculas',
					data : rows
				}
				res.render('index.jade',locals)
			})

		})
		//next()
	})
router.get('/cagallon.html',(req,res)=>{

			let locals = {
				title:'Lista de cagones',
				data:'el pansiquismo, intenta comprender la conciencia del universo entre el microespacio que hay entre las neuronas de nuestro cerebro'

			}
			res.render('index.jade',locals)
})
		.get('/agregar',(req,res,next)=>{
			res.render('add-movie.jade',{title: 'Agregar Pelicula'})
})
		.post('/',(req,res)=>{
			req.getConnection((err,movies) =>{
				let movie = {
				movie_id : req.body.movie_id,
				title : req.body.title,
				release_year : req.body.year,
				rating: req.body.rating,
				image: req.body.image

			}
			console.log(movies)
			movies.query('INSERT INTO movie SET ?',movie,(err,rows)=>{
				return(err) ? res.redirect('/agregar') : res.redirect('/')
			})
		})

	})

	.get('/editar/:movie_id',(req,res)=>{
		let movie_id = req.params.movie_id
		req.getConnection((err,movies)=>{
			movies.query('SELECT * FROM movie WHERE movie_id=?',movie_id,(err,rows)=>{
				if(err)
				{
					throw(err)
				}else
				{
					let locals = {
						title:'actualización de datos',
						data: rows
					}
					res.render('edit_movie.jade',locals)
				}
			})
		})	 
				
		})
		
	
router.use(error404)
	//router.get('/jade',jade)
	//router.get('/error',error404)

module.exports = router