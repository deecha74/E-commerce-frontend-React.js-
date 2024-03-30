import React from 'react'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import './slider.css'
import './trend.css'

const Slider = () => {
    return (
        <>
            <div className='flex flex-row gap-2 m-4'>
                <div className='h-svh w-1/3 bg-slate-300 rounded-md p-4 main-1'>
                    <div className=' flex flex-row items-center justify-between'>
                        <div>
                            <h1 className='text-3xl font-bold'>Hoody Day !</h1>
                            <h1 className='mt-4 hover:text-orange-700 text-orange-600 text xl font-bold flex flex-row hover:translate-x-2 transition-all ease-in-out duration-150 items-center text-center justify-start'><a href="">Shop Hoody </a>
                                <IoIosArrowForward className=' translate-y-[3px]  text-2xl' />
                            </h1>
                        </div>
                        <div className='flex items-center justify-between gap-2 mt-2 '>
                            <FaArrowAltCircleLeft className='h-7 w-7 bg-slate-500 shadow-md hover:text-orange-400 outline-none hover:bg-white rounded-full  text-white transition-all ease-in-out duration-200 active:scale-95' />
                            <FaArrowAltCircleRight className='h-7 w-7 bg-slate-500 shadow-md hover:text-orange-400 hover:bg-white rounded-full  text-white transition-all ease-in-out duration-200 active:scale-95' />

                        </div>
                    </div>

                </div>
                <div className='h-svh w-2/3 bg-slate-300 rounded-md grid grid-cols-3'>



                </div>

            </div>
        </>
    )
}

export default Slider