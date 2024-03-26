const express = require("express");
const problemRouter = express.Router();
const {problemController}=require('../../controllers/index')

problemRouter.get("/ping",problemController.pingProblem);

problemRouter.get('/:id', problemController.getProblem);

problemRouter.get('/', problemController.getProblems);

problemRouter.post('/', problemController.addProblem);

problemRouter.delete('/:id', problemController.deleteProblem);

problemRouter.put('/:id', problemController.updateProblem);

module.exports = problemRouter;
