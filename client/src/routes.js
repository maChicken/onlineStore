import Account from "./pages/Account"
import Admin from "./pages/Admin"
import Basket from "./pages/Basket"
import ItemPage from "./pages/ItemPage"
import Shop from "./pages/Shop"
import Faq from "./pages/Faq"
import { ACCOUNT_ROUTE, ADMIN_ROUTE, BASKET_ROUTE, ITEM_ROUTE, SHOP_ROUTE, FAQ_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: ACCOUNT_ROUTE + '/:id',
        Component: Account
    },
    {
        path: BASKET_ROUTE + '/:id',
        Component: Basket
    },
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: ITEM_ROUTE + '/:id',
        Component: ItemPage
    },
    {
        path: FAQ_ROUTE,
        Component: Faq
    }
]