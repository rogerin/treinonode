module.exports = function(app){
	
	var mongoose = require('mongoose');

	var UserSchema = mongoose.Schema;


	var user = new UserSchema({
	        nome: String,
	        email: String,
	        senha: String,
	        created_at: {type: Date, default: Date.now}
	});

	return mongoose.model('User', user);
};