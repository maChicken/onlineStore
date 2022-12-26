import React, { useContext, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import {useParams} from 'react-router-dom'
import { fetchOneItem } from '../http/itemAPI'
import { Context } from '../index'
import { addToBasket } from '../http/basketAPI'

const ItemPage = observer(() => {
    const {user} = useContext(Context)
    const [item, setItem] = useState({size: []})
    const {id} = useParams()
    useEffect( () => {
        fetchOneItem(id).then(data => setItem(data))
    })
    // Выбор размера
    const [size1, setSize] = useState('')
    const allRest = item.size.map( (elem) => elem.rest === 0 ? elem = 0 : elem.size ).filter(Boolean)
    let listRest = allRest.map((el, index) =>
        <button type="button"
            className={size1 === el ? "size active" : "size"} key={index} onClick={() => {
                setSize(el)
            }
        }
        >
            {el}
        </button>
    )

    const addItem = () => {
        const formData = new FormData()
        formData.append('itemId', id)
        formData.append('userId', user.user.id)
        formData.append('size', size1)
        formData.append('quantity', 1)
        addToBasket(formData)
    }

    return (
        <div className="item">
            <div className="item__img">
                <img className="img-item" src={process.env.REACT_APP_API_URL + item.img} alt="item"></img>
            </div>
            <div className="item__info">
                <div className="item__title">
                    <div className="item__name">
                        {item.name}
                    </div>
                    <div className="item__coast">
                        {item.price} ₽
                    </div>
                </div>
                <div className="item__description">
                    {item.description}
                </div>
                <div className="item__composition">
                    {item.composition}
                </div >
                <form className="item__sizeselector">
                    {listRest}
                    { (user._user.role) &&
                    <button className="button button-item" type="button" onClick={addItem}>
                        в корзину
                    </button>
                    }
                </form>
            </div>
        </div>
    )
})

export default ItemPage