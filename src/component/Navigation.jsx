import React, {useState} from "react";
import { AiFillHome, AiOutlineSearch, AiOutlinePlusSquare, AiOutlineMessage } from "react-icons/ai";
import {FaPaperPlane} from "react-icons/fa6";
import { Link } from "react-router-dom";
const Navigation = () => {
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
                </div>
            </div>
        </div>
        <div className="fixed bottom-0 left-0 z-50 w-full bg-white border-t border-gray-200 md:p-10">
            <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
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

export default Navigation;