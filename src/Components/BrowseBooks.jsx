import React, { useEffect, useState } from 'react'
import { useFetchData } from '../utils/usefetchData'
import AllBooksCard from './AllBooksCard'
import Loading from './Loading'

function BrowseBooks() {
    const [allBooks, setAllBooks] = useState([])
    const [searchedText, setSearchedText] = useState('')

    const { data, loading, error } = useFetchData('https://books-backend-0qxz.onrender.com/api/getAllBooks')
    useEffect(() => {
        if (data) {
            console.log(data.Books, 'from browse books...')
            setAllBooks(data.Books || [])
        }
    }, [data])
    if (loading) return <Loading />
    if (error) return <h1>{error}</h1>

    const filteredBooks = allBooks.filter((e) => 
        e.title.toLowerCase().includes(searchedText.toLowerCase()) ||
        e.description.toLowerCase().includes(searchedText.toLowerCase()) ||
            e.author.toLowerCase().includes(searchedText.toLowerCase())
    )
    console.log(filteredBooks, 'filtered booooks');

    return (
        <div className='mt-4'>
            <div className='flex justify-center items-center'>
                <input type="text" className='border px-2 py-1 rounded-3xl lg:w-[300px]' placeholder="Search here..." value={searchedText} onChange={(e) => setSearchedText(e.target.value)} />

                <div></div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4 md:p-4 ' >

                {
                    filteredBooks.map((el) => {
                        return (
                            <div key={el._id}>
                                <AllBooksCard Books={el} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BrowseBooks