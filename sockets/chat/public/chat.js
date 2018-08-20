(function(d,io,$){
	var io = io()
	$('#chat').on('submit',function(e){
		e.preventDefault()
		io.emit('new message',$('#message-text').val())
		$('#message-text').val(null)
		return false
	})


	io.on('new user',function(newUser){
		alert(newUser.message)

	})
	io.on('user says',function(userSays){
		$('#chat').append('<li>' +userSays+ '</li>')

	})
	io.on('bye bye user',function(user){
		alert(user.message)
	})
})(document,io,jQuery)