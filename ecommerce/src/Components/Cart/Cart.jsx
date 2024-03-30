import React, { Fragment, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { RxCross1 } from "react-icons/rx";
import { LuShoppingCart } from "react-icons/lu";

import { ToastContainer, toast } from 'react-toastify';

const Cart = () => {
    const [items, setItems] = useState([])


    useEffect(() => {
        const data = localStorage.getItem('cartItems');
        const cartData = JSON.parse(data);//this convert string to object 

        setItems(cartData);



    }, [])
    //to decrease when clicked on minus sign
    const decreaseQty = id => {
        const updateItems = items.map(item => {
            if (item.id === id && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 }
            }
            return item

        })
        setItems(updateItems)
        localStorage.setItem('cartItems', JSON.stringify(updateItems))


    }

    const increaseQty = id => {
        const updateItems = items.map(item => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 }
            }
            return item
        })
        setItems(updateItems)
        localStorage.setItem('cartItems', JSON.stringify(updateItems))
    }

    //Removing From the cart 
    const removeItemCart = (id, name) => {
        const confirm = window.confirm(`Are You sure Deleting ${name} From Cart !`)
        if (confirm) {
            const filterCart = items.filter(item => item.id !== id)
            localStorage.setItem('cartItems', JSON.stringify(filterCart))
            setItems(filterCart)
            toast.success(`${name} Is Removed From Cart `)
        }
        else {

        }
    }
    return (
        <>
            <Helmet>
                <title>Cart </title>
            </Helmet>
            <ToastContainer them='colored' position='top-center' />

            <div className='flex items-center justify-center '>
                <div className=' flex items-center justify-center rounded-md p-3 text-3xl bg-white shadow-sm w-1/3 font-primary cursor-pointer hover:text-4xl transition-all ease-in-out duration-150 h-16 mt-2 shadow-black'>Cart Items</div>
            </div>



            <div>
                {items.length === 0 ? (
                    <div className='flex flex-col items-center justify-center font-mono font-3xl'>
                        <div className=' mt-6'><LuShoppingCart className='text-[300px] text-red-700 animate-pulse' />
                        </div>
                        <div>
                            <h1 className='text-[30px] text-primary-color '>Looks Like you have Nothing in Cart !</h1>
                        </div>

                    </div>

                ) : (
                    <div>
                        <div className='flex flex-row   gap-20 justify-center p-2'>
                            <div className=' ' >
                                {items.map(item => (
                                    <Fragment  >
                                        <div className='flex gap-2 w-full flex-row mt-3  items-center  '>
                                            <div className=' h-max mx-7 flex flex-row bg-gray-100 rounded-md shadow-sm  '>
                                                <div className='h-32 w-32 m-2 p-3 rounded-md  bg-slate-50 flex items-center justify-center'>
                                                    <img src={item.image} alt="Image Not Found" className='h-32 rounded-md w-32   ' />
                                                </div>
                                                <div className=' h-32 w-96 rounded-md bg-slate-50 p-3 m-2'>
                                                    <h1><strong>{item.title}</strong> </h1>
                                                    <h2>Price : ${item.price}</h2>
                                                    <h2>Size : xl </h2>

                                                </div>
                                                <div className='flex flex-col items-center justify-center p-3 gap-3'>
                                                    <h1 className='text-2xl text-black font-bold'>Quantity </h1>
                                                    <div className='flex flex-row items-center justify-between'>
                                                        <button className=' p-3 py-1 bg-primary-color rounded-md shadow-lg active:scale-95' onClick={() => decreaseQty(item.id)}>-</button> &nbsp;
                                                        <h1 id='place' className=' p-3 py-1 bg-gray-400 rounded '>{item.quantity}</h1> &nbsp;
                                                        <button className=' p-3 py-1 bg-orange-500 rounded-md shadow-lg active:scale-95' onClick={() => increaseQty(item.id)}>+</button>

                                                    </div>
                                                    <div className='mt-2 hover:text-red-600 cursor-pointer active:scale-90 transition-all ease-in-out duration-150 '>
                                                        <RxCross1 className='' onClick={() => removeItemCart(item.id, item.title)} />

                                                    </div>
                                                </div>



                                            </div>






                                        </div>
                                    </Fragment>
                                ))}


                            </div>
                            <div className=' h-max  flex-col bg-secondary-color rounded-md flex p-3 items-center justify-center shadow-xl '>
                                <div className=' flex items-center justify-center text-2xl  text-white'>Sub Total</div>
                                <h2 className='text-3xl m-1 p-2 text-white font-bold'>122.1</h2>
                                <hr className='  w-full  ' />
                                <div className='flex flex-col relative mt-5'>
                                    <div>
                                        <input type="text" name="" id="" className='h-20 bg-gray-400 text-white w-80 p-3 active:outline-primary-color rou focus:outline-orange-500' />
                                    </div>
                                    <h1 className=' mt-2 p-2 absolute -top-6 right-4 shadow-lg shadow-gray-500 bg-orange-500 rounded-md '>Note</h1>
                                </div>
                                <div>
                                    <button type="submit" className='p-3 text-xl uppercase text-white font-primary active:scale-95 transition-all ease-in-out duration-150 bg-orange-500 mt-5 rounded-sm'>CheckOut</button>
                                </div>

                            </div>

                        </div>
                    </div>
                )}


            </div >







        </>
    )
}

export default Cart