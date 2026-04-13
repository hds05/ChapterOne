import { useEffect, useState } from "react";
import { useFetchData } from "../utils/usefetchData";
import { useParams } from "react-router-dom";


function BookDetailPage() {
    const { data, loading, error } = useFetchData('https://books-backend-0qxz.onrender.com/api/getAllBooks')
    const [detailCard, setDetailCard] = useState([])
    const { id } = useParams();
    console.log(data);
    console.log(id);
    useEffect(() => {
        if (data?.Books) {
            console.log(data);
            const foundBook = data.Books.find((e) => e._id === id)
            console.log(foundBook);
            setDetailCard(foundBook)
        }
    }, [data, id])
    if (loading) return <h1>Loooooooooodinggggggggggg..........</h1>
    if (error) return <h1>eeroooorrrrrrrrrrrrr..........</h1>
    return (
        <div className="flex flex-col justify-center items-center mt-4">
            <h1 className="font-bold lg:text-4xl"> Detail of the Book</h1>
            <div className="flex flex-col items-center justify-center lg:flex-row m-4">
                <img src={detailCard.coverImage} alt="" />
                <div className="lg:w-2xl p-4">
                    <h1>{detailCard.title}</h1>
                    <h1>{detailCard.author}</h1>
                    <h1>{detailCard.years}</h1>
                    <h1>{detailCard.ratings}</h1>
                    <h1>{detailCard.description}</h1>
                    <h1>{detailCard.category}</h1>
                    <h1>{detailCard.pages}</h1>
                </div>
            </div>
        </div>
    )
}

export default BookDetailPage;