import React, { useContext, useState } from 'react'
import {Context} from '../index'
import { NavLink } from 'react-router-dom'
import { ACCOUNT_ROUTE, ADMIN_ROUTE, BASKET_ROUTE, SHOP_ROUTE } from '../utils/consts'
import {observer} from 'mobx-react-lite'
import ModalLog from './modals/ModalLog'

import imageAccount from '../img/account.svg'
import imageBasket from '../img/basket.svg'

const NavBar = observer(() => {
    // Данные пользователя
    const {user} = useContext(Context)
    // Открыть|закрыть модальное окно auth
    const [ModalLogActive, setModalLogActive] = useState(false)
    return (
        <>
        <div className='header'>
            {(user._user.role === 'ADMIN')?
                <NavLink to={ADMIN_ROUTE}>
                    <button className="button button-admin">админ панель</button>
                </NavLink>
                :
                <div className='empty'></div>
            }
            <NavLink to={SHOP_ROUTE}>
                <span className='logo'>RSW</span>
            </NavLink>
            <div className='navbar'>
                { user.isAuth ?
                <NavLink to={ACCOUNT_ROUTE + "/" + user._user.id}>
                <button><img className='navbar__account' src={imageAccount} alt="account"></img></button>
                </NavLink>
                :
                <button onClick={() => setModalLogActive(true)}><img className='navbar__account' src={imageAccount} alt="account"></img></button>
                }
                <NavLink to={BASKET_ROUTE + "/" + user._user.id}>
                    <img className='navbar__basket' src={imageBasket} alt="basket"></img>
                </NavLink>
            </div>
        </div>
        <ModalLog active={ModalLogActive} setActive={setModalLogActive}></ModalLog>
        </>
    )
})

export default NavBar