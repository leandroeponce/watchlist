const Header = ({ setIsModalOpen }) => {
    const handleOpenModal = () => setIsModalOpen(true)
    
    return (
        <>
        <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
                <img src="/assets/movie-logo.png" alt="movie log" className="h-18 w-18"/>
                <p className="font-bold text-2xl">BEST MOVIES</p>
            </div>
            <button 
            className="bg-blue-400 text-white font-bold py-2 px-4 rounded hover:bg-amber-200 hover:cursor-pointer hover:text-blue-950 flex items-center gap-2" 
            onClick={handleOpenModal}>
                <img src="/assets/watchlist-logo.png" alt="watchlist logo" className="h-6 w-6" />My Watchlist
            </button>
        </header>
        <h1 className="text-center text-5xl font-bold m-6">¡Best movies to Watch, Rewatch, and Recommend!</h1>
        </>
    )
}

export default Header