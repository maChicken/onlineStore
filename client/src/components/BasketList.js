import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import {Context} from '../index'
import BasketElement from './BasketElement'

const BasketList = observer(() => {
    const {basket} = useContext(Context)
    return (
        <div className="basket__list">
            {basket.basket.map( (el, index) => {
                return <BasketElement key={index} basketItem={el} />
            })}
            <div>
                Суммма: {basket.setSumBasket()} ₽
            </div>
        </div>
    )
})

export default BasketList