import React from 'react'
import './anno.css'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Announcement = () => {
    return (
        <>
            <div className='grid grid-cols-2 items-start justify-between annomain m-2 p-2 gap-3'>

                <div className='h-56 w-full bg-slate-600 rounded-md anno1 flex flex-col items-start  justify-start '>
                    <h1 className=' mx-3'>Hurry up! </h1>
                    <h1 className=' mx-3 text-3xl font-bold'>Limited time offer</h1>
                    <h2 className=' mx-3 text-xl'>Converse Shoes on Sale
                    </h2>
                    <button className='bg-transparent p-2 px-4 mx-5 outline outline-orange-500 hover:bg-orange-500  flex items-center justify-center mt-3 rounded-sm shadow-md text-black active:scale-90 text-xl border-none transition-all ease-in-out duration-200'>Buy Now <MdOutlineKeyboardDoubleArrowRight className='a grid items-center text-2xl hover:text-white hover:border-solid' />
                    </button>
                </div>
                <div className='h-56 w-full bg-slate-600 rounded-md anno2 flex items-center justify-start '>
                    <button className=' ml-10 p-2 px-4 mx-5   bg-orange-500 hover:bg-orange-500  flex items-center justify-center mt-3 rounded-sm shadow-md text-black active:scale-90 text-xl border-none transition-all ease-in-out duration-200'>Buy Now <MdOutlineKeyboardDoubleArrowRight className='a grid items-center text-2xl hover:text-white hover:border-solid' />
                    </button>
                </div>


            </div>

        </>
    )
}

export default Announcement