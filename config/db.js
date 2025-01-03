const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE, process.env.DB_USERNAME, process.env.DB_PASS, {
	host: 'localhost',
	dialect: 'postgres'

});

function connectDB() {
	sequelize
		.authenticate()
		.then(() => {
			console.log("Connection has been established successfully.");
		})
		.catch((error) => {
			console.error("Unable to connect to the database:", error);
		});
}

module.exports = { sequelize, connectDB };
