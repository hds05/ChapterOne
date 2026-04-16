import { useEffect, useState } from "react";


export function useFetchData(url) {
    // state to store the fetched data
    const [data, setData] = useState([])
    // state to track whether data is still loading
    const [loading, setLoading] = useState(true)
    // state to store any error that occurs during fetch
    const [error, setError] = useState(null)

    useEffect(() => {
        // async function to fetch data from the given URL
        async function Data() {
            try {
                // fetching the url
                let response = await fetch(url)
                // converting it into json format
                let result = await response.json()
                // save fetched data in state
                setData(result)
            }
            catch (err) {
                // save error in state if request fails
                setError(err)
            }
            finally {
                // stop loading whether request succeeds or fails
                setLoading(false)
            }
        }
        Data()
    }, [url])   // re-run effect whenever the URL changes

    // return data, loading and error states to the component where this hook is used
    return { data, loading, error }
}