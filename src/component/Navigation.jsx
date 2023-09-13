import React, {useState} from "react";
import { AiFillHome, AiOutlineSearch, AiOutlinePlusSquare, AiOutlineMessage, AiOutlineUserAdd } from "react-icons/ai";
import {FaPaperPlane, } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';
const NavigationButton = () => {
    const [showModal, setShowModal] = React.useState(false);
    const slide_image = 'https://cutewallpaper.org/24/image-placeholder-png/index-of-img.png';
    
    return (
        <>
        
        <div className="fixed top-0 left-0 z-50 flex h-16 mx-auto font-medium md:hidden w-full bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600 ">
            {/* Header untuk tampilan mobile */}
            <div className="flex items-center justify-between px-5 w-full">
                <div>
                    <a href="/" className="text-xl text-white inline-flex flex-col items-center justify-center px-5 group">JyotiPix</a>
                </div>
                <div>
                <Link to="/chat" type="button" className="inline-flex flex-col items-center justify-center px-5 group">
                    <FaPaperPlane className="w-8 h-8 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 p-1" />
                </Link>
                <button
        className="inline-flex flex-col items-center justify-center px-5 group"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <AiOutlineUserAdd className="w-8 h-8 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 p-1" />
      </button> 
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Modal Title
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image} alt="slide_image" />
          <div className="slide-description">
            <p>Taufik Heryunanto</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image} alt="slide_image" />
          <div className="slide-description">
            <p>Heryunanto</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image} alt="slide_image" />
          <div className="slide-description">
            <p>Opik</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image} alt="slide_image" />
          <div className="slide-description">
            <p>jsajjs</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
                </div>
            </div>
        </div>
        <div className="fixed bottom-0 left-0 z-50 w-full bg-white border-t border-gray-200 md:p-10">
            <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
                <Link to="/" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group">
                    <AiFillHome className="w-10 h-10 mb-1 text-black group-hover:text-blue-600 p-1"/>
                </Link>
                <Link to="/explore" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group">
                    <AiOutlineSearch className="w-10 h-10 mb-1 text-black group-hover:text-blue-600 font-bold p-1"/>    
                </Link>
                <button  className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group">
                    <AiOutlinePlusSquare className="w-10 h-10 mb-1 text-black group-hover:text-blue-600 rounded p-1"/> 
                </button>
                <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group navigation-hidden">
                    <AiOutlineMessage className="w-10 h-10 mb-1 text-black group-hover:text-blue-600 rounded p-1" />
                </button>
                <Link to="/profile" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group  p-1">
                    <svg className="w-10 h-10 mb-1 text-black group-hover:text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clipRule="evenodd" fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"></path>
                    </svg>
                </Link>
            </div>
        </div>
        </>
    );
};

export default NavigationButton;