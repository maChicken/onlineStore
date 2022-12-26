const uuid = require('uuid')
const path = require('path')
const {Item, ItemRest} = require('../models/models')
const ApiError = require('../error/ApiError')

class ItemController {
    async create(req, res, next) {
        try{
            const {name, description, composition, price, year, size} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + '.png'
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const item = await Item.create({name, description, composition, price, year, img: fileName})

            if (size) {
                const size1 = JSON.parse(size)
                size1.forEach(i =>
                    ItemRest.create({
                        size: i.size,
                        rest: i.rest,
                        itemId: item.id,
                    })
                )
            }

            return res.json(item)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async delete(req, res){
        const {id} = req.params
        const item = await Item.destroy(
            {where: {id}}
        )
        return res.json('Успешно удалено')
    }

    async getAll(req, res) {
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 1000
        let offset = page * limit - limit

        const items = await Item.findAndCountAll({limit, offset})
        return res.json(items)
    }

    async getOne(req, res) {
        const {id} = req.params
        const item = await Item.findOne(
            {
                where: {id},
                include: [{model: ItemRest, as: 'size'}]
            },
        )
        return res.json(item)
    }
}

module.exports = new ItemController()