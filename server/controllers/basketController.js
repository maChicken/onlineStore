const ApiError = require("../error/ApiError")
const { Item, BasketItem, Basket } = require("../models/models")

class BasketController {
    async addToBasket(req, res, next) {
        try{
            const {userId, itemId , size} = req.body

            async function fixDublicate(quantity){
                await BasketItem.update(
                    {
                        quantity: quantity + 1
                    },
                    {
                        where: {basketId: userId, itemId: itemId, size: size}
                    }
                )
            }

            const basket = await BasketItem.findAll(
                {
                    where: {basketId: userId}
                }
            )

            const dublicateChecker = 0
            basket.map( el => el.dataValues).map( el => {
                if (el.itemId === Number(itemId)){
                    if (el.size === size){
                        fixDublicate(Number(el.quantity))
                        dublicateChecker =+ 1
                    }
                }
            })

            if  (dublicateChecker === 0){
                await BasketItem.create({basketId : userId, itemId : itemId, size: size, quantity: 1})
            }
            return res.json('Добавлено')
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async removeFromBasket(req, res, next){
        try{
            const itemSize = req.body
            const {id} = req.params
            itemSize['basketId'] = id
            console.log(itemSize)
            await BasketItem.destroy(
                {where: itemSize}
            )
            return res.json('Успешно удалено')
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getBasket(req, res, next) {
        try{
            const {id} = req.params
            const basket = await BasketItem.findAll(
                {
                    where: {basketId: id},
                    include: [{model: Item, as: 'item'}]
                }
            )
            return res.json(basket)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async changeQuantity(req, res, next) {
        try{
            const {basketItem, quantity} = req.body
            delete basketItem.item
            await BasketItem.update(
                {
                    quantity: quantity
                },
                {
                    where: basketItem
                }
            )
            return res.json('Количество изменено')
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new BasketController()