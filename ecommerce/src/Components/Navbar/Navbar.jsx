import React from 'react'
import './navbar.css'
import { MdFacebook } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { FaShippingFast } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Headroom from 'react-headroom';
import { CiShoppingCart } from "react-icons/ci";
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [items, setItems] = useState([])


    useEffect(() => {
        const data = localStorage.getItem('cartItems');
        const cartData = JSON.parse(data);//this convert string to object 

        setItems(cartData);



    }, [])
    // const [navbar, setNavbar] = useState(false);
    // const changeBg = () => {


    //     if (window.scrollY >= 70) {
    //         setNavbar(true);
    //     }

    //     else {
    //         setNavbar(false);
    //     }
    // }
    // useEffect(() => {
    //     window.addEventListener('scroll', changeBg)

    //     return () => {
    //         window.addEventListener('scroll', changeBg)
    //     }
    // }, [])

    return (
        <>
            <div className='flex text-md font-bold text-gray-400 font-primary items-center justify-between shadow-sm  px-4 py-3 duration-200 ease-out transition-all bg-secondary-color '>
                <div className='flex gap-4'>
                    <div className='transition-all ease-out duration-300 hover:text-gray-50 hover:-translate-y-1 hover:underline'><a href="#">haramidc@gmail.com</a></div>
                    <div className='transition-all ease-out duration-300 hover:text-gray-50  hover:-translate-y-1 flex items-center justify-center '><IoMdCall /><a href="#">+1 5589 55488 55</a></div>


                </div>
                <h1 className='transition-all flex items-center justify-center gap-y-20 ease-out duration-300 hover:text-gray-50 a hover:-translate-y-1 cursor-pointer'> <FaShippingFast className='text-white mx-2 b transition-all ease-out duration-1000' />Free Shipping above $200</h1>
                <div className='flex mr-10 text-md gap-4 '>
                    <div className='transition-all ease-out duration-300 hover:text-gray-50  hover:-translate-y-1 cursor-pointer '><MdFacebook /></div>
                    <div className='transition-all ease-out duration-300 hover:text-gray-50  hover:-translate-y-1  cursor-pointer'><FaSquareXTwitter /></div>
                    <div className='transition-all ease-out duration-300 hover:text-gray-50  hover:-translate-y-1  cursor-pointer'><AiFillInstagram /></div>
                    <div className='transition-all ease-out duration-300 hover:text-gray-50  hover:-translate-y-1  cursor-pointer'><FaLinkedin /></div>

                </div>

            </div>

            <Headroom style={{ top: '0' }}>
                <div className="flex p-2 items-center justify-between  transition-all ease-in-out duration-150 px-5  w-full  bg-primary-color ">
                    <div className="logo ">
                        <h1 className='text-white flex cursor-pointer text-3xl text-start font-primary font-extrabold uppercase'><Link to='/'>Bismure</Link> <span className='text-3xl text-orange-500'>.</span></h1>

                    </div>
                    <div  >
                        <div>
                            <ul className=' flex text-sm font-primary font-bold   uppercase items-end  gap-5 cursor-pointer'>
                                <li className=' text-white hover:text-orange-500 hover:-translate-y-1 duration-150 ease-in-out under'><Link to="/">Home </Link></li>
                                <li className=' text-white hover:text-orange-500 hover:-translate-y-1 duration-150 ease-in-out under shop'><Link to="/products">Shop </Link>
                                    <div className='shopunder  items-center justify-center  '>
                                        Hello I am inside a nav menu</div></li>
                                <li className=' text-white hover:text-orange-500 hover:-translate-y-1 duration-150 ease-in-out under'>Account</li>
                                <li className=' text-white hover:text-orange-500 hover:-translate-y-1 duration-150 ease-in-out under'>Blog</li>
                                <li className=' text-white hover:text-orange-500 hover:-translate-y-1 duration-150 ease-in-out under'>Contact</li>
                            </ul>
                        </div>
                    </div>
                    <div className=' flex items-center flex-row relative'>
                        <h1 className=' shadow-sm  pr-4 font-bold text-3xl text-white active:scale-95  '><Link to='/cart'><CiShoppingCart />
                        </Link></h1>


                        <button className="button shadow-sm px-5 active:scale-95 bg-orange-400">

                            <p className="text"> <Link to='/login'>Log In</Link> </p>
                        </button>

                    </div>





                </div>

            </Headroom >
            <div className="scroll-watcher"></div>

        </>
    )
}

export default Navbar