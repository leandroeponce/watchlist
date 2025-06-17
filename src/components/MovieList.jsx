import  movies  from '../api/movies.json'

function MovieList( { watchlist, setWatchlist } ) {
    const addToWatchlist = (movie) => {
        setWatchlist([...watchlist, movie])
    }
    return (
        <div>
            {
                movies.map((movie) => (
                    <div key={movie.id} className="p-4 border-b border-gray-200">
                        <h2 className="text-xl font-bold">{movie.name}</h2>
                        <img src={`/assets/imgMovies/${movie.img}.jpg`} className='w-70' alt={movie.img } />
                        <button
                        onClick={() => addToWatchlist(movie)}
                        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                            Add to Watchlist
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

export default MovieList