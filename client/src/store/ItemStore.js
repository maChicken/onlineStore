import {makeAutoObservable} from 'mobx'

export default class ItemStore {
    constructor() {
        this._items = [
            {id: 5, name: 'First product', img: '0b30c8dc-f03a-46ff-b55f-b1f84fe625ab.jpg', description: 'Ratata', price: 1000, year: 2022},
            {id: 6, name: 'First product', img: '6673a9cd-ab9a-43d2-bfa7-06f3174178b3.jpg', description: 'Ratata', price: 1500, year: 2022},
            {id: 7, name: 'First product', img: 'a191795d-ee5c-41ca-af8f-eacca1bb3bb2.jpg', description: 'Ratata', price: 1500, year: 2021},
            {id: 8, name: 'First product', img: '10b6a769-c857-4215-9f0d-6442967ec9ff.jpg', description: 'Ratata', price: 500, year: 2021},
            {id: 9, name: 'First product', img: '272d5f21-544e-44b4-8d6c-680fedd38abe.jpg', description: 'Ratata', price: 500, year: 2020}
        ]
        makeAutoObservable(this)
    }

    setItems(item) {
        this._items = item
    }


    get item() {
        return this._items
    }
}