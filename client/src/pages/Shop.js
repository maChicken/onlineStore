import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import {Context} from '../index'
import YearSelector from '../components/YearSelector'
import ItemList from '../components/ItemList'

const Shop = observer( () => {
    const {item} = useContext(Context)
    return (
        <div className="shop">
            <YearSelector />
            <ItemList />
        </div>
    )
})

export default Shop