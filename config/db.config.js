const mongoose = require("mongoose");
const { MONGO_URI } = require("./server.config");

async function connectToDB() {
	try {
		await mongoose.connect(MONGO_URI);
	} catch (error) {
		console.log("Not able to connect to DB Server");
		console.log(error);
	}
}

module.exports = connectToDB;
