import React from "react"
import { Link } from "react-router-dom"
import { useFavorites } from "../context/FavoritesContext"

const Favorites = () => {
  const {
    favorites,
    removeFromFavorites
  } = useFavorites()

  return (
    <div>

      <h1>❤️ My Favorite Recipes</h1>

      <Link to="/">
        <button>← Back to Home</button>
      </Link>

      {favorites.length === 0 ? (
        <h2>No favorite recipes yet.</h2>
      ) : (
        favorites.map((recipe) => (
          <div key={recipe.id}>

            <img
              src={recipe.image}
              alt={recipe.name}
              width="250"
            />

            <h2>{recipe.name}</h2>

            <p>⭐ {recipe.rating}</p>

            <p>🍽️ {recipe.cuisine}</p>

            <p>⏱️ {recipe.cookingTime} mins</p>

            <Link to={`/recipe/${recipe.id}`}>
              <button>
                View Recipe
              </button>
            </Link>

            <button
              onClick={() =>
                removeFromFavorites(recipe.id)
              }
            >
              Remove Favorite
            </button>

          </div>
        ))
      )}

    </div>
  )
}

export default Favorites