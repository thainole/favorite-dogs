'use client';
import { useFavorites } from '@/state/favorite-store';

// import { useFavorites } from '@/state/favorite-context';

const FavoritableImage = ({ src }: { src: string }) => {
  // const [favorites, toggleFavorites] = useFavorites();

  const favorites = useFavorites((state) => state.favorites);
  const toggleFavorites = useFavorites((state) => state.toggleFavorites);

  const isFavorite = favorites.includes(src);

  return (
    <div className="relative">
      <img className="w-full h-64 object-cover" src={src} alt="dog" />
      <button
        className={`absolute w-8 h-8 bottom-4 right-4 text-2xl rounded-full bg-white flex items-center justify-center ${
          isFavorite ? 'text-yellow-300' : 'text-gray-300'
        }`}
        onClick={() => toggleFavorites(src)}
      >
        {isFavorite ? '★' : '☆'}
      </button>
    </div>
  );
};

export default FavoritableImage;
