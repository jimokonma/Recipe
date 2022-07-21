import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContexProvder({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  const addFavorite = (id) => {
    return setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
  };
  const removeFavorite = (id) => {
    setFavoriteMealIds((currentFavIds) => {
      return currentFavIds.filter((mealId) => {
        return mealId !== id;
      });
    });
  };

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContexProvder;
