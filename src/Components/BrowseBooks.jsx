import React, { useEffect, useState } from 'react'
import { useFetchData } from '../utils/usefetchData'
import AllBooksCard from './AllBooksCard'
import Loading from './Loading'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function BrowseBooks() {
    const [allBooks, setAllBooks] = useState([])
    const [searchedText, setSearchedText] = useState('')
    const [dropdown, setDropdown] = useState(false)
    const [category, setCategory] = useState('')

    const addedBooks = useSelector((state) => state.Books.value)
    console.log(addedBooks, 'this is newly added book.....');


    const allCombinedBooks = [...addedBooks, ...allBooks]
    const { Category } = useParams()
    console.log(Category, 'this is params from browse page');


    const { data, loading, error } = useFetchData('https://books-backend-0qxz.onrender.com/api/getAllBooks')
    useEffect(() => {
        if (data) {
            console.log(data.Books, 'from browse books...')
            setAllBooks(data.Books || [])
        }

        window.scrollTo({
            top: 0,
            behavior:'smooth'
        })
    }, [data])

    useEffect(() => {
        if (Category) {
            setCategory(Category)
        } else {
            setCategory('')
        }
        setDropdown(false)

    }, [Category])
    if (loading) return <Loading />
    if (error) return <h1>{error}</h1>

    const computerBook = allCombinedBooks.filter((e) => e.category === 'computersInternet')
    const scienceFiction = allCombinedBooks.filter((e) => e.category === 'sciencefiction')
    const actionAdventure = allCombinedBooks.filter((e) => e.category === 'actionadventure')
    const comics = allCombinedBooks.filter((e) => e.category === 'comics')

    const filteredBooks = allCombinedBooks.filter((e) =>
        e.title.toLowerCase().includes(searchedText.toLowerCase()) ||
        e.author.toLowerCase().includes(searchedText.toLowerCase())
    )

    function handleDropdown() {
        setDropdown(!dropdown)
    }
    const categoryLabel = {
        '': "All",
        'computersInternet': 'Computers Internet',
        'sciencefiction': 'Science Fiction',
        'actionadventure': 'Action Adventure',
        'comics': 'Comics'
    }
    const filteredCategory = category ? allCombinedBooks.filter((el) => el.category === category) : allCombinedBooks
    const validCategory = ['computersInternet', 'actionadventure', 'sciencefiction', 'comics']
    if (Category && !validCategory.includes(Category)) { return {error} }
    // console.log(filteredBooks, 'filtered booooks');

    return (
        <div className='mt-4'>
            <div className='my-8 flex flex-col md:flex-row  justify-center items-center gap-2'>
                <h1 className='text-gray-400'>Search: </h1>
                <input type="text" className='px-2 py-1 rounded-3xl w-[80%] md:w-[300px] bg-white shadow-[0px_0px_5px_black] focus:outline-none focus:ring-2 focus:ring-indigo-400' placeholder="Search any book here..." value={searchedText} onChange={(e) => setSearchedText(e.target.value)} />

                <h1 className='text-gray-400'>Category: </h1>
                <div className='relative flex justify-center items-center gap-2 '>
                    <div onClick={handleDropdown} className='cursor-pointer shadow-[0px_0px_5px_gray] bg-white flex justify-between rounded-2xl px-3 py-2 w-[200px] text-center overflow-y-hidden h-[40px]' name="Category" id="category">
                        {categoryLabel[category]} <span>▾</span>
                    </div>
                    {
                        dropdown &&
                        (<div id='categoryDropdown' className='absolute top-8 text-center bg-white shadow-[0px_2px_4px_gray] rounded-4xl p-4'>
                            <div className='flex flex-col gap-2 cursor-pointer'>
                                <div className='border-b-2 text-gray-400'>Select</div>

                                <Link to={'/books'} className=''>All</Link>


                                <Link to={'/books/computersInternet'}>Computers Internet </Link>

                                <Link to={'/books/sciencefiction'} >Science Fiction</Link>
                                <Link to={'/books/actionadventure'} >Action Adventure</Link>
                                <Link to={'/books/comics'} >Comics</Link>
                            </div>
                        </div>)
                    }
                </div>
            </div>
            {searchedText ?
                (
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
                )
                :
                (
                    category ?
                        (
                            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4 md:p-4 ' >
                                {
                                    filteredCategory.map((el) => {
                                        return (
                                            <div key={el._id}>
                                                <AllBooksCard Books={el} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                        :
                        (<div>
                            {
                                addedBooks.length ?
                                    (<div className='mt-6 shadow-[0px_0px_15px_gray] rounded-4xl'>
                                        <h1 className='p-6 text-lg lg:text-2xl text-gray-500 border-b-2 border-gray-300'>Your Books</h1>
                                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4 md:p-4 ' >

                                            {
                                                addedBooks.map((el) => {
                                                    return (
                                                        <div key={el._id}>
                                                            <AllBooksCard Books={el} />
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div >) : (
                                        <div className='mt-6 shadow-[0px_0px_15px_gray] rounded-4xl'>
                                            <h1 className='p-6 text-lg lg:text-2xl text-gray-500 border-b-2 border-gray-300'>Your Books</h1>
                                            <div className='p-2 md:p-4 text-center text-gray-400'>
                                                <h1>You haven't added any Book yet...</h1>
                                            </div>
                                        </div >
                                    )
                            }
                            <div className='mt-6 shadow-[0px_0px_15px_gray] rounded-4xl'>
                                <h1 className='p-6 text-lg lg:text-2xl text-gray-500 border-b-2 border-gray-300'>Computers Internet</h1>
                                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4 md:p-4 ' >

                                    {
                                        computerBook.map((el) => {
                                            return (
                                                <div key={el._id}>
                                                    <AllBooksCard Books={el} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div >
                            <div className='mt-6 shadow-[0px_0px_15px_gray] rounded-4xl'>
                                <h1 className='p-6 text-lg lg:text-2xl text-gray-500 border-b-2 border-gray-300'>Science Fiction</h1>
                                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4 md:p-4 ' >

                                    {
                                        scienceFiction.map((el) => {
                                            return (
                                                <div key={el._id}>
                                                    <AllBooksCard Books={el} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className='mt-6 shadow-[0px_0px_15px_gray] rounded-4xl'>
                                <h1 className='p-6 text-lg lg:text-2xl text-gray-500 border-b-2 border-gray-300'>Action Adventure</h1>
                                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4 md:p-4 ' >

                                    {
                                        actionAdventure.map((el) => {
                                            return (
                                                <div key={el._id}>
                                                    <AllBooksCard Books={el} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className='mt-6 shadow-[0px_0px_15px_gray] rounded-4xl'>
                                <h1 className='p-6 text-lg lg:text-2xl text-gray-500 border-b-2 border-gray-300'>Comics</h1>
                                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4 md:p-4 ' >

                                    {
                                        comics.map((el) => {
                                            return (
                                                <div key={el._id}>
                                                    <AllBooksCard Books={el} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div >)
                )
            }
        </div >
    )
}

export default BrowseBooks