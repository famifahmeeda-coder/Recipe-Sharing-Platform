import React from "react"

const FilterPanel = ({
  cuisine,
  setCuisine,
  diet,
  setDiet,
  difficulty,
  setDifficulty
}) => {
  return (
    <section
      className="filter-panel"
      aria-label="Recipe filters"
    >

    
      <div className="filter-group">

        <label htmlFor="cuisine-filter">
          Cuisine
        </label>

        <select
          id="cuisine-filter"
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
          aria-label="Filter recipes by cuisine"
        >
          <option value="">
            All Cuisine
          </option>

          <option value="Indian">
            Indian
          </option>

          <option value="Italian">
            Italian
          </option>

          <option value="Chinese">
            Chinese
          </option>
        </select>

      </div>


      
      <div className="filter-group">

        <label htmlFor="diet-filter">
          Diet
        </label>

        <select
          id="diet-filter"
          value={diet}
          onChange={(e) => setDiet(e.target.value)}
          aria-label="Filter recipes by diet"
        >
          <option value="">
            All Diet
          </option>

          <option value="Veg">
            Veg
          </option>

          <option value="Non-Veg">
            Non-Veg
          </option>
        </select>

      </div>


      
      <div className="filter-group">

        <label htmlFor="difficulty-filter">
          Difficulty
        </label>

        <select
          id="difficulty-filter"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          aria-label="Filter recipes by difficulty"
        >
          <option value="">
            All Difficulty
          </option>

          <option value="Easy">
            Easy
          </option>

          <option value="Medium">
            Medium
          </option>

          <option value="Hard">
            Hard
          </option>
        </select>

      </div>


      
      {(cuisine || diet || difficulty) && (
        <button
          type="button"
          className="clear-filter-button"
          onClick={() => {
            setCuisine("")
            setDiet("")
            setDifficulty("")
          }}
        >
          Clear Filters
        </button>
      )}

    </section>
  )
}

export default FilterPanel