import React, { useEffect } from 'react'
import { useFetchData } from '../utils/usefetchData';

function HomePage() {

      const { data, loading, error } = useFetchData('https://books-backend-0qxz.onrender.com/api/getAllBooks')
  useEffect(() => {
    if (data) {
      console.log(data);
    }

  }, [data])
  if (loading) return <h1>loading...</h1>
  if (error) return <h2>there is an error...</h2>
  return (
    <div>
        {/* welcome part */}
        {/* categories box/dropdown or something like that*/}
        {/* cards for popular books */}
    </div>
  )
}

export default HomePage