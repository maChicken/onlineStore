import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import {Context} from '../index'
import ItemElement from '../components/ItemElement'

const ItemList = observer( () => {
    const {item} = useContext(Context)
    return (
        <div className="list__stuff">
            {item.items.map( item=>
                <ItemElement key={item.id} item={item}/>
            )}
        </div>
    )
})

export default ItemList