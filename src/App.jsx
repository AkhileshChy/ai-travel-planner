import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreateTripPage from './pages/CreateTripPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create-trip' element={<CreateTripPage />} />
      </Routes>
    </div>
  )
}

export default App
