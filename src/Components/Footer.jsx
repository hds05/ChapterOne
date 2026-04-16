import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (

        // main footer container
        <footer className="bg-white rounded-base shadow-[0px_2px_5px_gray] mt-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    {/* link to go back to home page on click on image */}
                    <Link to={'/'} className="flex items-center justify-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="/mainImg.png" width={'150px'} alt="" />
                    </Link>
                    {/* Navigation links displayed in the footer */}
                    <ul className="flex flex-wrap items-center justify-center mb-6 text-sm font-mono  sm:mb-0">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-default sm:mx-auto lg:my-8" />
                {/* copyright text */}
                <span className="block text-sm font-mono  sm:text-center">© 2023 <a href="/" className="hover:underline">ChapterOne</a>. All Rights Reserved.</span>
            </div>
        </footer>


    )
}

export default Footer