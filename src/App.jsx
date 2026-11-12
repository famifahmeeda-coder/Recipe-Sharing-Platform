import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import RecipeDetails from './pages/RecipeDetails'
import Favorites from './pages/Favorites'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/recipe/:id" element={<RecipeDetails />} />

        <Route path="/favorites" element={<Favorites />} />

        <Route path="*" element={<NotFound />} />

         <Route path="/login" element={<Login />} />

         <Route path="/register" element={<Register />} />


       
      </Routes>
    </BrowserRouter>
  
      
    </div>
  )
}

export default App
