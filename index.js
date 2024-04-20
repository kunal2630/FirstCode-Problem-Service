const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { PORT } = require("./config/server.config");
const apiRouter = require("./routes");
const errorHandler = require("./utils/ErrorHandler");
const connectToDB = require("./config/db.config");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.get("/ping", (req, res) => {
	res.json({ msg: "Problem Service is up" });
});

app.use("/api", apiRouter);

app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`Server started at ${PORT}`);
	connectToDB();
});
