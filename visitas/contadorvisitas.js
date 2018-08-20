

express = require('express'),
app = express(),
session = require('express-session');

app.use(session({secret: 'ssshhhhh'}));
cont = 0
app.get('/',(req,res)=>{
		sess = req.session;

		sess.email = 'd@fdf.com';
		sess.user = 'joyce';

		sess.views = cont;
		res.write('<h1> email '+sess.email+' </h1>')
		res.write('<h2>visitas '+sess.views+' </h2>')
		res.write('<h2>usuario '+sess.user+' </h2>')
		res.end()
		cont++
	})
	.listen(3000)
	console.log('Arrancando servidor jo puti')