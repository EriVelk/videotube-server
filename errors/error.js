handleError = {};

handleError.createError = (status, message, name) => {
    const err = new Error();
    err.message = message;
    err.status = status;
    err.name = name;
    return err;    
}

module.exports = handleError;