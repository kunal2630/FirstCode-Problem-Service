const { StatusCodes } = require("http-status-codes");
const NotImplementedError = require("../errors/NotImplementedError");

const pingProblem = (req, res, next) => {
	res.json({ msg: "Problem controller is UP" });
};

const addProblem = (req, res, next) => {
	try {
		throw new NotImplementedError("Add Problem");
	} catch (error) {
		next(error);
	}
};

const getProblem = (req, res, next) => {
	try {
		throw new NotImplementedError("Get Problem");
	} catch (error) {
		next(error);
	}
};
const getProblems = (req, res, next) => {
	try {
		throw new NotImplementedError("Get All Problem");
	} catch (error) {
		next(error);
	}
};
const deleteProblem = (req, res, next) => {
	try {
		throw new NotImplementedError("Delete Problem");
	} catch (error) {
		next(error);
	}
};
const updateProblem = (req, res, next) => {
	try {
		throw new NotImplementedError("Update Problem");
	} catch (error) {
		next(error);
	}
};

module.exports = {
	pingProblem,
	addProblem,
	getProblem,
	getProblems,
	deleteProblem,
	updateProblem,
};
