import React from 'react'
import { NavLink } from 'react-router-dom'
import { FAQ_ROUTE, SHOP_ROUTE } from '../utils/consts'
import {observer} from 'mobx-react-lite'

import imageInstagram from '../img/instagram.svg'
import imageVK from '../img/vk.svg'
import imageTelegram from '../img/telegram.svg'

const NavBar = observer(() => {
    return (
        <div className='footer'>
            <div className='conctacts'>
                <a href='http://www.instagram.com' target="_blank" rel="noreferrer">
                    <img src={imageInstagram}></img>
                </a>
                <a href='http://www.vk.com' target="_blank" rel="noreferrer">
                    <img src={imageVK}></img>
                </a>
                <a href='https://web.telegram.org/k/' target="_blank" rel="noreferrer">
                    <img src={imageTelegram}></img>
                </a>
            </div>
            <div className='faq'>
                <NavLink to={FAQ_ROUTE}>
                    <div className='logo'>FAQ</div>
                </NavLink>
            </div>
        </div>
    )
})

export default NavBar