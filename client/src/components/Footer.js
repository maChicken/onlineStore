import React from 'react'
import { NavLink } from 'react-router-dom'
import { SHOP_ROUTE } from '../utils/consts'
import {observer} from 'mobx-react-lite'

import imageInstagram from '../img/instagram.svg'
import imageVK from '../img/vk.svg'
import imageTelegram from '../img/telegram.svg'

const NavBar = observer(() => {
    return (
        <div class='footer'>
            <div class='conctacts'>
                <a href='http://www.instagram.com' target="_blank">
                    <img src={imageInstagram}></img>
                </a>
                <a href='http://www.vk.com' target="_blank">
                    <img src={imageVK}></img>
                </a>
                <a href='https://web.telegram.org/k/' target="_blank">
                    <img src={imageTelegram}></img>
                </a>
            </div>
            <div class='faq'><NavLink to={SHOP_ROUTE}><div class='logo'>FAQ</div></NavLink></div>
        </div>
    )
})

export default NavBar