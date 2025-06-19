import { useState, useEffect } from 'react'

function MovieCard({ movie, watchlist, setWatchlist }) {
  const [isAdded, setIsAdded] = useState(false)

  useEffect(()=> {
    const alreadyAdded = watchlist.some(addedMovie => addedMovie.id === movie.id)
    setIsAdded(alreadyAdded)
  }, [watchlist, movie.id])

  const addToWatchlist = () => {
    if(isAdded) return
    const updatedList = [...watchlist, movie]
    setWatchlist(updatedList)
    localStorage.setItem("watchlist", JSON.stringify(updatedList))
    setIsAdded(true)
  }

  return (
    <div className="bg-gray-600 p-4 rounded shadow-md text-center">
      <img src={`/assets/imgMovies/${movie.img}.jpg`} alt={movie.img} className='mb-2'/>
      <h2 className="text-xl font-bold text-white">{movie.name}</h2>
      <button
        onClick={addToWatchlist}
        className= {`mt-4 px-4 py-2 rounded transition-colors duration-300 ${
          isAdded
          ? "bg-green-500 text-white cursor-default"
          : "bg-blue-500 text-white hover:bg-blue-700 hover:cursor-pointer"
        }`} 
      >
        {isAdded ? "Added" : "Add to Watchlist"}
      </button>
    </div>
  )
}

export default MovieCard
