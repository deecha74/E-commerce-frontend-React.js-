import React from 'react'
import { CiStar } from "react-icons/ci";
import { AiFillLike } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Card = (props) => {


    return (
        <>
            <div className=''>

                <div className=' z-[1000] transition-all ease-in-out duration-300'>
                    <div className='flex flex-col relative  cardhover hover:-translate-y-1 transition-all ease-in-out duration-500  p-3   '>
                        <div className='h-[358px] w-[300px]  relative  bg-white rounded-md hover:shadow-md hover:shadow-gray-400 main transition-all ease-in-out duration-300 '>
                            <img src={props.data.image} alt="" className=' image rounded-lg p-4 overflow-hidden object-cover items-center h-[241px] ' />
                            <h1 className='text-sm mt-3 px-4 hover:items-center'>{props.data.category}</h1>
                            <h1 className='text-lg line-clamp-2 mt-0 px-4 hover:text-orange-500 transition-all ease-in-out duration-200  font-bold'>{props.data.title}</h1>
                            <h2 className='text-orange-400 px-4 font-bold flex flex-row items-center justify-between cursor-text'> ${props.data.price}
                                <div className='flex flex-row font-bold  px-4'>
                                    <CiStar className=' hover:text-black' />
                                    <CiStar className=' hover:text-black' />
                                    <CiStar className=' hover:text-black' />
                                    <CiStar className=' hover:text-black' />
                                    <CiStar className=' hover:text-black' />

                                </div>
                            </h2>
                            <div className='absolute top-3 flex items-center  justify-center rounded-full hover:shadow-black hover:shadow-md hover:text-orange-500 bg-gray-100 h-6 w-6 right-3 transition-all ease-in-out duration-300 cursor-pointer active:scale-90'>
                                <AiFillLike className='p-1 text-xl' />

                            </div>
                            <div className='  '>
                                <div className=' items-center justify-center mt-3 gap-2 size hidden'>
                                    <h1 className='h-8 w-8  flex items-center justify-center text-xl rounded-md border-2 border-solid border-gray-400 border-opacity-10 cursor-pointer hover:border-orange-400 hover:text-orange-400 transition-all ease-in-out duration-200 '>xs</h1>
                                    <h1 className='h-8 w-8 border-opacity-10  flex items-center justify-center text-xl rounded-md border-2 border-solid border-gray-400 cursor-pointer hover:border-orange-400 hover:text-orange-400 transition-all ease-in-out duration-200 '>xm</h1>
                                    <h1 className='h-8 w-8 border-opacity-10  flex items-center justify-center text-xl rounded-md border-2 border-solid border-gray-400 cursor-pointer hover:border-orange-400 hover:text-orange-400 transition-all ease-in-out duration-200 '>m</h1>
                                    <h1 className='h-8 w-8 border-opacity-10  flex items-center justify-center text-xl rounded-md border-2 border-solid border-gray-400 cursor-pointer hover:border-orange-400 hover:text-orange-400 transition-all ease-in-out duration-200 '>L</h1>
                                </div>

                            </div>
                            <div>
                                <div className=' flex absolute -bottom-6 left-16 items-center   justify-center'>
                                    <button className='  hidden button bg-orange-500 pt-2   active:scale-95 active:bg-orange-300  mx-5 '>Add to Cart</button>

                                </div>
                                <div>
                                    <button className=' absolute -top-5 left-12 w-1/2 hidden button bg-orange-500 pt-2   active:scale-95 active:bg-orange-300  mx-5 '>
                                        <Link to={`/productdetails/${props.data.id}`}> View Details
                                        </Link> </button>

                                </div>
                            </div>



                        </div>


                    </div>

                </div>


            </div >


        </>
    )
}

export default Card