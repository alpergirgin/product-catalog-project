import type { NextPage } from 'next'
import axios from "axios";
import Head from 'next/head'
import { FaFacebookF, FaLinkedinIn, FaGoogle, FaRegEnvelope, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

const loginPage: NextPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen ру-2 bg-gray-100">
            <Head>
                <title>Login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-col items-center justify-center w-full flex-1 px-28 pl-0 pr-0 text-center">
                <div className="bg-white rounded-2xl shadow-2xl flex w-2/3">
                    <div className="w-3/5 bg-gradient-to-t from-indigo-900 to-blue-500 text-white rounded-tl-2xl rounded-bl-2xl py-64 px-12">
                        <h2 className="text-3xl font-bold mb-2 text-left">PitonShop</h2>
                        <h3 className="text-2xl font-bold mb-2 text-left">The most popular book shop for IT</h3>
                        <br />
                        <a href="http://localhost:3000/signUpPage" className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-indigo-500'>Sign Up</a>
                    </div>
                    {/*Sign up*/}
                    <div className="w-2/5 p-5">
                        <div className='text-left font-bold'>
                            <span className='text-indigo-700'>Piton</span>Technology
                        </div>
                        <div className='py-10'>
                            <h2 className='text-3xl font-bold text-black-500 mb-3'>
                                Hello!
                            </h2>
                            <h3 className="text-1xl font-bold">Welcome Back</h3>
                        </div>
                        <div className='border-2 bg-indigo-500 w-16 border-indigo-500 inline-block mb-5'></div>
                        <div className='flex justify-center my-2'>
                            <a href="https://www.facebook.com/PitonYazilim/" className='border-2 border-indigo-200 rounded-full p-3 mx-1'>
                                <FaFacebookF className="text-sm" />
                            </a>
                            <a href="https://twitter.com/pitonyazilim" className='border-2 border-indigo-200 rounded-full p-3 mx-1'>
                                <FaTwitter className="text-sm" />
                            </a>
                            <a href="https://www.instagram.com/pitontechnology/" className='border-2 border-indigo-200 rounded-full p-3 mx-1'>
                                <FaLinkedinIn className="text-sm" />
                            </a>
                            <a href="https://www.linkedin.com/company/pitontechnology/?originalSubdomain=tr" className='border-2 border-indigo-200 rounded-full p-3 mx-1'>
                                <FaInstagram className="text-sm" />
                            </a>
                            <a href="https://www.youtube.com/channel/UCanr6pm7fLd17pbkKFK-F6w" className='border-2 border-indigo-200 rounded-full p-3 mx-1'>
                                <FaYoutube className="text-sm" />
                            </a>
                            <a href="https://www.piton.com.tr/" className='border-2 border-indigo-200 rounded-full p-3 mx-1'>
                                <FaGoogle className="text-sm" />
                            </a>
                        </div>{/*Social login section*/}
                        <div className='flex flex-col items-center'>
                            <div className='bg-gray-100 w-64 p-2 flex items-center rounded-full mb-3'>
                                <FaRegEnvelope className='text-gray-400 m-2' />
                                <input type="email" name='email' placeholder='Email' className='bg-gray-100 outline-none text-sm' />
                            </div>
                            <div className='bg-gray-100 w-64 p-2 flex items-center rounded-full mb-3'>
                                <MdLockOutline className='text-gray-400 m-2' />
                                <input type="password" name='password' placeholder='Password' className='bg-gray-100 outline-none text-sm' />
                            </div>
                            <div className='flex justify-between w-64 mb-5'>
                                <label className='flex items-center text-xs'>
                                    <input type="checkbox" name='remember' className='mr-1' />Remember Me
                                </label>
                                <a href="#" className='text-xs'>Forgot Password</a>
                            </div>
                            <button className='border-2 border-indigo-500 text-indigo-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-indigo-500 hover:text-white'>Sign In</button>
                        </div>
                    </div>
                    {/*Sign in*/}
                </div>
            </main>
        </div>
    )
}

export default loginPage