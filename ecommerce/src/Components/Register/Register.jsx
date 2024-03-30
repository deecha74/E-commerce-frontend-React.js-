import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import { Helmet } from 'react-helmet';
import { ColorRing } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <>
            <Helmet>
                <title>Register Page </title>
            </Helmet>
            <Formik
                initialValues={{ fname: '', lname: '', email: '', password: '' }}
                validationSchema={Yup.object({
                    fname: Yup.string()
                        .max(20, 'Must be 20 Character or Less ')
                        .required('First Name is Compulsory ! '),

                    lname: Yup.string()
                        .max(20, 'Must be 20 Character or Less ')
                        .required('Last Name is Compulsory ! '),
                    email: Yup.string()
                        .email('Invalid email Format ')
                        .required('Email is mandatory '),

                    password: Yup.string()
                        .matches(/(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$?!])[A-Za-z\d@#$?!]{8,100}/, 'Must Contain One Uppercase , One Lowercase , one Number and one special Character and must contain atlease 8 character ')
                        .required('Password is Required '),

                    cpassword: Yup.string()
                        .required('Password is Required ')
                        .oneOf([Yup.ref('password'), null], 'Password does not match !')


                })}
            >


                <Form>
                    <div className=' flex items-center justify-center mt-4 '>
                        <div className='w-[400px] flex flex-col items-center border-t-4 border-primary-color justify-center h-auto  bg-white shadow-md p-4 rounded-md rounded-t-none'>
                            <div className=' flex flex-col items-center '>
                                <h1 className='text-2xl  left-0  font-bold text-black font-primary '>Sign Up</h1>
                                <h1 className='text-sm  left-0  font-bold text-gray-400  font-primary '>Please fill in this form to create an account!</h1>
                            </div>
                            <div className=' w-[100%] grid grid-cols-2 gap-5 mt-3'>
                                <div className='w-[100%]'>
                                    <Field type="text" name='fname' placeholder='First Name' className='p-2   w-[100%] rounded-sm bg-gray-300' />
                                    <ErrorMessage name='fname'>
                                        {msg => <div className='text-red-800 flex flex-row'>{msg}</div>}
                                    </ErrorMessage>
                                </div>
                                <div className='w-[100%]'>

                                    <Field type="text" name='lname' placeholder='Last Name ' className='p-2   w-[100%] rounded-sm bg-gray-300' />
                                    <ErrorMessage name='lname'>
                                        {msg => <div className='text-red-800'>{msg}</div>}
                                    </ErrorMessage>
                                </div>

                            </div>

                            <div className=' w-[100%] flex flex-col mt-3'>
                                <Field type="email" name='email' placeholder='Email ' className='p-2    w-[100%] rounded-sm bg-gray-300' />
                                <ErrorMessage name='email'>
                                    {msg => <div className='text-red-800'>{msg}</div>}
                                </ErrorMessage>

                            </div>
                            <div className=' w-[100%] flex flex-col mt-3'>
                                <Field type="password" name='password' placeholder='Password  ' className='p-2    w-[100%] rounded-sm bg-gray-300' />
                                <ErrorMessage name='password'>
                                    {msg => <div className='text-red-800'>{msg}</div>}
                                </ErrorMessage>

                            </div>
                            <div className=' w-[100%] flex flex-col mt-3'>
                                <Field type="text" name='cpassword' placeholder='Confirm Password ' className='p-2    w-[100%] rounded-sm bg-gray-300' />
                                <ErrorMessage name='cpassword'>
                                    {msg => <div className='text-red-800'>{msg}</div>}
                                </ErrorMessage>

                            </div>
                            <div className='flex items-center justify-center gap-2 p-2'>
                                <Field type="checkbox" name="" id="" className='flex items-end size-4' />
                                <h1>I accept the Terms of Use & Privacy Policy</h1>
                            </div>
                            <div className=" flex   flex-col">
                                <button type="submit" className=' p-3 bg-primary-color px-6 mt-3 rounded-md text-xl text-white hover:text-primary-color hover:bg-white hover:shadow-md hover:text-xl active:scale-95 focus:bg-slate-400 transition-all ease-in-out duration-200  '>Register</button>
                                <h1 className=' font-primary text-gray-500 mt-2'>Already Have an Account ! <Link to="/login" className='text-blue-600 hover:underline'>Login Here</Link></h1>


                            </div>



                        </div>
                    </div>
                </Form>



            </Formik>
        </>
    )
}

export default Register