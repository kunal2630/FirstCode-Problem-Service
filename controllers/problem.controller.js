const { StatusCodes } = require("http-status-codes");
const { NotImplemented } = require("../errors/index");
const { ProblemService } = require("../service");
const { ProblemRepository } = require("../repository");

const problemService = new ProblemService(new ProblemRepository());

const pingProblem = (req, res, next) => {
	res.json({ msg: "Problem controller is UP" });
};

const addProblem = async (req, res, next) => {
	try {
		const problem = await problemService.createProblem(req.body);
		return res.status(StatusCodes.CREATED).json({
			success: true,
			mesage: "Successfully created a new problem",
			error: {},
			data: problem,
		});
	} catch (error) {
		next(error);
	}
};

const getProblem = async (req, res, next) => {
	try {
		const { id } = req.params;
		const problem = await problemService.getProblem(id);

		return res.status(StatusCodes.OK).json({
			success: true,
			message: `Successfully fetched problem with id: ${id} `,
			error: {},
			data: problem,
		});
	} catch (error) {
		next(error);
	}
};
const getAllProblems = async (req, res, next) => {
	try {
		const problems = await problemService.getAllProblems();

		return res.status(StatusCodes.OK).json({
			success: true,
			message: "Successfully fetched all problems",
			error: {},
			data: problems,
		});
	} catch (error) {
		next(error);
	}
};
const deleteProblem = (req, res, next) => {
	try {
		throw new NotImplemented("Delete Problem");
	} catch (error) {
		next(error);
	}
};
const updateProblem = (req, res, next) => {
	try {
		throw new NotImplemented("Update Problem");
	} catch (error) {
		next(error);
	}
};

module.exports = {
	pingProblem,
	addProblem,
	getProblem,
	getAllProblems,
	deleteProblem,
	updateProblem,
};
