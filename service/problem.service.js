const { sanitizeProblemStatement } = require("../utils");

class ProblemService {
	// ProblemRepository;   --> as this is used in constructor no need to define it again
	constructor(ProblemRepository) {
		this.ProblemRepository = ProblemRepository;
	}

	async createProblem(problemData) {
		try {
			problemData.description = sanitizeProblemStatement(
				problemData.description
			);
			const problem = await this.ProblemRepository.createProblem(
				problemData
			);
			return problem;
		} catch (error) {
			throw error;
		}
	}

	async getAllProblems() {
		try {
			const problems = await this.ProblemRepository.getAllProblems();
			return problems;
		} catch (error) {
			throw error;
		}
	}

	async getProblem(id) {
		const problem = await this.ProblemRepository.getProblem(id);

		return problem;
	}
}

module.exports = ProblemService;
