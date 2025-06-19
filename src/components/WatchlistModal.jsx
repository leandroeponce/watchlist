import EmptyCard from "./EmptyCard"
import WatchlistCard from "./WatchlistCard"

function WatchlistModal({ isModalOpen, setIsModalOpen, watchlist, setWatchlist }) {

    const handleCloseModal = () => setIsModalOpen(false)
    if (!isModalOpen) return null

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 w-11/14 max-w-md relative">
            <button 
            onClick={ handleCloseModal }
            className="bg-red-500 hover:bg-red-600 hover:cursor-pointer text-white rounded px-2 py-1 absolute top-2 right-2">
                Close
            </button>
            {
                watchlist.length > 0 ? (
                    <ul className="mt-4">
                    {watchlist.map((movie) => (
                        <WatchlistCard key={movie.id} movie={movie} watchlist={watchlist} setWatchlist={setWatchlist}/>
                    ))}
                    </ul>
                ) : (
                    <EmptyCard /> 
                )
            }
            </div>
        </div>
    )
}

export default WatchlistModal