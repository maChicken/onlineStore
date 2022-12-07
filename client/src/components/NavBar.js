import React, { useContext } from 'react'
import {Context} from '../index'
import { NavLink } from 'react-router-dom'
import { ACCOUNT_ROUTE, BASKET_ROUTE, SHOP_ROUTE } from '../utils/consts'
import {observer} from 'mobx-react-lite'

import imageAccount from '../img/account.svg'
import imageBasket from '../img/basket.svg'

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <div class='header'>
            {user.isAuth ?
                <button class='admin__button'>Админ панель</button>
                :
                <div class='empty'></div>
            }
            <NavLink to={SHOP_ROUTE}>
                <span class='logo'>RSW</span>
            </NavLink>
            <div class='navbar'>
                <NavLink to={ACCOUNT_ROUTE}>
                    <img class='navbar__account' src={imageAccount}></img>
                </NavLink>
                <NavLink to={BASKET_ROUTE}>
                    <img class='navbar__basket' src={imageBasket}></img>
                </NavLink>
            </div>
        </div>
    )
})

export default NavBar