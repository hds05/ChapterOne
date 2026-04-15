import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from '../features/addBookSlice'
import { nanoid } from 'nanoid'
import { Link, useNavigate } from 'react-router-dom'

function Addbooks() {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [ratings, setRatings] = useState('')
  const [years, setYears] = useState('')
  const [description, setDescription] = useState('')
  const [coverImage, setCoverImage] = useState('')
  const [category, setCategory] = useState('')

  const navigate = useNavigate()

  const dispatch = useDispatch()
  function handleSubmit(e){
    e.preventDefault()
    const newBook = {
      title, author, ratings, years, description, coverImage, category
    };
    console.log(newBook);
    
    dispatch(addBook(newBook));
    setTitle('')
    setAuthor('')
    setRatings('')
    setYears('')
    setDescription('')
    setCategory('')
    setCoverImage('')

    navigate('/books')
  }
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[url('https://images.unsplash.com/photo-1722182877533-7378b60bf1e8?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlicmFyeSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D')] bg-cover">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl mt-6 m-4 flex flex-col md:flex-row overflow-hidden">
        <div className="w-full md:w-1/2 bg-green-600 text-white flex flex-col justify-center items-center p-8">
          <h1 className="text-3xl font-bold mb-4">Add a New Book 📚</h1>
          <p className="text-center text-sm opacity-90">
            Fill in the details and grow your personal library collection.
          </p>
        </div>
        
        <div className="w-full md:w-1/2 p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              Book Details
            </h2>

            <div>
              <label className="text-sm text-gray-600">Title</label>
              <input 
                type="text" 
                required 
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter book title"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Author</label>
              <input 
                type="text" 
                required 
                value={author}
                onChange={(e)=> setAuthor(e.target.value)}
                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter author name"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Ratings</label>
              <input 
                type="number" 
                min="1" 
                max="5"
                required 
                value={ratings}
                onChange={(e)=> setRatings(e.target.value)}
                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="1 - 5"
                />
            </div>
            
            <div>
              <label className="text-sm text-gray-600">CoverImage</label>
              <input 
                type="URL" 
                required 
                value={coverImage}
                onChange={(e)=> setCoverImage(e.target.value)}
                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Link for Cover Image"
                />
            </div>
            
            <div>
              <label className="text-sm text-gray-600">Category</label>
              <input 
                type="text" 
                required 
                value={category}
                onChange={(e)=> setCategory(e.target.value)}
                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Link for Cover Image"
                />
            </div>

            <div>
              <label className="text-sm text-gray-600">years On</label>
              <input 
                type="date" 
                required 
                value={years}
                onChange={(e)=> setYears(e.target.value)}
                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
            </div>

            <div>
              <label className="text-sm text-gray-600">Description</label>
              <textarea 
                required 
                value={description}
                onChange={(e)=> setDescription(e.target.value)}
                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Write a short description..."
              />
            </div>

            <button 
              type="submit"
              className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-2 text-center rounded-lg transition duration-300 shadow-md"
            >
              Submit
            </button>

          </form>
        </div>

      </div>
    </div>
  )
}

export default Addbooks