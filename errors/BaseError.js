//this will act as our base error class and other Error class  will extends  it
class BaseError extends Error {
	constructor(name, statusCode, description, details) {
		super(description);
		this.name = name;
		this.statusCode = statusCode;
		this.details = details;
	}
}

module.exports = BaseError;
