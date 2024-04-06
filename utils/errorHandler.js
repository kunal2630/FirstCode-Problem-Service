const BaseError = require("../errors/BaseError");
const {StatusCodes}=require('http-status-codes');

function errorHandler(err,req,res,next){

    if(err instanceof BaseError){

        res.status(err.statusCode).json({
            success:false,
            message:err.message,
            error:err.details,
            data:{}

        })
    }
    else{
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:'Something Went Wrong',
            error:err,
            data:{}
        })
    }
}

module.exports=errorHandler;