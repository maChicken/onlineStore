import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import {Context} from '../index'
import { SHOP_ROUTE } from '../utils/consts'

const Account = () => {
    const {user} = useContext(Context)
    const logOut = () =>{
        user.setUser({})
        user.setIsAuth(false)
    }
    return (
        <div className="account">
            <NavLink to={SHOP_ROUTE}><button className="button" onClick={() => logOut()}>выйти</button></NavLink>
        </div>
    )
}

export default Account