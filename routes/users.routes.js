var express = require("express");
const { createUser, getUser } = require("../controllers/users.controller");
var router = express.Router();

/* GET users listing. */
router.post("/", (req, res, next) => {
	createUser(req, res, next);
});
router.get("/:id", (req, res, next) => {
	getUser(req, res, next);
});

module.exports = router;
