import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './layout.jsx'
import { Home } from '../pages/home.jsx'
import { Orders } from '../pages/orders.jsx'
import { Cart } from '../pages/cart.jsx'
import { Favorites } from '../pages/favorites.jsx'
import { Auth } from '../pages/auth.jsx'
import { Product } from '../pages/product.jsx'
import { NotFound } from '../pages/NotFound.jsx'

export const routes = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        errorElement: <NotFound />,
        children: [
            { index: true, Component: Home },
            { path: 'orders', Component: Orders },
            { path: 'cart', Component: Cart },
            { path: 'favorites', Component: Favorites },
            { path: 'auth', Component: Auth },
            { path: 'products/:productId', Component: Product },
        ]
    }
])