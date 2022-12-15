import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ITEM_ROUTE } from '../utils/consts'

const ItemElement = ({item}) => {
    const navigate = useNavigate()
    return (
        <div className="stuff" onClick={() => navigate(ITEM_ROUTE + "/" + item.id)}>
            <div className="stuff__img">
                <img  className="img-stuff" src={item.img} alt="item"></img>
            </div>
            <div className="stuff__name">{item.name}</div>
            <div className='stuff__coast'>{item.price} ₽</div>
        </div>
    )
}

export default ItemElement