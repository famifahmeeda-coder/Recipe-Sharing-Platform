
import React, { useEffect, useState } from "react"

import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import SearchBar from "../components/SearchBar"
import Loading from "../components/Loading"
import FilterPanel from "../components/FilterPanel"
import RecipeCard from "../components/RecipeCard"
import Footer from "../components/Footer"

import API from "../api/axios"

const Home = () => {
  const [recipes, setRecipes] = useState([])

  const [searchTerm, setSearchTerm] = useState("")
  const [cuisine, setCuisine] = useState("")
  const [diet, setDiet] = useState("")
  const [difficulty, setDifficulty] = useState("")

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await API.get("/recipes")

        setRecipes(
          response.data.data.map((recipe) => ({
            ...recipe,
            id: recipe._id
          }))
        )
      } catch (error) {
        setError("Sorry, recipes could not be loaded.")
      } finally {
        setLoading(false)
      }
    }

    fetchRecipes()
  }, [])

  const filteredRecipes = recipes.filter((recipe) => {
    const nameMatch = recipe.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())

    const ingredientMatch = recipe.ingredients.some((ingredient) =>
      ingredient.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const searchMatch = nameMatch || ingredientMatch

    const cuisineMatch =
      cuisine === "" || recipe.cuisine === cuisine

    const dietMatch =
      diet === "" || recipe.diet === diet

    const difficultyMatch =
      difficulty === "" || recipe.difficulty === difficulty

    return (
      searchMatch &&
      cuisineMatch &&
      dietMatch &&
      difficultyMatch
    )
  })

  return (
    <>
      <Navbar />
      <Hero />

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <FilterPanel
        cuisine={cuisine}
        setCuisine={setCuisine}
        diet={diet}
        setDiet={setDiet}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
      />

      <main>
        <h1 className="section-title">
          Discover Delicious Recipes
        </h1>

        {loading && <Loading />}

        {!loading && error && (
          <div className="error-message">
            <h2> Something went wrong</h2>
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="recipe-list">
            {filteredRecipes.length > 0 ? (
              filteredRecipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                />
              ))
            ) : (
              <div className="no-results">
                <h2> No recipes found</h2>
                <p>
                  Try another recipe name or change
                  the filters.
                </p>
              </div>
            )}
          </div>
        )}
      </main>

      <Footer />
    </>
  )
}

export default Home
