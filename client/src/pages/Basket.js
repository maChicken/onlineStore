import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '../index'
import BasketList from '../components/BasketList'
import { useParams } from 'react-router-dom'
import { getBasket } from '../http/basketAPI'

const Basket = observer( () => {
    const {basket} = useContext(Context)
    const {id} = useParams()
    getBasket(id).then(data => basket.setBaskets(data))
    return (
        <div className='basket'>
            <BasketList id={id}/>
        </div>
    )
})

export default Basket