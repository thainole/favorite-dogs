import { create } from 'zustand';

interface State {
  favorites: string[];
  toggleFavorites: (image: string) => void;
}

// export const useFavorites = create<State>((set) => ({
//   favorites: [],
//   toggleFavorites: (image: string) =>
//     set(({ favorites }) => ({
//       favorites: favorites.includes(image)
//         ? favorites.filter((favorite) => favorites.includes(image))
//         : favorites.concat(image),
//     })),
// }));

/* With Local Storage */
export const useFavorites = create<State>((set) => ({
  favorites: JSON.parse(window.localStorage.getItem('favorites') || '[]'),
  toggleFavorites: (image: string) =>
    set(({ favorites }) => {
      const selectedFavorites = favorites.includes(image)
        ? favorites.filter((favorite) => favorites.includes(image))
        : favorites.concat(image);

      window.localStorage.setItem(
        'favorites',
        JSON.stringify(selectedFavorites)
      );

      return { favorites: selectedFavorites };
    }),
}));
