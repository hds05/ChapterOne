import { useEffect, useState } from "react";


export function useFetchData(url){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        async function Data(){
            try{
                let response = await fetch(url)
                let result = await response.json()
                setData(result)
                // console.log(result);
            }
            catch(err){
                setError(err)
                console.error('there is an error of- ', err)
            }            
            finally{
                setLoading(false)
            }
        }
        Data()
    }, [url])
    return {data, loading, error}
}