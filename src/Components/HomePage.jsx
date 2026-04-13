import React, { useEffect, useState } from 'react'
import { useFetchData } from '../utils/usefetchData';
import PopularBookCard from './PopularBookCard';
import Loading from './Loading';
import { Link } from 'react-router-dom';

function HomePage() {
    const [popularBooks, setPopularBooks] = useState([])

    const { data, loading, error } = useFetchData('https://books-backend-0qxz.onrender.com/api/getAllBooks')
    useEffect(() => {
        if (data) {
            console.log(data);
            const Books = data.Books || []

            const filteredBooks = Books.filter((el) => el.ratings >= 4.6)
            console.log('these are the filtered books...', filteredBooks);

            setPopularBooks(filteredBooks)
        }

    }, [data])
    if (loading) return <Loading />
    if (error) return <h2>{`there is an error of: ${error}`}</h2>

    const uniqueCategory = [...new Set(popularBooks.map((e)=> e.category))]
    return (
        <div className='pt-4'>
            {/* welcome part */}
            <h1 className='text-center text-lg m-1 md:m-8 md:text-2xl font-bold font-mono'>Welcome in the World of Books...</h1>
            <div>
                <ul className='flex justify-center gap-2'>{
                    uniqueCategory.map((e) => 
                        <li key={e} className='bg-white px-4 py-2 rounded-2xl shadow-[0px_0px_3px_gray]'><Link to={'/books/:category'}>{e}</Link></li>
                    )
                } </ul>
            </div>
            {/* cards for popular books */}
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