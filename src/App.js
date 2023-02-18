import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Image} from 'react';
import main_logo from './assets/Xnapper-2023-02-17-21.55.32-removebg-preview__1_-removebg-preview.png'
import right_hero_image from './assets/63d9a1076838235da1173121_Light-p-800.png'

function App() {
  return (
    <>
    <Menu />
    <section className="top-hero-section h-full w-full  grid grid-cols-2 sm:no-grid  sm:grid-cols-1 gap-6 sm:gap-0 bg-gradient-to-t from-stone-200 to-white">
    <div className="p-20 sm:pl-1 sm:pr-1 sm:w-96  sm:pt-2">
      <h1 className=" sm:w-full sm:ml-4 sm:text-center font-bold text-4xl mt-20 text-yellow-600 ">We summarise stuff</h1>
      <p className="sm:text-center sm:ml-5   font-normal text-xl mt-3 text-stone-500">We create summaries from youtube videos, texts, books and audio files. with few clicks, you can get summaries in varying formats. Extract points, quotes or gain insights. {'\n'} Click the button below to get started with free credits.</p>

      <div className='w-screen pl-20'>
      <button type="button" className=" btn btn-outline-dark mt-3">Get Started</button>
      <button type="button" className="btn btn-outline-dark mt-3 ml-3">API Docs</button>
      </div>
    </div>
   
    <div className="">
    
    <img src={right_hero_image} alt="right_hero_image" className="right-hero-image shadow-2xl sm:ml-5 sm:mt-1  sm:w-96 mt-20 ml-10 h-2/3 sm:h-96"/>
      
    </div>
  </section>
  </>
  );
}

function Menu(){

  return(
    <>
   
<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <a href="https://flowbite.com/" class="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )

}

export default App;