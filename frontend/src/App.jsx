import React from 'react'
import Home from './components/Home'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex items-center justify-center">
        <Home />
      </div>
    </div>
  )
}

export default App