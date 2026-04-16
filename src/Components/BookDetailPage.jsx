import { useEffect, useState } from "react";
import { useFetchData } from "../utils/usefetchData";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";
import { useSelector } from "react-redux";


function BookDetailPage() {

    // fetch all books from API
    const { data, loading, error } = useFetchData('https://books-backend-0qxz.onrender.com/api/getAllBooks')

    // State to store the selected book details
    const [detailCard, setDetailCard] = useState([])

    // get id from params
    const { id } = useParams();

    // Get newly added book from redux store
    const addedBook = useSelector((state) => state.Books.value)

    useEffect(() => {
        // Run only when API data is available
        if (data?.Books) {
            // combine the books from redux store and the books from API in onw array
            const allBooks = [...addedBook, ...data.Books]

            // use find method to find the particular book on the basis of useparams id
            const foundBook = allBooks.find((e) => e._id === id)

            // save the selected book in state
            setDetailCard(foundBook)

        }
    }, [data, id, addedBook])

    // display loading component while data from API is loading...
    if (loading) return <Loading />

    // show error if fail to fetch the API
    if (error) return <h1 className="h-screen flex justify-center items-center">Error while loading Book details...</h1>
    return (
        <div className="flex flex-col mt-4 bg-white">
            <h1 className="font-bold m-4 text-gray-400 lg:text-4xl"> Detail of the Book: </h1>
            <div className="flex flex-col items-center justify-evenly gap-4 lg:flex-row m-4">

                {/* Book's cover image */}
                <div className="w-[100%] lg:w-[50%] shadow-none md:shadow-[0px_0px_12px_black] lg:shadow-none p-4 md:rounded-4xl flex justify-center">
                    <img src={detailCard.coverImage} className="w-[300px]" alt="" />
                </div>

                <div className="w-[100%] lg:w-[50%] p-4 shadow-none text-center md:text-start md:shadow-[0px_0px_12px_black] md:rounded-4xl">
                    <div className="my-4">
                        {/* Book's title */}
                        <h1 className="text-3xl md:text-4xl font-bold text-orange-700">{detailCard.title}</h1>

                        {/* Book's author */}
                        <span className="text-sm text-gray-600">By: {detailCard.author}</span>

                        {/* Book's ratings */}
                        <div className="flex items-center justify-center md:justify-start gap-4">
                            <img src="/star.png" width={'20px'} alt="" />{detailCard.ratings}
                        </div>
                    </div>

                    {/* Book published on */}
                    <h1>Published On: <span className="text-blue-400"> {detailCard.years}</span></h1>

                    {/* Book's description */}
                    <h1 className="text-gray-400">{detailCard.description}</h1>

                    {/* button to redirect to browse books page */}
                    <div className="my-6 text-center">
                        <Link to={'/books'}>
                            <button className="w-full hover:shadow-[0px_4px_5px_black] hover:scale-[1.03] p-2 rounded-4xl bg-green-700 transition-all duration-500 text-white cursor-pointer">
                                Back To Browse
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookDetailPage;