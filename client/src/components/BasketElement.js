import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ITEM_ROUTE } from '../utils/consts'
import { changeQuantity, deleteFromBasket } from '../http/basketAPI'
import { Context } from '../index'

import imagePlus from '../img/plus.svg'
import imageMinus from '../img/minus.svg'
import imageTrash from '../img/trash.svg'

const BasketElement = ({basketItem}) => {
    const {basket} = useContext(Context)
    const navigate = useNavigate()
    const {id} = useParams()

    // Количество одного товара
    const [quantity, setQuantity] = useState(basketItem.quantity)
    // Фикс неправильной инициализация количества (не понял почему)
    if (quantity !== basketItem.quantity) {
        setQuantity(basketItem.quantity)
    }
    // Прибавить количество товара
    function quantityPlus(quantity){
        // Запрос на сервер на изменение
        changeQuantity(basketItem, quantity + 1)
        // Изменение стейта на странице
        setQuantity(quantity + 1)
        // Изменение стора
        basket.setQuantity(basketItem.itemId, basketItem.size, quantity + 1)
    }
    // Убивать количесвто товара
    function quantityMinus(quantity){
        // Если количество меньше двух, и нужно его убавить, то отправляем запрос на сервер на удаление предмета
        if (quantity < 2){
            deleteItem()
        } else {
            // Запрос на сервер на изменение
            changeQuantity(basketItem, quantity - 1)
            // Изменение стейта на странице
            setQuantity(quantity - 1)
            // Изменение стора
            basket.setQuantity(basketItem.itemId, basketItem.size, quantity - 1)
        }
    }

    // Удаление из корзины
    function deleteItem(){
        // Запрос серверу на удаление предмета из корзины
        deleteFromBasket(id, [basketItem.item.id, basketItem.size])
        // Удаление предмета из стора
        basket.deleteItemFromBasket(basketItem.item.id, basketItem.size)
    }
 return (
        <div className="basket__item">
            <div className="basket__img">
                <img  className="img-basket" src={process.env.REACT_APP_API_URL + basketItem.item.img} alt="item" onClick={() => navigate(ITEM_ROUTE + "/" + basketItem.item.id)}></img>
            </div>
            <div className="basket__info">
                <div className="info__control">
                    <div className="info__name info-el">
                        {basketItem.item.name}
                    </div>
                    <div className="info__container">
                        <button className='button-basket' onClick={() => quantityMinus(quantity)}><img className="info-el" src={imageMinus} alt="minus"></img></button>
                        <div className="info__quantity info-el">
                            {quantity}
                        </div>
                        <button className='button-basket' onClick={() => quantityPlus(quantity)}><img className="info-el" src={imagePlus} alt="plus"></img></button>
                        <div className="info__price info-el">
                            {basketItem.item.price * quantity} ₽
                        </div>
                        <button className='button-basket' onClick={() => deleteItem()}><img className="info-el" src={imageTrash} alt="trash"></img></button>
                    </div>
                </div>
                <div className="info__size info-el">
                    size: {basketItem.size}
                </div>
            </div>
        </div>
)
}

export default BasketElement