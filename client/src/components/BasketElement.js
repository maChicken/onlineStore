import { observer } from 'mobx-react-lite'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ITEM_ROUTE } from '../utils/consts'

import imagePlus from '../img/plus.svg'
import imageMinus from '../img/minus.svg'
import imageTrash from '../img/trash.svg'

const BasketElement = observer(({item, size, quantity}) => {
    const navigate = useNavigate()
    return (
        <div className="basket__item">
            <div className="basket__img">
                <img  className="img-basket" src={process.env.REACT_APP_API_URL + item.img} alt="item" onClick={() => navigate(ITEM_ROUTE + "/" + item.id)}></img>
            </div>
            <div className="basket__info">
                <div className="info__control">
                    <div className="info__name info-el">
                        {item.name}
                    </div>
                    <div className="info__container">
                    <button onClick={1}><img className="info-el" src={imageMinus} alt="minus"></img></button>
                        <div className="info__quantity info-el">
                            {quantity}
                        </div>
                        <button onClick={1}><img className="info-el" src={imagePlus} alt="plus"></img></button>
                        <div className="info__price info-el">
                            {item.price} ₽
                        </div>
                        <button onClick={1}><img className="info-el" src={imageTrash} alt="trash"></img></button>
                    </div>
                </div>
                <div className="info__size info-el">
                    size: {size}
                </div>
            </div>
        </div>
    )
})

export default BasketElement