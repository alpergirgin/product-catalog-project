import type { NextPage } from 'next'
import axios from "axios";
import Head from 'next/head'
import { FaFacebookF, FaLinkedinIn, FaGoogle, FaRegEnvelope, FaTwitter, FaInstagram, FaYoutube, FaRegHeart, FaHeart } from "react-icons/fa";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { TbHeart } from "react-icons/tb";
import { TfiHeart } from "react-icons/tfi";
import { MdLockOutline } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, selectValue } from "../slices/counterSlice";


const productListPage: NextPage = (props) => {
    function clickHeart(type, props2) {
        if (document.getElementById("heart" + type).className.baseVal.includes("fill-white")) {
            document.getElementById("heart" + type).className.baseVal = 'absolute w-6 h-6 top-3 right-3 fill-red-500 hover:fill-red-500'
            updateLike(type, "like", props2)
        }
        else {
            document.getElementById("heart" + type).className.baseVal = 'absolute w-6 h-6 top-3 right-3 fill-white stroke-1 stroke-gray hover:fill-red-500'
            updateLike(type, "unlike", props2)
        }
    }
    async function updateLike(type: string, likeStatus: string, props2) {
        console.log(type, likeStatus, props2)
        const response = await axios.post('https://assignment-api.piton.com.tr/api/v1/product/' + likeStatus, {
            "productId": props2.modelData[type].id,

        }, {
            headers: {
                'Access-Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFscGVyN0BnbWFpbC5jb20iLCJpYXQiOjE2NzE4OTIxMzEsImV4cCI6MTY5NzgxMjEzMX0.lLKBloHgc3AI75cI7Gh4v36y5jhSDlzlEE3lthPfjDk'
            }
        });
        console.log(response)
    }

    return (

        <div>
            {/* header */}
            <div className={
                "flex items-center bg-gray-100 border-b-2 px-6 py-2 h-24 "}>

                <div className='grow'>
                    <div className='flex items-center justify-left gap-2 md:gap-8'>
                        <h1 className='rounded-full px-12 py-3 font-bold bg-blue-500 text-white'>PitonShop</h1>
                    </div>
                </div>
                <div>
                    <button className='border-2 border-black-500 text-black-500 bg-white rounded-full px-12 py-3 inline-block font-semibold hover:bg-blue-500 hover:text-white'>Log Out</button>
                </div>
            </div>
            {/* books */}
            <div className='m-8 p-8 grid grid-cols-4 gap-1 justify-evenly '>

                {/* 1 */}
                <div className='m-8 p-8 relative grid border-2 border-black-500 rounded-3xl bg-white-600 h-[42rem] '>
                    <button onClick={() => clickHeart("0", props)}>
                        <BsFillSuitHeartFill id="heart0" className='absolute w-6 h-6 top-3 right-3 fill-white stroke-1 stroke-gray hover:fill-red-500'></BsFillSuitHeartFill>
                    </button>
                    <div >
                        <a href="http://localhost:3000/bookPage"><img className='ml-10 max-h-96 max-w-96 ' src={"https://assignment-api.piton.com.tr" + props.modelData[0].image} alt="Image" /></a>
                        <h1 className='text-xl m-2 p-2 text-center font-bold text-gray-900 dark:text-white'>{props.modelData[0].name}</h1>
                        <div className='border-2 bg-black-500 w-full border-black-500 inline-block mb-5'></div>
                        <h1 className='text-4xl text-center  font-semibold text-blue-900'>{props.modelData[0].price}.00 ₺</h1>
                    </div>
                </div>

                {/* 2 */}
                <div className='m-8 p-8 relative grid border-2 border-black-500 rounded-3xl bg-white-600 h-[42rem] '>
                    <button onClick={() => clickHeart("1", props)}>
                        <BsFillSuitHeartFill id="heart1" className='absolute w-6 h-6 top-3 right-3 fill-white stroke-1 stroke-gray hover:fill-red-500'></BsFillSuitHeartFill>
                    </button>
                    <div >
                        <a href="http://localhost:3000/bookPage"><img className='ml-10 max-h-96 max-w-96 ' src={"https://assignment-api.piton.com.tr" + props.modelData[1].image} alt="Image" /></a>
                        <h1 className='text-xl m-2 p-2 text-center font-bold text-gray-900 dark:text-white'>{props.modelData[1].name}</h1>
                        <div className='border-2 bg-black-500 w-full border-black-500 inline-block mb-5'></div>
                        <h1 className='text-4xl text-center  font-semibold text-blue-900'>{props.modelData[1].price}.00 ₺</h1>
                    </div>
                </div>

                {/* 3 */}
                <div className='m-8 p-8 relative grid border-2 border-black-500 rounded-3xl bg-white-600 h-[42rem] '>
                    <button onClick={() => clickHeart("2", props)}>
                        <BsFillSuitHeartFill id="heart2" className='absolute w-6 h-6 top-3 right-3 fill-white stroke-1 stroke-gray hover:fill-red-500'></BsFillSuitHeartFill>
                    </button>
                    <div >
                        <a href="http://localhost:3000/bookPage"><img className='ml-10 max-h-96 max-w-96 ' src={"https://assignment-api.piton.com.tr" + props.modelData[2].image} alt="Image" /></a>
                        <h1 className='text-xl m-2 p-2 text-center font-bold text-gray-900 dark:text-white'>{props.modelData[2].name}</h1>
                        <div className='border-2 bg-black-500 w-full border-black-500 inline-block mb-5'></div>
                        <h1 className='text-4xl text-center  font-semibold text-blue-900'>{props.modelData[2].price}.00 ₺</h1>
                    </div>
                </div>

                {/* 4 */}
                <div className='m-8 p-8 relative grid border-2 border-black-500 rounded-3xl bg-white-600 h-[42rem] '>
                    <button onClick={() => clickHeart("3", props)}>
                        <BsFillSuitHeartFill id="heart3" className='absolute w-6 h-6 top-3 right-3 fill-white stroke-1 stroke-gray hover:fill-red-500'></BsFillSuitHeartFill>
                    </button>
                    <div >
                        <a href="http://localhost:3000/bookPage"><img className='ml-10 max-h-96 max-w-96 ' src={"https://assignment-api.piton.com.tr" + props.modelData[3].image} alt="Image" /></a>
                        <h1 className='text-xl m-2 p-2 text-center font-bold text-gray-900 dark:text-white'>{props.modelData[3].name}</h1>
                        <div className='border-2 bg-black-500 w-full border-black-500 inline-block mb-5'></div>
                        <h1 className='text-4xl text-center  font-semibold text-blue-900'>{props.modelData[3].price}.00 ₺</h1>
                    </div>
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
export default productListPage

