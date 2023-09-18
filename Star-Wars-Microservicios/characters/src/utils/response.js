
module.exports = async (res, statusCode, data) => {
    res.status(statusCode).json({
        error: false,
        data,
    });



};

