import React, { useEffect } from 'react'
import './trend.css'
import { IoMdTrendingUp } from "react-icons/io";

import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useState } from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import ProductPage from '../ProductPage/ProductPage';
const Trend = () => {
    const [products, setProducts] = useState([])
    const [limit, setLimit] = useState(8)

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`)
            .then(res => setProducts(res.data))
            .catch(error => console.error(error))
    }, [])
    const increase = () => {

        setLimit(limit + 4)
    }

    return (
        <>

            <div>
                <div className='flex flex-col  items-center justify-center relative -top-16 mt-0'>
                    <h1 className='text-2xl flex flex-row items-center justify-center gap-3 font-bold '> <IoMdTrendingUp className='hover:scale-110 hover:text-orange-500 transition-all ease-in-out ' />
                        Trending Products</h1>

                </div>
            </div>

            <div className=' grid grid-cols-4  '>
                {products && products.slice(0, limit).map(product => (
                    <Card data={product} />
                ))}
            </div>


            <div className='flex items-center justify-center m-2 mb-4'>
                <button className='bg-transparent p-2 px-4 outline outline-orange-500 hover:bg-orange-500  flex items-center justify-center mt-3 rounded-sm shadow-md text-black active:scale-90 text-xl border-none transition-all ease-in-out duration-200' onClick={increase}>Load More<MdOutlineKeyboardDoubleArrowRight className='a grid items-center text-2xl hover:text-white hover:border-solid' />
                </button>
            </div>




        </>
    )
}

export default Trend