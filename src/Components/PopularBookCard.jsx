import { Link } from "react-router-dom";


function PopularBookCard({ Book }) {

    return (
        // naub card container for popular books
        <div className="shadow-[0px_1px_1px_gray] md:shadow-[0px_2px_5px_black] md:rounded-4xl p-4 h-[500px] flex flex-col justify-between text-center bg-white">

            {/* cover image of popular book */}
            <div className="flex justify-center items-center h-[70%] overflow-hidden">
                <img src={Book.coverImage} className="w-[200px] md:w-fit md:h-full" alt="" />
            </div>
            {/* title of popular book */}
            <h1 className="text-yellow-600 font-bold text-[13px] sm:text-[16px]">{Book.title}</h1>
            {/* author of popular book */}
            <p className="text-gray-500 text-sm">By: {Book.author}</p>

            {/* button to open the detail page of the particular book */}
            <Link to={`/book/${Book._id}`}>
                <button className='bg-green-600 text-white p-2 md:p-4 font-bold rounded-4xl text-xs md:text-[14px] transition-all duration-200 hover:shadow-[0px_2px_5px_black] hover:scale-105 cursor-pointer '>
                    View More Details
                </button>
            </Link>
        </div>

    )
}

export default PopularBookCard;