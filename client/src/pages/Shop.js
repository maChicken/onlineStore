import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import YearSelector from '../components/YearSelector'
import ItemList from '../components/ItemList'
import {fetchItems} from '../http/itemAPI'
import { Context } from '../index'

const Shop = observer( () => {
    const {item} = useContext(Context)
    fetchItems().then(data => item.setItems(data.rows))
    return (
        <div className="shop">
            <YearSelector />
            <ItemList />
        </div>
    )
})

export default Shop