import React, { useContext, useState } from 'react'
import {Context} from '../index'
import { NavLink } from 'react-router-dom'
import { BASKET_ROUTE, SHOP_ROUTE } from '../utils/consts'
import {observer} from 'mobx-react-lite'
import ModalLog from './ModalLog'

import imageAccount from '../img/account.svg'
import imageBasket from '../img/basket.svg'

const NavBar = observer(() => {
    // Проверка авторизации пользователя
    const {user} = useContext(Context)
    // Открыть|закрыть модальное окно
    const [ModalActive, setModalActive] = useState(false)
    return (
        <>
        <div className='header'>
            {user.isAuth ?
                <button className='admin__button'>Админ панель</button>
                :
                <div className='empty'></div>
            }
            <NavLink to={SHOP_ROUTE}>
                <span className='logo'>RSW</span>
            </NavLink>
            <div className='navbar'>
                <button onClick={() => setModalActive(true)}><img className='navbar__account' src={imageAccount} alt="account"></img></button>
                <NavLink to={BASKET_ROUTE}>
                    <img className='navbar__basket' src={imageBasket} alt="basket"></img>
                </NavLink>
            </div>
        </div>
        <ModalLog active={ModalActive} setActive={setModalActive}></ModalLog>
        </>
    )
})

export default NavBar