import { useState } from "react"
import Header from "./components/Header"
import WatchlistModal from "./components/WatchlistModal"
import MovieList from "./components/MovieList"

function App() {
   const [isModalOpen, setIsModalOpen] = useState(false)
   const [watchlist, setWachlist] = useState([])
  return (
    <>
      <Header setIsModalOpen={setIsModalOpen} />
      <WatchlistModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} watchlist={watchlist} setWatchlist={setWachlist} />
      <MovieList watchlist={watchlist} setWatchlist={setWachlist} />
    </>
  )
}

export default App
