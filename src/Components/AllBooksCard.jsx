import { Link } from "react-router-dom";


function AllBooksCard({ Books }) {

    return (
        // Main card comtainer to display a book
        <div className="shadow-[0px_0px_1px_gray] md:shadow-[0px_0px_5px_gray] md:rounded-4xl p-4 overflow-hidden h-[500px] bg-white flex flex-col justify-between text-center">
            {/* Book cover Image */}
            <div className="flex justify-center items-center h-[70%] overflow-hidden">
                <img src={Books.coverImage} className="w-[200px] md:w-fit md:h-full" alt="" />
            </div>
            
            {/* Book title */}
            <h1 className="text-yellow-600 font-bold text-[13px] sm:text-[16px]">{Books.title}</h1>
            
            {/* Book author */}
            <p className="text-gray-500 text-sm">By: {Books.author}</p>

            {/* Button to redirect to the particular book detail page based on its ID */}
            <Link to={`/book/${Books._id}`} className='bg-green-600 text-white p-2 md:p-4 font-bold rounded-4xl text-xs md:text-[14px] transition-all duration-200 hover:shadow-[0px_2px_5px_black] hover:scale-105 cursor-pointer '>View Details</Link>
        </div>

    )
}

export default AllBooksCard;