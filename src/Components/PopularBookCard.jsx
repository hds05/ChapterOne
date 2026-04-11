

function PopularBookCard({ Book }) {

    return (

        <div className="w-[300px] shadow-[0px_2px_5px_balck] p-4 border">
            <div className="flex justify-center items-center">
                <img src={Book.coverImage} alt="" />
            </div>
            <h1>{Book.title}</h1>
            <p>{Book.author}</p>
            <p>{Book.category}</p>
            <button className='bg-green-600 text-white p-4 font-bold rounded-4xl'>View More Details</button>
        </div>

    )
}

export default PopularBookCard;