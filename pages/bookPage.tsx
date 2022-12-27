import type { NextPage } from 'next'
import { BsFillSuitHeartFill } from "react-icons/bs";
import React, { useState, useEffect } from 'react';
import axios from "axios";

const bookPage: NextPage = (props) => {
    function clickHeart() {
        if (document.getElementById("heart").className.baseVal.includes("fill-white")) {
            document.getElementById("heart").className.baseVal = 'absolute w-6 h-6 top-3 right-3 fill-red-500 hover:fill-red-500'
            localStorage.setItem("likes", parseInt(localStorage.getItem("likes")) - 1)
            likes = parseFloat(likes) + 1
            document.getElementById("likes").innerHTML = likes + " " + "likes"
            updateLike("like", localStorage.getItem("productId"))
        }
        else {
            document.getElementById("heart").className.baseVal = 'absolute w-6 h-6 top-3 right-3 fill-white stroke-1 stroke-gray hover:fill-red-500'
            localStorage.setItem("likes", parseInt(localStorage.getItem("likes")) - 1)
            likes = parseFloat(likes) - 1
            document.getElementById("likes").innerHTML = likes + " " + "likes"
            updateLike("unlike", localStorage.getItem("productId"))
        }
    }
    async function updateLike(likeStatus: string, productId: string) {
        const response = await axios.post('https://assignment-api.piton.com.tr/api/v1/product/' + likeStatus, {
            "productId": productId
        }, {
            headers: {
                'Access-Token': localStorage.getItem("token")
            }
        });
    }
    function logOut() {
        localStorage.removeItem("token");
        window.location.href = "http://localhost:3000/loginPage"
    }
    const [image, setImage] = useState([]);
    useEffect(() => {
        const image = localStorage.getItem('image');
        setImage(image);
    }, [image]);
    const [name, setName] = useState([]);
    useEffect(() => {
        const name = localStorage.getItem('name');
        setName(name);
    }, [name]);
    const [description, setDescription] = useState([]);
    useEffect(() => {
        const description = localStorage.getItem('description');
        setDescription(description);
    }, [description]);
    let [likes, setLikes] = useState(0);
    useEffect(() => {
        let likes = localStorage.getItem('likes');
        setLikes(likes);
    }, [likes]);
    const [price, setPrice] = useState([]);
    useEffect(() => {
        const price = localStorage.getItem('price');
        setPrice(price);
    }, [price]);
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
                    <button onClick={logOut} className=' border-2 border-black-500 text-black-500 bg-white rounded-full px-12 py-3 inline-block font-semibold hover:bg-blue-500 hover:text-white'>Log Out</button>
                </div>

            </div>

            {/* content */}
            <div className='m-8 p-8 inset-x-1/4 relative grid border-2 border-black-500 rounded-3xl bg-white-600 grid-rows-2 grid-flow-col gap-4 w-1/2 h-[32rem]'>
                <div className='grid grid-cols-3 divide-x'>
                    <div className='bg-white-500 '>
                        <img className='h-[28rem]' src={"https://assignment-api.piton.com.tr" + image} alt="Image" />
                    </div>
                    <div className=' bg-white-500 ml-16 border-2 border-white'>
                        <div><h1 className='absolute h-24 text-5xl text-left mt-8 py-2'>{name}</h1></div>
                        <div><p className='absolute h-24 text-2xl text-left mt-36 py-5'>{description}</p></div>
                    </div>
                </div>
                <div className='absolute top-8 right-8' ><h1 id='likes' className='inline-block mr-4'>{likes} likes</h1>
                    <button onClick={clickHeart}>
                        <BsFillSuitHeartFill id="heart" className='absolute w-6 h-6 top-3 right-3 fill-white stroke-1 stroke-gray hover:fill-red-500'></BsFillSuitHeartFill>
                    </button></div>
                <div className='absolute bottom-8 right-0 bg-blue-500 h-24 w-48 rounded-l-full '>
                    <h1 className='text-white py-5 text-center text-5xl '>{price}.00 ₺</h1>
                </div>
            </div>
        </div>
    )
}
export default bookPage
