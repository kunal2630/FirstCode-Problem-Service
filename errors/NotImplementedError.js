const BaseError = require("./BaseError");
const {StatusCodes}=require('http-status-codes');


class NotImplementedError extends BaseError {
	constructor(methodName) {
        super("NotImplemented", StatusCodes.NOT_IMPLEMENTED, `${methodName} Not Implemented`, {});
    }
}

module.exports = NotImplementedError;
