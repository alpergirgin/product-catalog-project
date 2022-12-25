import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (

    <div className="flex flex-col items-center justify-center min-h-screen ру-2 bg-gray-100">
      <head>
        <title>Sign Up</title>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-28 text-center" >



        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 bg-gradient-to-t from-blue-900 to-blue-600 text-white rounded-tr-2xl rounded-br-2xl py-64 px-24">
            <h2 className="text-3xl font-bold mb-2 text-left">PitonShop</h2>
            <h3 className="text-2xl font-bold mb-2 text-left">The most popular book shop for IT</h3>
          </div>
          {/*Sign up*/}
          <div className="w-2/5 p-5">
            <p>sign in</p>
          </div>
          {/*Sign in*/}

        </div>
      </main>


    </div>
  )
}

export default Home
