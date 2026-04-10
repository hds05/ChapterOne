import React from "react";
import { Link } from "react-router-dom";

function Header(){
    return (
        <header className="flex items-center justify-between p-4 shadow-[0px_2px_5px_gray]">
            <div className="m-2">
                <h1 className="text-2xl">ChapterOne <sub className="text-sm">A online library</sub></h1>
            </div>
            <nav className="flex gap-4">
                <Link to={'/'}>Home</Link>
                <Link to={'/browsebooks'}>Browse Books</Link>
                <Link to={'/addbook'}>Add Books</Link>
            </nav>
        </header>
    )
}

export default Header;