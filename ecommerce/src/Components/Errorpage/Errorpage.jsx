import React from 'react'
import { FaHome } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdSupport } from "react-icons/md";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const Errorpage = () => {
    return (
        <>
            <Helmet>
                <title> Error Finding Page </title>
            </Helmet>
            <div className='h-svh w-full p-4 pt-2  bg-white flex flex-col items-center justify-center'>
                <div className='flex text-center flex-col'>
                    <h1 className='text-7xl font-bold text-orange-500'> Error 404</h1>
                    <h2 className='text-4xl mt-3'>We can't seem to find the page you are looking for.</h2>
                </div>
                <div className=' flex flex-row gap-4 mt-14 flex-wrap '>
                    <div className='flex item-center gap-2  text-balance justify-center flex-row shadow-md p-2 bg-white rounded-sm cursor-pointer hover:scale-110  transition-all ease-in-out duration-200'>
                        <div className='flex items-center justify-center text-balance'>
                            <FaHome className='text-4xl animate-pulse text-orange-600' />
                        </div>
                        <div>
                            <Link to="/">
                                <h1 className='text-xl'>Homepage</h1>
                                <h2>Return to Homepage</h2>
                            </Link>
                        </div>


                    </div>
                    <div className='flex item-center gap-2  text-balance justify-center flex-row shadow-md p-2 bg-white rounded-sm cursor-pointer hover:scale-110  transition-all ease-in-out duration-200'>
                        <div className='flex items-center justify-center text-balance'>
                            <CiSearch className='text-4xl animate-pulse text-primary-color' />
                        </div>
                        <div>
                            <h1 className='text-xl'>Search</h1>
                            <h2>Find Products </h2>
                        </div>


                    </div>
                    <div className='flex item-center gap-2  text-balance justify-center flex-row shadow-md p-2 bg-white rounded-sm cursor-pointer hover:scale-110  transition-all ease-in-out duration-200'>
                        <div className='flex items-center justify-center text-balance'>
                            <MdSupport className='text-4xl animate-spin  text-secondary-color' />
                        </div>
                        <div>
                            <h1 className='text-xl'>Help & Support </h1>
                            <h2>Visit Our Help Center</h2>
                        </div>


                    </div>

                </div>

            </div>

        </>
    )
}

export default Errorpage