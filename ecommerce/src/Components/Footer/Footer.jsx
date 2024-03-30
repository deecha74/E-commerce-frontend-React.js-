import React from 'react'
import './footer.css'
import { HiOutlineMail } from "react-icons/hi";
import { IoRocketSharp } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import { SiFsecure } from "react-icons/si";
import cards from '../../assets/cards-alt.png'
const Footer = () => {
    return (
        <>

            <div className=' w-full p-5 mt-5 pt-10 grid grid-cols-3 footer bg-primary-color'>
                <div>
                    <h1 className='text-xl font-bold cursor-pointer '>Shop departments</h1>
                    <h2 className='text-l transition-all ease-in-out duration-150 text-white hover:text-orange-500 hover:-translate-y-1 cursor-pointer'><link to rel="stylesheet" href="" />Sneakers & Athletic</h2>
                    <h2 className='text-l transition-all ease-in-out duration-150 text-white hover:text-orange-500 hover:-translate-y-1 cursor-pointer'><link to rel="stylesheet" href="" />Sandals</h2>
                    <h2 className='text-l transition-all ease-in-out duration-150 text-white hover:text-orange-500 hover:-translate-y-1 cursor-pointer'><link to rel="stylesheet" href="" />Shorts</h2>
                    <h2 className='text-l transition-all ease-in-out duration-150 text-white hover:text-orange-500 hover:-translate-y-1 cursor-pointer'><link to rel="stylesheet" href="" />Pants</h2>
                    <h2 className='text-l transition-all ease-in-out duration-150 text-white hover:text-orange-500 hover:-translate-y-1 cursor-pointer'><link to rel="stylesheet" href="" />Bag & wallets</h2>
                    <h2 className='text-l transition-all ease-in-out duration-150 text-white hover:text-orange-500 hover:-translate-y-1 cursor-pointer'><link to rel="stylesheet" href="" />Sunglasses </h2>
                    <h2 className='text-l transition-all ease-in-out duration-150 text-white hover:text-orange-500 hover:-translate-y-1 cursor-pointer'><link to rel="stylesheet" href="" />Watches</h2>
                    <h2 className='text-l transition-all ease-in-out duration-150 text-white hover:text-orange-500 hover:-translate-y-1 cursor-pointer'><link to rel="stylesheet" href="" />Swim Wear</h2>

                </div>
                <div>
                    <h1 className='text-xl font-bold cursor-pointer '>Shop departments</h1>
                    <h2 className='text-l transition-all ease-in-out duration-150 text-white hover:text-orange-500 hover:-translate-y-1 cursor-pointer'><link to rel="stylesheet" href="" />Sneakers & Athletic</h2>
                    <h2 className='text-l transition-all ease-in-out duration-150 text-white hover:text-orange-500 hover:-translate-y-1 cursor-pointer'><link to rel="stylesheet" href="" />Sandals</h2>
                    <h2 className='text-l transition-all ease-in-out duration-150 text-white hover:text-orange-500 hover:-translate-y-1 cursor-pointer'><link to rel="stylesheet" href="" />Shorts</h2>
                    <h2 className='text-l transition-all ease-in-out duration-150 text-white hover:text-orange-500 hover:-translate-y-1 cursor-pointer'><link to rel="stylesheet" href="" />Pants</h2>
                    <h2 className='text-l transition-all ease-in-out duration-150 text-white hover:text-orange-500 hover:-translate-y-1 cursor-pointer'><link to rel="stylesheet" href="" />Bag & wallets</h2>
                    <h2 className='text-l transition-all ease-in-out duration-150 text-white hover:text-orange-500 hover:-translate-y-1 cursor-pointer'><link to rel="stylesheet" href="" />Sunglasses </h2>
                    <h2 className='text-l transition-all ease-in-out duration-150 text-white hover:text-orange-500 hover:-translate-y-1 cursor-pointer'><link to rel="stylesheet" href="" />Watches</h2>
                    <h2 className='text-l transition-all ease-in-out duration-150 text-white hover:text-orange-500 hover:-translate-y-1 cursor-pointer'><link to rel="stylesheet" href="" />Swim Wear</h2>

                </div>
                <div>
                    <div className="flex flex-col items-center justify-center   light">
                        <div className="w-full max-w-md bg-secondary-color rounded-lg shadow-md p-6">
                            <h2 className="text-2xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>

                            <form className="flex flex-col">
                                <input placeholder="Enter your email address" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="email" />

                                <button className="bg-gradient-to-r from-orange-800 to-orange-300 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-orange-500 active:scale-95 hover:to-orange-200 transition ease-in-out duration-150" type="submit">Subscribe</button>
                            </form>

                            <div className="flex justify-center mt-4">
                                <a className="text-sm text-white hover:underline" href="/">Privacy Policy</a>
                            </div>
                        </div>
                        <div>
                            <img src={cards} alt="" className=' h-8 cursor-pointer mt-6' />
                        </div>
                    </div>

                </div>





            </div>
            <div className=' bg-secondary-color  p-2 px-4 flex flex-row  items-center justify-between'>
                <div className=' p-2 flex flex-row items-center gap-3 justify-center'>
                    <div>
                        <IoRocketSharp className='text-4xl text-orange-400 hover:scale-105 transition-all ease-in-out duration-200 cursor-pointer' />


                    </div>

                    <div>
                        <h1 className='text-xl font-bold text-gray-300'>Fast and free delivery</h1>
                        <h1>Free delivery for all orders over $200</h1>
                    </div>

                </div>
                <div className=' flex flex-row items-center gap-3 justify-center'>
                    <div>
                        <MdOutlineAttachMoney className='text-4xl text-orange-400 hover:scale-105 transition-all ease-in-out duration-200 cursor-pointer' />


                    </div>

                    <div>
                        <h1 className='text-xl font-bold text-gray-300'> Money back guarantee
                        </h1>
                        <h1>We return money within 30 days</h1>
                    </div>

                </div>
                <div className=' flex flex-row items-center gap-3 justify-center'>
                    <div>
                        <MdSupportAgent className='text-4xl text-orange-400 hover:scale-105 transition-all ease-in-out duration-200 cursor-pointer' />


                    </div>

                    <div>
                        <h1 className='text-xl font-bold text-gray-300'>24/7 customer support</h1>
                        <h1>Friendly 24/7 customer support</h1>
                    </div>

                </div>
                <div className=' flex flex-row items-center gap-3 justify-center'>
                    <div>
                        <SiFsecure className='text-4xl text-orange-400 hover:scale-105 transition-all ease-in-out duration-200 cursor-pointer' />


                    </div>

                    <div>
                        <h1 className='text-xl font-bold text-gray-300'>Secure online payment</h1>
                        <h1>We possess SSL / Secure сertificate</h1>
                    </div>

                </div>




            </div >

            <div className='flex flex-row items-center gap-3 pb-5 bg-secondary-color justify-center'>
                <h1 className='text-sm text-gray-400'>© All rights reserved.</h1>
                <a href="#" className='text-sm text-gray-400'> Made by Deepak Chalise</a>
            </div>
        </>
    )
}

export default Footer