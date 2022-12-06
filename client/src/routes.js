import Account from "./pages/Account"
import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Basket from "./pages/Basket"
import ItemPage from "./pages/ItemPage"
import Shop from "./pages/Shop"
import { ACCOUNT_ROUTE, ADMIN_ROUTE, BASKET_ROUTE, ITEM_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: ACCOUNT_ROUTE + '/:id',
        Component: Account
    },
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: ITEM_ROUTE + '/:id',
        Component: ItemPage
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]