import {makeAutoObservable} from 'mobx'

export default class BasketStore {
    constructor() {
        this._basket = []
        // this.sumBasket = 0
        makeAutoObservable(this)
    }

    setBaskets(basket) {
        this._basket = basket
    }

    setQuantity(itemId, size, quantity){
        this._basket.forEach( (el, index) => {
            if (el.item.id === itemId){
                if (el.size === size){
                    this._basket[index].quantity = quantity
                }
            }
        })
    }

    setSumBasket(){
        // Массив итоговых цен товаров
        const itemBasketSum = this._basket?.map( el => el.quantity * el.item.price )
        // Итоговая цена корзины
        const basketSum = itemBasketSum.reduce(
            (sum, el) => sum + el,
            0
        )
        return basketSum
    }

    deleteItemFromBasket(id, size) {
        this._basket.forEach( (el, index) => {
            if (el.item.id === id){
                if (el.size === size){
                    this._basket.splice(index, 1)
                }
            }
        })
    }

    get basket() {
        return this._basket
    }
}