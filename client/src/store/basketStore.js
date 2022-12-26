import {makeAutoObservable} from 'mobx'

export default class BasketStore {
    constructor() {
        this._basket = []
        makeAutoObservable(this)
    }

    setBaskets(basket) {
        this._baskets = basket
    }

    get basket() {
        return this._baskets
    }
}