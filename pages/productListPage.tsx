import type { NextPage } from 'next'
import axios from "axios";
import Head from 'next/head'
import { FaFacebookF, FaLinkedinIn, FaGoogle, FaRegEnvelope, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, selectValue } from "../slices/counterSlice";

const productListPage: NextPage = () => {
    return (
        <div>
            <div className={
                "container mx-auto flex items-center border-b-2 px-6 py-2 h-24"}>

                <div className='grow'>
                    <div className='flex items-center justify-left gap-2 md:gap-8'>
                        <h1 className='rounded-full px-12 py-3 font-bold bg-indigo-500 text-white-500'>PitonShop</h1>
                    </div>
                </div>
                <div>
                    <button className='border-2 border-indigo-500 text-indigo-500 rounded-full px-12 py-3 inline-block font-semibold hover:bg-indigo-500 hover:text-white'>Log Out</button>
                </div>
            </div>

        </div>
    )
}

export default productListPage