import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Mainpage from './Components/MainPageSetup/Mainpage'
import Errorpage from './Components/Errorpage/Errorpage'
import Layouts from './Components/MainPageSetup/Layouts'
import Trend from './Components/TrendingProduct/Trend'
import ProductPage from './Components/ProductPage/ProductPage'
import ProductDescPage from './Components/ProductPage/ProductDescPage'
import Cart from './Components/Cart/Cart'
import Register from './Components/Register/Register'
import Login from './Components/Register/Login'



const MyRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layouts />}>
                    <Route path='/' element={<Mainpage />} />
                    <Route path='/products' element={<ProductPage />} />
                    <Route path='/productdetails/:productID' element={<ProductDescPage />} />
                    <Route path='cart' element={<Cart />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />












                    <Route path='/*' element={<Errorpage />} />
                </Route>

            </Routes>
        </Router>

    )
}

export default MyRouter