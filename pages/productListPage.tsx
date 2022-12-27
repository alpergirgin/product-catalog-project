import type { NextPage } from 'next'
import axios from "axios";
import { BsFillSuitHeartFill } from "react-icons/bs";

const productListPage: NextPage = (props) => {
    function logOut() {
        localStorage.removeItem("token");
        window.location.href = "http://localhost:3000/loginPage"
    }
    function selectPage(modelData) {
        localStorage.setItem("image", modelData.image)
        localStorage.setItem("name", modelData.name)
        localStorage.setItem("description", modelData.description)
        localStorage.setItem("likes", modelData.likes)
        localStorage.setItem("price", modelData.price)
        localStorage.setItem("productId", modelData.id)
        window.location.href = "http://localhost:3000/bookPage"
    }
    function clickHeart(type, props2) {
        if (document.getElementById("heart" + type).className.baseVal.includes("fill-white")) {
            document.getElementById("heart" + type).className.baseVal = 'absolute w-6 h-6 top-3 right-3 fill-red-500 hover:fill-red-500'
            props2.modelData[type].likes = props2.modelData[type].likes + 1
            updateLike(type, "like", props2)
        }
        else {
            document.getElementById("heart" + type).className.baseVal = 'absolute w-6 h-6 top-3 right-3 fill-white stroke-1 stroke-gray hover:fill-red-500'
            props2.modelData[type].likes = props2.modelData[type].likes - 1
            updateLike(type, "unlike", props2)
        }
    }
    async function updateLike(type: string, likeStatus: string, props2) {
        let token = localStorage.getItem("token")
        const response = await axios.post('https://assignment-api.piton.com.tr/api/v1/product/' + likeStatus, {
            "productId": props2.modelData[type].id
        }, {
            headers: {
                'Access-Token': token
            }
        });
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
                    <button onClick={logOut} className='border-2 border-black-500 text-black-500 bg-white rounded-full px-12 py-3 inline-block font-semibold hover:bg-blue-500 hover:text-white'>Log Out</button>
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
                        <a onClick={() => selectPage(props.modelData[0])} href="http://localhost:3000/bookPage"><img src={"https://assignment-api.piton.com.tr" + props.modelData[0].image} alt="Image" /></a>
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
                        <a onClick={() => selectPage(props.modelData[1])} href="http://localhost:3000/bookPage"><img src={"https://assignment-api.piton.com.tr" + props.modelData[1].image} alt="Image" /></a>
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
                        <a onClick={() => selectPage(props.modelData[2])} href="http://localhost:3000/bookPage"><img src={"https://assignment-api.piton.com.tr" + props.modelData[2].image} alt="Image" /></a>
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
                        <a onClick={() => selectPage(props.modelData[3])} href="http://localhost:3000/bookPage"><img src={"https://assignment-api.piton.com.tr" + props.modelData[3].image} alt="Image" /></a>
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
            'Access-Token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFscGVyQGFscGVyLmNvbSIsImlhdCI6MTY3MjA5NjcyOCwiZXhwIjoxNjk4MDE2NzI4fQ.DrVwcOcB4sbfUbtA_J7c_48dqbkyywYWTuKya8LF1Ns"
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

