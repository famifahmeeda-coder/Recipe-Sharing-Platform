import React, { createContext, useContext, useEffect, useState } from "react"

const FavoritesContext = createContext()

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites")

    return savedFavorites
      ? JSON.parse(savedFavorites)
      : []
  })

  useEffect(() => {
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );
  }, [favorites])

  const addToFavorites = (recipe) => {
    setFavorites((previousFavorites) => [
      ...previousFavorites,
      recipe
    ])
  }

  const removeFromFavorites = (recipeId) => {
    setFavorites((previousFavorites) =>
      previousFavorites.filter(
        (recipe) => recipe.id !== recipeId
      )
    )
  }

  const isFavorite = (recipeId) => {
    return favorites.some(
      (recipe) => recipe.id === recipeId
    )
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
      }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}

export const useFavorites = () => {
  return useContext(FavoritesContext)
}