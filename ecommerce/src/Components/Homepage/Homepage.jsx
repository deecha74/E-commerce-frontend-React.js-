import React from 'react'
import './homepage.css'
import bg from '../../assets/02.jpg'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import men from '../../assets/cat-sm01.jpg'
import women from '../../assets/cat-sm02.jpg'
import childern from '../../assets/cat-sm03.jpg'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
const Homepage = () => {
    const favIcon = (url) => {
        document.querySelector('link[rel="icon"]').href = url;

    }
    favIcon('src/assets/02.jpg')

    return (
        <>
            <Helmet>Bismure </Helmet>
            <div className="flex flex-row homepage  bg-primary-color ">
                <div className="w-1/2 bg-transparent grid content-center   pl-20">
                    <div className='hover:-translate-y-2 transition-all ease-in-out duration-200'>
                        <h1 className='text-xl text-white items-start'>Hello Summer <span className='text-orange-600'>!</span></h1>
                        <h2 className='text-3xl transition-all ease-in-out  duration-150 text-white font-bold hover:text-orange-400 '>Huge Summer Collection ! </h2>
                        <h2 className='text-xl text-white '>Swimwear , Tops , Shorts ... </h2>

                        <button className='bg-orange-400 p-2 px-4 hover:bg-orange-300  flex items-center justify-center mt-3 rounded-xl shadow-md text-white active:scale-90 text-xl border-none transition-all ease-in-out duration-200'>Shop Now <MdOutlineKeyboardDoubleArrowRight className='a grid items-center text-2xl hover:border-white hover:border-solid' />
                        </button>
                    </div>

                </div>
                <div className=""></div>
            </div>
            <div className="mx-12 p-5 flex items-center justify-stretch gap-4  relative -top-28 rounded-md shadow-md bg-white w-[60%] overflow-hidden">
                <div className="card transition-all ease-in-out duration-200 hover:shadow-lg cursor-pointer  hover:scale-105 h-74  flex flex-col items-center justify-center   w-full  overflow-hidden bg-white rounded-md">
                    <img src={men} alt="" className='mt-4 mx-3 h-[70%] rounded-3xl' />
                    <h1 className='  text-lg font-bold   font-serif mt-3'>Men</h1>
                </div>
                <div className="card  transition-all ease-in-out duration-200 hover:shadow-lg cursor-pointer hover:scale-105 h-74  flex flex-col items-center justify-center   w-full  overflow-hidden bg-white rounded-md">
                    <img src={women} alt="" className='mt-4 mx-3 h-[70%] rounded-3xl' />
                    <h1 className='  text-lg font-bold   font-serif mt-3'>Women</h1>
                </div>
                <div className="card  transition-all ease-in-out duration-200 hover:shadow-lg cursor-pointer hover:scale-105 h-74  flex flex-col items-center justify-center   w-full  overflow-hidden bg-white rounded-md">
                    <img src={childern} alt="" className='mt-4 mx-3 h-[70%] rounded-3xl' />
                    <h1 className='  text-lg font-bold   font-serif mt-3'>Childern</h1>
                </div>




            </div>

        </>
    )
}

export default Homepage