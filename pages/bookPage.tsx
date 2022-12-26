import type { NextPage } from 'next'
import axios from "axios";
import Head from 'next/head'
import { FaFacebookF, FaLinkedinIn, FaGoogle, FaRegEnvelope, FaTwitter, FaInstagram, FaYoutube, FaHeart, FaRegHeart } from "react-icons/fa";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { MdLockOutline } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, selectValue } from "../slices/counterSlice";


const bookPage: NextPage = (props) => {

    return (
        <div>
            {/* header */}
            <div className='flex items-center bg-gray-100 border-b-2 px-6 py-2 h-24'>

                <div className='grow'>
                    <div className='flex items-center justify-left gap-2 md:gap-8'>
                        <a href="http://localhost:3000/productListPage"><h1 className='rounded-full px-12 py-3 font-bold bg-blue-500 text-white'>PitonShop</h1></a>
                    </div>
                </div>
                <div>
                    <button className=' border-2 border-black-500 text-black-500 bg-white rounded-full px-12 py-3 inline-block font-semibold hover:bg-blue-500 hover:text-white'>Log Out</button>
                </div>

            </div>

            {/* content */}
            <div className='m-8 p-8 inset-x-1/4 relative grid border-2 border-black-500 rounded-3xl bg-white-600 grid-rows-2 grid-flow-col gap-4 w-1/2 h-[32rem]'>
                <div className='grid grid-cols-3 divide-x'>
                    <div className='bg-white-500 '>
                        <img className='h-[28rem]' src={"https://assignment-api.piton.com.tr" + props.modelData[2].image} alt="Image" />
                    </div>
                    <div className=' bg-white-500 ml-16 border-2 border-white'>
                        <div><h1 className='absolute h-24 text-5xl text-left mt-8 py-2'>{props.modelData[2].name}</h1></div>
                        <div><p className='absolute h-24 text-2xl text-left mt-36 py-5'>{props.modelData[2].description}</p></div>
                    </div>
                </div>
                <div className='absolute top-8 right-8' ><h1 className='inline-block mr-4'>{props.modelData[2].likes} likes</h1><BsFillSuitHeartFill className='fill-white inline-block stroke-gray stroke-1 hover:fill-red-500'></BsFillSuitHeartFill></div>
                <div className='absolute bottom-8 right-0 bg-blue-500 h-24 w-48 rounded-l-full '>
                    <h1 className='text-white py-5 text-center text-5xl '>{props.modelData[2].price}₺</h1>
                </div>
            </div>
        </div>



    )


}

export async function getStaticProps() {
    const res = await axios.get('https://assignment-api.piton.com.tr/api/v1/product/all', {
        headers: {
            'Access-Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFscGVyN0BnbWFpbC5jb20iLCJpYXQiOjE2NzE4OTIxMzEsImV4cCI6MTY5NzgxMjEzMX0.lLKBloHgc3AI75cI7Gh4v36y5jhSDlzlEE3lthPfjDk'
        }
    });
    const modelData = res.data.products;
    return {
        props: {
            modelData
        },
    }
}
export default bookPage
