import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Image} from 'react';
import main_logo from './assets/Xnapper-2023-02-17-21.55.32-removebg-preview__1_-removebg-preview.png'
import right_hero_image from './assets/63d9a1076838235da1173121_Light-p-800.png'

function App() {
  return (
    <>
  
    <section className="top-hero-section lg:h-screen lg:w-full  lg:grid lg:grid-cols-2 sm:no-grid  sm:grid-cols-1 gap-20 sm:gap-0 bg-gradient-to-t from-stone-200 to-white">
    <div className="p-20 sm:pl-1 sm:pr-1 sm:screen lg:ml-20  sm:pt-2">
      <h1 className=" sm:w-full lg:text-justify sm:ml-4 sm:text-center font-bold sm:text-4xl text-4xl mt-20 text-yellow-600 ">We summarise stuff</h1>
      <p className="sm:text-center sm:ml-5 lg:text-justify   font-normal sm:text-2xl text-xl mt-3 text-stone-500">We create summaries from youtube videos, texts, books and audio files. with few clicks, you can get summaries in varying formats. Extract points, quotes or gain insights. {'\n'} Click the button below to get started with free credits.</p>

      <div className='w-48 bg-stone-800  sm: pl-20 lg:pl-5 '>
      <button type="button" className=" btn btn-outline-dark mt-3">Get Started</button>
      <button type="button" className="btn btn-outline-dark mt-3 ml-3">API Docs</button>
      </div>
    </div>
   
    <div className="lg:pt-20    lg:pl-20 ">
    
    <img src={right_hero_image} alt="right_hero_image" className="right-hero-image shadow-2xl sm:ml-5 sm:mt-1  sm:w-32 lg:mt-20 lg:ml-10 h-2/3  sm:h-96"/>
      
    </div>
  </section>
  </>
  );
}

function Menu(){

  return(
    <>
    <nav class="sm:pr-3 sm:pl-3   flex items-center justify-between flex-wrap bg-stone-800 pt-2 pb-2 pr-20 pl-20">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
   <img src={main_logo} className="logo w-50 h-10" alt="logo" />
    <span class="font-semibold text-xl tracking-tight">Syncight</span>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 pb-5 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center ml-64 lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a href="#responsive-header" class="no-underline text-lg block mt-2 lg:inline-block lg:mt-0 text-yellow-300 hover:text-white mr-10">
        Products
      </a>
      <a href="#responsive-header" class="no-underline text-lg block mt-2 lg:inline-block lg:mt-0 text-yellow-300 hover:text-white  mr-10">
        Samples
      </a>
      <a href="#responsive-header" class=" no-underline  text-lg block mt-2 lg:inline-block lg:mt-0 text-yellow-300 hover:text-white ">
        News
      </a>
    </div>
    <div>
      <a href="#" class="inline-block text-sm px-4 py-2 no-underline leading-none border rounded text-yellow-100  border-white hover:border-transparent hover:text-red-300 hover:bg-white mt-2 lg:mt-0">Signup</a>
    </div>
  </div>
</nav>
    </>
  )

}

export default App;
