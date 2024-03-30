import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { TailSpin } from 'react-loader-spinner'
import Card from '../Card/Card'

const ProductPage = () => {
    const [products, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const [limit, setLimit] = useState(12)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products`)
                setProduct(response.data)
                setLoading(false)
            }
            catch (error) {
                console.error(error.message)
            }
        }
        setTimeout(() => {
            fetchProduct()

        }, 1000);

    }, [])
    const increase = () => {
        setLimit
            (limit + 4)
    }

    return (
        <>
            {loading ? (
                <div className='flex items-center justify-center h-svh w-full'>
                    <TailSpin
                        visible={true}
                        height="160"
                        width="160"
                        color="#4fa94d"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </div>
            ) : (
                <>
                    <div className='p-5'>
                        <div className=' grid grid-cols-4  '>
                            {products && products.slice(0, limit).map(product => (
                                <Card data={product} />
                            ))}
                        </div>
                        <div className='my-5'>
                            <div className="container mx-auto px-4">
                                <nav className="flex flex-row flex-nowrap justify-between md:justify-center items-center" aria-label="Pagination">

                                    <a className="flex w-10 h-10 mr-1 justify-center items-center rounded-full border border-gray-200 bg-white dark:bg-gray-800 text-black dark:text-white hover:border-gray-300 dark:hover:border-gray-600"
                                        href="#" title="Previous Page">
                                        <span className="sr-only">Previous Page</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                            stroke="currentColor" className="block w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                        </svg>
                                    </a>

                                    <a className="hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-gray-200 bg-white dark:bg-gray-700 text-black dark:text-white hover:border-gray-300 dark:hover:border-gray-600"
                                        href="#" title="Page 1" >
                                        1
                                    </a>
                                    <a className="hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-gray-200 bg-white dark:bg-gray-700 text-black dark:text-white hover:border-gray-300 dark:hover:border-gray-600"
                                        href="#" title="Page 2" onClick={increase}>
                                        2
                                    </a>
                                    <a className="hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-black dark:border-white dark:bg-black dark:text-white pointer-events-none"
                                        href="#" aria-current="page" title="Page 3">
                                        3
                                    </a>
                                    <a className="hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-gray-200 bg-white dark:bg-gray-700 text-black dark:text-white hover:border-gray-300 dark:hover:border-gray-600"
                                        href="#" title="Page 4">
                                        4
                                    </a>
                                    <a className="hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-gray-200 bg-white dark:bg-gray-700 text-black dark:text-white hover:border-gray-300 dark:hover:border-gray-600"
                                        href="#" title="Page 5">
                                        5
                                    </a>

                                    <a className="flex w-10 h-10 ml-1 justify-center items-center rounded-full border border-gray-200 bg-white dark:bg-gray-800 text-black dark:text-white hover:border-gray-300 dark:hover:border-gray-600"
                                        href="#" title="Next Page">
                                        <span className="sr-only">Next Page</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                            stroke="currentColor" className="block w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </a>
                                </nav>
                            </div>


                        </div></div>
                </>



            )}
        </>
    )
}

export default ProductPage