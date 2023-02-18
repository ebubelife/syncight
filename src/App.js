import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Image} from 'react';
import { useState } from "react";
import main_logo from './assets/Xnapper-2023-02-17-21.55.32-removebg-preview__1_-removebg-preview.png'
import right_hero_image from './assets/63d9a1076838235da1173121_Light-p-800.png'

function App() {
  return (
    <>
    <Menu />
    <section className="top-hero-section lg:h-screen lg:w-full  lg:grid lg:grid-cols-2 sm:no-grid  sm:grid-cols-1 gap-6 sm:gap-0 bg-gradient-to-t from-stone-200 to-white">
    <div className=" sm:pl-1  lg:mr-20 lg:ml-20  sm:pt-2">
      <h1 className=" sm:w-full lg:text-justify sm:ml-4 sm:text-center font-bold sm:text-justify text-4xl mt-20 text-yellow-600 ">We summarise stuff</h1>
      <p className="sm:ml-5 lg:text-justify   font-normal text-xl mt-3 text-stone-500">We create summaries from youtube videos, texts, books and audio files. with few clicks, you can get summaries in varying formats. Extract points, quotes or gain insights. {'\n'} Click the button below to get started with free credits.</p>

      <div className='w-full sm:pl-20 lg:pl-5 '>
      <button type="button" className=" btn btn-outline-dark mt-3">Get Started</button>
      <button type="button" className="btn btn-outline-dark mt-3 ml-3">API Docs</button>
      </div>
    </div>
   
    <div className="lg:pt-20 sm:w-full">
    
    <img src={right_hero_image} alt="right_hero_image" className="right-hero-image shadow-6xl  sm:mt-1  mt-20 h-2/3  sm:h-2/3 lg:w-2/3"/>
      
    </div>
  </section>
  </>
  );
}

function Menu(){
  const [navbar, setNavbar] = useState(false);
  return(
    <>

    <nav className="w-full bg-stone-800  shadow-6xl">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div>
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <a href="javascript:void(0)">
                        <h2 className="no-underline text-2xl  font-bold text-white">Syncight</h2>
                    </a>
                    <div className="md:hidden">
                        <button
                            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                            onClick={() => setNavbar(!navbar)}
                        >
                            {navbar ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-white"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div
                    className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                        navbar ? "block" : "hidden"
                    }`}
                >
                    <ul className="items-center pt-4  justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                        <li className="no-underline text-white hover:text-indigo-200">
                            <a href="javascript:void(0)" className='no-underline text-white'  >Products</a>
                        </li>
                        <li className="text-white hover:text-indigo-200">
                            <a href="javascript:void(0)" className='no-underline text-white'>Samples</a>
                        </li>
                        <li className="text-white hover:text-indigo-200">
                            <a href="javascript:void(0)" className='no-underline text-white'>API Docs</a>
                        </li>
                        <li className="text-white hover:text-indigo-200">
                            <a href="javascript:void(0)" className='no-underline text-white'>Blogs </a>
                        </li>
                    </ul>

                    <div className="mt-3 space-y-2 no-underline lg:hidden md:inline-block">
                <a
                    href="javascript:void(0)"
                    className="inline-block no-underline w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                >
                    Sign in
                </a>
                <a
                    href="javascript:void(0)"
                    className="inline-block no-underline w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                >
                    Sign up
                </a>
            </div>
                </div>
            </div>
            <div className="hidden space-x-2 md:inline-block">
                <a
                    href="javascript:void(0)"
                    className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                >
                    Sign in
                </a>
                <a
                    href="javascript:void(0)"
                    className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                >
                    Sign up
                </a>
            </div>
        </div>
    </nav>
    </>
  )

}

export default App;
