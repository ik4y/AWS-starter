const Users = require("../models/User.model");

exports.createUser = async (user) => {
	try {
		const newUser = await Users.create(user);
		return newUser;
	} catch (error) {
		console.error("Error creating user:", error);
		throw error;
	}
};

exports.getUser = async (id) => {
	try {
		const users = await Users.findOne({ where: { id } });
		return users;
	} catch (error) {
		console.error("Error fetching users:", error);
		throw error;
	}
};
