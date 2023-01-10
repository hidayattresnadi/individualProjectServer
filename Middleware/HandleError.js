function errorHandler(err, req, res, next) {
    let status = 500
    let msg = 'Internal Server Error'
    switch (err.name) {
        case "SequelizeValidationError":
            status = 400
            let validate = ''
            err.errors.forEach(element => {
                validate = element.message
            });
            msg = validate
            break;
        case "SequelizeUniqueConstraintError":
            status = 400
            let validateerr
            err.errors.forEach(element => {
                validateerr = element.message
            })
            msg = validateerr
            break;
        default:
            break;
    }
    res.status(status).json({ message: msg })
}
module.exports = { errorHandler }