module.exports = function (app) {
	app.get('/', function(req, res) {
		var user = {
			nome: "Rogerio",
			email: "geriofilho@gmail.com"
		}
		res.json(user);
	});




};

