import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';
import { TailSpin } from 'react-loader-spinner';
const ProductDescPage = () => {
    const [products, setProducts] = useState({})
    const [loading, SetLoading] = useState(true)
    const params = useParams()
    const id = params.productID

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
                setProducts(response.data)
                SetLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        setTimeout(() => {
            fetchData()

        }, 100)




    }, []);

    const favIcon = (url) => {
        document.querySelector('link[rel="icon"]').href = url;

    }
    favIcon('src/assets/02.jpg')





    const addToCart = () => {
        //fetching item from cart 
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
        const productData = {
            id: products.id,
            title: products.title,
            price: products.price,
            image: products.image,
            category: products.category,
            quantity: 1
        }
        //checking items if exist  in localstorage
        const existingItems = cartItems.find(item => item.id === products.id)
        if (existingItems) {
            toast.error('Product is Already Added !')
        }
        else {
            cartItems.push(productData)
            localStorage.setItem('cartItems', JSON.stringify(cartItems))
            toast.success(`${productData.title} Is Added To cart `)
        }

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
                    <Helmet>
                        <title>{products.title}</title>
                    </Helmet>
                    <ToastContainer them='colored' position='top-center' />


                    <div className="bg-gray-100 dark:bg-gray-800 py-8">
                        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className='flex items-center bg-primary-color p-4 justify-center'>
                                <h2 className="text-2xl hover:text-orange-600 cursor-pointer transition-all ease-in-out duration-100 text-white font-bold  dark:text-white mb-2">{products.title}</h2>
                            </div>

                            <div className="flex flex-col md:flex-row -mx-4">
                                <div className="md:flex-1 px-4">
                                    <div className="h-[460px] rounded-lg bg-white dark:bg-gray-700 mb-4">
                                        <img className="w-full h-full object-contain" src={products.image} alt="Product Image" />
                                    </div>
                                    <div className="flex -mx-2 mb-4">
                                        <div className="w-1/2 px-2">
                                            <button className="w-full  transition-all ease-in-out duration-150 bg-orange-600 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-orange-400  active:scale-95" onClick={addToCart}>Add to Cart</button>
                                        </div>
                                        <div className="w-1/2 px-2">
                                            <button className="w-full  transition-all ease-in-out duration-150 bg-primary-color dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-secondary-color  active:scale-95">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:flex-1 px-4">
                                    <h2 className="text-2xl hover:text-orange-600 cursor-pointer transition-all ease-in-out duration-100 font-bold text-gray-800 dark:text-white mb-2">{products.title}</h2>

                                    <div className="flex mb-4">
                                        <div className="mr-4">
                                            <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                                            <span className="text-gray-600 dark:text-gray-300">${products.price}</span>
                                        </div>
                                        <div>
                                            <span className="font-bold text-gray-700 dark:text-gray-300">Category: </span>
                                            <span className="text-gray-600 dark:text-gray-300">{products.category}</span>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <span className="font-bold text-gray-700 dark:text-gray-300">Select Color:</span>
                                        <div className="flex items-center mt-2">
                                            <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                                            <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                                            <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                                            <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <span className="font-bold text-gray-700 dark:text-gray-300">Select Size:</span>
                                        <div className="flex items-center mt-2">
                                            <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">S</button>
                                            <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">M</button>
                                            <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">L</button>
                                            <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XL</button>
                                            <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XXL</button>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                            {products.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </>

            )}
        </>
    )
}

export default ProductDescPage