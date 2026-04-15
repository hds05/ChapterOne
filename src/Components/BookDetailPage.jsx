import { useEffect, useState } from "react";
import { useFetchData } from "../utils/usefetchData";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";
import { useSelector } from "react-redux";


function BookDetailPage() {
    const { data, loading, error } = useFetchData('https://books-backend-0qxz.onrender.com/api/getAllBooks')
    const [detailCard, setDetailCard] = useState([])
    const { id } = useParams();
    console.log(data);
    console.log(id);

    const addedBook = useSelector((state)=> state.Books.value)

    useEffect(() => {
        if (data?.Books) {
            console.log(data);
            const allBooks = [...addedBook, ...data.Books]
            const foundBook = allBooks.find((e) => e._id === id)
            console.log(foundBook);
            setDetailCard(foundBook)
        }
    }, [data, id, addedBook])
    if (loading) return <Loading />
    if (error) return <h1>eeroooorrrrrrrrrrrrr..........</h1>
    return (
        <div className="flex flex-col mt-4 bg-white">
            <h1 className="font-bold m-4 text-gray-400 lg:text-4xl"> Detail of the Book: </h1>
            <div className="flex flex-col items-center justify-evenly gap-4 lg:flex-row m-4">
                <div className="w-[100%] lg:w-[50%] shadow-none md:shadow-[0px_0px_12px_black] lg:shadow-none p-4 md:rounded-4xl flex justify-center">

                    <img src={detailCard.coverImage} className="w-[300px]" alt="" />
                </div>
                <div className="w-[100%] lg:w-[50%] p-4 shadow-none text-center md:text-start md:shadow-[0px_0px_12px_black] md:rounded-4xl">
                    <div className="my-4">
                        <h1 className="text-3xl md:text-4xl font-bold text-orange-700">{detailCard.title}</h1>
                        <span className="text-sm text-gray-600">By: {detailCard.author}</span>
                        <div className="flex items-center justify-center md:justify-start gap-4">
                            <img src="/star.png" width={'20px'} alt="" />{detailCard.ratings}
                        </div>
                    </div>
                    <h1>Published On: <span className="text-blue-400"> {detailCard.years}</span></h1>
                    <h1 className="text-gray-400">{detailCard.description}</h1>
                    {/* <h1>{detailCard.category}</h1>
                    <h1>{detailCard.pages}</h1> */}
                    <div className="my-6 text-center">
                        <Link to={'/books'} className="w-full block hover:shadow-[0px_4px_5px_black] hover:scale-[1.03] p-2 rounded-4xl bg-green-700 transition-all duration-500 text-white">Back To Browse</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookDetailPage;