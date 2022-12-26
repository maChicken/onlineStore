const uuid = require('uuid')
const path = require('path')
const { Item, BasketItem, Basket } = require("../models/models")

class BasketController {
    async addToBasket(req, res, next) {
        const {userId, itemId , size, quantity} = req.body
        const basket = await BasketItem.create({basketId : userId, itemId : itemId, size: size, quantity: quantity})
        return res.json(basket)
    }

    async removeFromBasket(req, res){

    }

    async getBasket(req, res) {
        const {id} = req.params
        const basket = await BasketItem.findAll(
            {
                where: {basketId: id},
                include: [{model: Item, as: 'item'}]
            }
        )
        return res.json(basket)
    }
}

module.exports = new BasketController()