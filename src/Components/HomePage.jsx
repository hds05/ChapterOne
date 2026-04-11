import React, { useEffect, useState } from 'react'
import { useFetchData } from '../utils/usefetchData';
import PopularBookCard from './PopularBookCard';

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
    if (loading) return <h1>loading...</h1>
    if (error) return <h2>{`there is an error of: ${error}`}</h2>

    return (
        <div className='mt-4'>
            {/* welcome part */}

            {/* cards for popular books */}
            {
                <div className='grid grid-cols-4' >
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