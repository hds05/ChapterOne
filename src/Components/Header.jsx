import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="bg-white flex flex-col md:flex-row items-center justify-between px-2 lg:p-4 shadow-[0px_2px_5px_gray] font-mono">
            <div className="flex"> 

                <img src="/favicon.png" className="w-[100px]" alt="" />
                <div className="flex flex-col lg:flex-row items-center  gap-2 my-4">
                    <h1 className="font-bold text-2xl  md:text-4xl"><Link to={'/'}>ChapterOne</Link></h1><sub className="text-[15px]">Your online library.</sub>
                </div>
            </div>
            <nav className="flex gap-4 text-sm p-4 md:text-xl">
                <Link to={'/'} className="active:text-gray-500">Home</Link>
                <Link to={'/books'}>Browse_Books</Link>
                <Link to={'/addbook'}>Add_Books</Link>
            </nav>
        </header>
    )
}

export default Header;