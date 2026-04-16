import React, { useEffect, useState } from 'react'
import { useFetchData } from '../utils/usefetchData';
import PopularBookCard from './PopularBookCard';
import Loading from './Loading';
import { Link } from 'react-router-dom';

function HomePage() {
    // state for popular books
    const [popularBooks, setPopularBooks] = useState([])

    // fetching all books from API
    const { data, loading, error } = useFetchData('https://books-backend-0qxz.onrender.com/api/getAllBooks')
    useEffect(() => {
        if (data) {
            // store the fetched data in local variable- Books
            const books = data.Books || []

            // filter of books based on ratings
            const filteredBooks = books.filter((el) => el.ratings >= 4.6)
            console.log('these are the filtered books...', filteredBooks);

            // save the filtered books in state as popular books
            setPopularBooks(filteredBooks)
        }

    }, [data])

    // if loading then display Loading component
    if (loading) return <Loading />
    if (error) return <h2>{`there is an error of: ${error}`}</h2>

    // create an array of unique categories from popular books
    const uniqueCategory = [...new Set(popularBooks.map((e) => e.category))]
    return (
        // main container for Home page
        <div className='pt-4'>

            {/* Welcome note */}
            <h1 className='text-center text-lg m-1 md:m-8 md:text-2xl font-bold font-mono'>Welcome in the World of Books...</h1>

            {/* Popular Books Categories */}
            <div>
                <ul className='flex justify-center flex-wrap gap-2'>{
                    uniqueCategory.map((e) =>
                        <li key={e} className='bg-white px-4 py-2 rounded-2xl shadow-[0px_0px_3px_gray]'>
                            <Link to={`/books/${e}`}>{e}</Link>
                        </li>
                    )
                } </ul>
            </div>

            {/* Display cards of popular books */}
            {
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4 md:p-4 md:py-8' >
                    {popularBooks.map((el) => {
                        return (
                            <div key={el._id}>
                                < PopularBookCard Book={el} />
                            </div>

                        )
                    })}
                </div>
            }
        </div>
    )
}

export default HomePage