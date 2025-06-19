function WatchlistCard({watchlist, setWatchlist, movie}) {

    const handleRemoveMovie = (movieId) => {
        setWatchlist((prevWatchlist) => prevWatchlist.filter(movie => movie.id !== movieId))
        localStorage.setItem("watchlist", JSON.stringify(watchlist.filter(movie => movie.id !== movieId)))
    }

    return(
        <li key={movie.id} className="bg-gray-500 p-2 rounded mb-2 flex items-start h-30 overflow-hidden">
            <img src={`/assets/imgMovies/${movie.img}.jpg`} className='w-18 h-full' alt={movie.img}/>
            <div className="flex-1 px-4">
                <span className="text-white text-2xl font-semibold line-clamp-2 pr-6">{movie.name}</span>
            </div>
            <button 
                className="bg-red-600 hover:bg-red-700 hover:cursor-pointer text-white px-2 rounded float-right"
                onClick={() => handleRemoveMovie(movie.id)}
                >
                X
            </button>
        </li>
)}

export default WatchlistCard