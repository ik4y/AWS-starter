const { createUser, getUser } = require("../services/users.services");

exports.createUser = async (req, res, next) => {
	createUser(req.body)
		.then((user) => res.status(201).json(user))
		.catch((error) => {
			console.error(error);
			next(new Error(error.message));
		})
		.catch((error) => {
			next(new Error(error));
		});
};

exports.getUser = async (req, res, next) => {
	const { id } = req.params;
	const users = await getUser(id);
	res.json(users);
};
