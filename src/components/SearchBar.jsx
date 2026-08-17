import React from "react"

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <section className="search-section" aria-label="Recipe search">

      <div className="search-container">

        <label htmlFor="recipe-search" className="sr-only">
          Search recipes
        </label>

        <input
          id="recipe-search"
          type="search"
          placeholder="🔍 Search by recipe name or ingredient..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search recipes by name or ingredient"
        />

        
        {searchTerm && (
          <button
            type="button"
            className="clear-search"
            onClick={() => setSearchTerm("")}
            aria-label="Clear search"
          >
            ✕
          </button>
        )}

      </div>

    </section>
  )
}

export default SearchBar