import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import {Context} from '../index'
import ItemElement from '../components/ItemElement'

const ItemList = observer( () => {
    const {item} = useContext(Context)
    return (
        <div className="list__stuff">
            {item.items.map( el => {
                if(el.year === item.selectedYear.year) {
                    return <ItemElement key={el.id} item={el}/>
// eslint-disable-next-line
                } return
            }
            )}
        </div>
    )
})

export default ItemList