import React from 'react'
import { CartProvider,useCart } from 'react-use-cart'
import ProductDetailPage from '../pages/product/Detail'
import Cart from './Cart'
const App = () => {
    return (
        <CartProvider>
        <div>
            
            <Cart/>
            <ProductDetailPage/>
           
        </div>
        </CartProvider>
    )
}

export default App
