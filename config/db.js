const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("promises", "postgres", "lethal", {
	host: "localhost",
	port: 5432,
	dialect: "postgres",
});

function connectDB(req, res, next) {
	sequelize
		.authenticate()
		.then(() => {
			console.log("Connection has been established successfully.");
		})
		.catch((error) => {
			next(error);
			console.error("Unable to connect to the database:", error);
		});
}

module.exports = { sequelize, connectDB };
