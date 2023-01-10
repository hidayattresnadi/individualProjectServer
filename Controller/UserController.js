const { User } = require('../models/index')
class UserController {
    static async register(req, res, next) {
        try {
            let { email, userName, password } = req.body
            let data = await User.create({email,userName,password})
            res.status(201).json({ id: data.id, email: data.email })
        } catch (error) {
            next(error)
        }
    }
}
module.exports = UserController