import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import { authRoutes, publicRoutes  } from '../routes'
import { LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'

const AppRouter = () => {
    const isAuth = false
    return (
        <Routes>
            {isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} />
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} />
            )}
            {/* <Route path='*' element={<Navigate to={SHOP_ROUTE}/>} /> */}
            <Route path='account/*' element={<Navigate to={LOGIN_ROUTE}/>} />
            <Route path='*' element={<Navigate to={SHOP_ROUTE}/>} />
        </Routes>
    )
}

export default AppRouter
