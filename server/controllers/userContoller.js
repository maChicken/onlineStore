const {User, Basket} = require('../models/models')
const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const generateJWT = (id, mail, role) => {
    return jwt.sign(
        {id, mail, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        try{
            const {mail, password, role} = req.body
            const candidate = await User.findOne({where: {mail}})
            if (candidate) {
                return next(ApiError.badRequest('Пользователь с таким email уже существует'))
            }
            const hashPassword = await bcrypt.hash(password, 5)
            const user = await User.create({mail, password: hashPassword, role})
            const token = generateJWT(user.id, user.mail, user.role)
            const basket = await Basket.create({userId: user.id,})
            return res.json({token})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async login(req, res, next) {
        const {mail, password} = req.body
        const user = await User.findOne({where: {mail}})
        if (!user){
            return next(ApiError.badRequest('Пользователся с таким email не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword){
            return next(ApiError.badRequest('Неверный пароль'))
        }
        const token = generateJWT(user.id, user.mail, user.role)
        return res.json({token})
    }

    async check(req, res, next) {
        const token = generateJWT(req.user.id, req.user.mail, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController()
