import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '../index'
import {getBasket} from '../http/basketAPI'
import { useParams } from 'react-router-dom'
import BasketElement from '../components/BasketElement'

const Basket = observer(() => {
    const {basket} = useContext(Context)
    const {id} = useParams()
    getBasket(id).then(data => basket.setBaskets(data))
    const sizes = basket._baskets?.map( el => el.size )
    const quantitys = basket._baskets?.map( el => el.quantity )
    const items = basket._baskets?.map( el => el.item )
    return (
        <div className="basket">
            <div className="basket__list">
                {items?.map( (el, index) => {
                    return <BasketElement key={el.id} item={el} size={sizes[index]} quantity={quantitys[index]} />
                    }
                )}
            </div>
        </div>
    )
})

export default Basket