import {makeAutoObservable} from 'mobx'

export default class ItemStore {
    constructor() {
        this._items = []

        this._selectedYear = {year: 2022}
        makeAutoObservable(this)
    }

    setItems(items) {
        this._items = items
    }
    setSelectedYear(year) {
        this._selectedYear = year
    }


    get items() {
        return this._items
    }
    get selectedYear() {
        return this._selectedYear
    }
}