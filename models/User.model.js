const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Users = sequelize.define("Users", {
	firstName: {
		type: DataTypes.STRING,
		allowNull: false,
	},

	lastName: {
		type: DataTypes.STRING,
		allowNull: false,
	},

	email: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			isEmail: true,
		},
	},

	password: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			min: 8,
			max: 255,
		},
	},
});

Users.sync().then((response) => {
	console.log("User synced", response);
});

module.exports = Users;
