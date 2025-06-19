import { useState } from "react"
import Header from "./components/Header"
import WatchlistModal from "./components/WatchlistModal"
import MovieList from "./components/MovieList"

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [watchlist, setWatchlist] = useState(() => {
    const savedWatchlist = localStorage.getItem("watchlist")
    return savedWatchlist ? JSON.parse(savedWatchlist) : [];
  } ) 
  return (
    <>
      <Header setIsModalOpen={setIsModalOpen} />
      <WatchlistModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} watchlist={watchlist} setWatchlist={setWatchlist} />
      <MovieList watchlist={watchlist} setWatchlist={setWatchlist} />
    </>
  )
}

export default App
