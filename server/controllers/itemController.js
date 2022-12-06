const uuid = require('uuid')
const path = require('path')
const {Item} = require('../models/models')
const ApiError = require('../error/ApiError')

class ItemController {
    async create(req, res, next) {
        try{
            const {name, description, composition, price} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const item = await Item.create({name, description, composition, price, img: fileName})

            return res.json(item)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 12
        let offset = page * limit - limit

        const items = await Item.findAndCountAll({limit, offset})
        return res.json(items)
    }

    async getOne(req, res) {
        const {id} = req.params
        const item = await Item.findOne(
            {where: {id}}
        )
        return res.json(item)
    }
}

module.exports = new ItemController()