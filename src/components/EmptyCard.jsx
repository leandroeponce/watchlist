function EmptyCard() {
  return (
    <div className="flex flex-col items-center justify-center text-gray-600 p-6">
      <span className="text-6xl mb-4">🎬</span>
      <p className="text-lg text-center font-semibold">Your watchlist is empty</p>
      <p className="text-sm text-center">No movies yet... but the night is young! 🍿</p>
    </div>
  );
}

export default EmptyCard;
