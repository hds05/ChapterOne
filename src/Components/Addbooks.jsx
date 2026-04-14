import React from 'react'

function Addbooks() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl mt-6 m-4 flex flex-col md:flex-row overflow-hidden">
        <div className="w-full md:w-1/2 bg-green-600 text-white flex flex-col justify-center items-center p-8">
          <h1 className="text-3xl font-bold mb-4">Add a New Book 📚</h1>
          <p className="text-center text-sm opacity-90">
            Fill in the details and grow your personal library collection.
          </p>
        </div>
        
        <div className="w-full md:w-1/2 p-8">
          <form className="flex flex-col gap-4">
            
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              Book Details
            </h2>

            <div>
              <label className="text-sm text-gray-600">Title</label>
              <input 
                type="text" 
                required 
                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter book title"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Author</label>
              <input 
                type="text" 
                required 
                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter author name"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Rating</label>
              <input 
                type="number" 
                min="1" 
                max="5"
                required 
                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="1 - 5"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Published On</label>
              <input 
                type="date" 
                required 
                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Description</label>
              <textarea 
                required 
                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Write a short description..."
              />
            </div>

            <button 
              type="submit"
              className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition duration-300 shadow-md"
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