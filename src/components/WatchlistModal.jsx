function WatchlistModal({ isModalOpen, setIsModalOpen, watchlist, setWachlist }) {

    const handleCloseModal = () => setIsModalOpen(false)
    if (!isModalOpen) return null

    return (
        <div>
            <button 
            onClick={ handleCloseModal }
            className="bg-red-500 text-white rounded px-2 py-1">
                Close
            </button>
            {
                watchlist.length > 0 ? (
                    <ul className="mt-4">
                    {watchlist.map((movie) => (
                        <li key={movie.id} className="bg-gray-800 p-2 rounded mb-2">
                            <img src={`/assets/imgMovies/${movie.img}.jpg`} className='w-16 h-16 inline-block mr-2' alt={movie.img}/>
                            <span className="text-white">{movie.name}</span>
                        </li>
                    ))}
                    </ul>
                ) : (
                    <p>empty</p>
                )
            }
        </div>
    )
}

export default WatchlistModal