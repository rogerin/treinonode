module.exports = function (app) {

	var user = app.controllers.user;


	app.get('/users', user.usuarios);
	app.post('/user', user.cadastrar);


};

