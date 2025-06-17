const Header = ({ setIsModalOpen }) => {
    const handleOpenModal = () => setIsModalOpen(true)
    
    return (
        <header className="bg-blue-600 text-white p-4">
            <button className="bg-blue-400 text-white font-bold py-2 px-4 rounded hover:bg-amber-200 hover:text-blue-950" onClick={handleOpenModal}>
                Show Watchlist
            </button>
        </header>
    )
}

export default Header