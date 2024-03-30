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
                <title>Login Page </title>
            </Helmet>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={Yup.object({

                    email: Yup.string()
                        .email('Invalid email Format ')
                        .required('Required ! '),

                    password: Yup.string()
                        .matches(/(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$?!])[A-Za-z\d@#$?!]{8,100}/, 'Required !')
                        .required('Required ! '),


                })}
            >


                <Form>
                    <div className=' flex items-center justify-center mt-4 '>
                        <div className='w-[400px] flex flex-col items-center border-t-4 border-primary-color justify-center h-auto  bg-white shadow-md p-4 rounded-md rounded-t-none'>
                            <div className=' flex flex-col items-center '>
                                <h1 className='text-2xl  left-0  font-bold text-black font-primary '>Sign In</h1>
                                <h1 className='text-sm  left-0  font-bold text-gray-400  font-primary '>Please fill in this form to Login !</h1>
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


                            <div className="">
                                <button type="submit" className=' p-2 bg-primary-color px-6 mt-3 rounded-md text-xl text-white hover:text-primary-color hover:bg-white hover:shadow-md hover:text-xl active:scale-95 focus:bg-slate-400 transition-all ease-in-out duration-200'>Login </button>
                            </div>



                            <h1 className=' font-primary text-gray-500'>Dont Have Account ! <Link to="/register" className='text-blue-600 hover:underline'>Register Here</Link></h1>
                        </div>
                    </div>
                </Form>



            </Formik>
        </>
    )
}

export default Register