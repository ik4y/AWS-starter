var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var usersRouter = require("./routes/users.routes");
const { connectDB } = require("./config/db");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

connectDB();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res, next) => {
	res.send("API is Breathing...");
});

app.use("/api/v1/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	const env = req.app.get("env");
	res.locals.message = err.message;
	res.locals.error = env === "development" ? err : {};

	// render the error page
	const statusCode = res.statusCode.toString().includes("4") ? 400 : 500;
	res.status(statusCode).json({
		status: statusCode,
		message: err.message,
		stackTrace: err.stack,
	});
});

module.exports = app;
