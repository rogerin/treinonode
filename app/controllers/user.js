module.exports = function(app){
	var User	= app.models.user; 

	var UserController = {
		visualizar: function(req,res) {
			/*User.findById(req.params.id, function(err, result){
				if(err) { console.log(err) }
				else {

				}
			});*/

			var user = {
				nome: "maria",
				email: "geriofilho@gmail.com"
			}
			res.json(user);
			
		},

		usuarios: function(req, res){
			User.find(function(err, users){
				res.json(users);
			})
		},

		cadastrar: function(req, res) {

			var user = new User(
				{
					nome: req.body.nome,
					email: req.body.email
				}
			);


			user.save(function(err, user){
				if(err) {
					console.log(err);
				} else {
					res.json(user);
				}	
			});


		}
	};

	return UserController;
}