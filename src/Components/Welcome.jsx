

function Welcome() {
    return (
        <>
            {/* main container for welcome  */}
            <div className="fixed inset-0  flex justify-center items-center flex-col p-4">
                <div className=" bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20241017/pngtree-lofi-empty-interior-with-desk-window-star-starry-forest-jungle-anime-image_16359934.jpg')] bg-contain flex flex-col lg:flex-row items-center justify-center p-5 rounded-4xl">
                    <img src="/giphy.gif" className="w-[200px] md:w-fit rounded-4xl" alt="" />
                    <h1 className="mt-4 lg:m-2 font-mono font-bold text-center text-[20px] lg:text-4xl text-white bg-black/70 p-4 rounded-4xl">
                        Welcome to ChapterOne — a place where books come to life.
                    </h1>
                </div>
            </div>
        </>
    )
}

export default Welcome;