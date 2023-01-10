const { signToken, comparePassword } = require('../helper')
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
    static async login(request, response, next) {
        try {
            let { email, password } = request.body
            if (!email || !password) {
                throw { name: 'Please fill requirement data' }
            }
            let user = await User.findOne({
                where: {
                    email: email
                }
            })
            if (!user) {
                throw { name: 'invalidCredentials' }
            }
            let comparingPassword =comparePassword(password, user.password)
            if (!comparingPassword) {
                throw { name: 'invalidCredentials' }
            }
            let payload = {
                id: user.id
            }
            let acessToken = signToken(payload)
            let emailUser = user.email
            let userName = user.userName
            let role = user.role
            response.status(200).json({ acessToken, emailUser, role,userName })
        } catch (error) {
            next(error)
        }
    }
}
module.exports = UserController