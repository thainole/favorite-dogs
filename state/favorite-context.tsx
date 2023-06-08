import { createContext, useContext, useState } from 'react';

interface Context {
  state: {
    favorites: string[];
  };
  actions: {
    toggleFavorite: (favorite: string) => void;
  };
}

interface Props {
  children: React.ReactNode;
}

const FavoriteContext = createContext({} as Context);

const FavoriteProvider = ({ children }: Props) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (favorite: string) => {
    setFavorites(
      favorites.includes(favorite)
        ? favorites.filter((f) => f !== favorite) // para quitar el fav
        : [...favorites, favorite] // para agregar el fav
    );
  };

  return (
    <FavoriteContext.Provider
      value={{
        state: { favorites },
        actions: { toggleFavorite },
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

const useFavorites = (): [
  Context['state']['favorites'],
  Context['actions']['toggleFavorite']
] => {
  const { state, actions } = useContext(FavoriteContext);
  return [state.favorites, actions.toggleFavorite];
};

export { FavoriteProvider as Provider, useFavorites };
