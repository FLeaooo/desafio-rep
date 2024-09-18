import { useState } from 'react'
import AppRoutes from '@/Route.jsx'
import Footer from '@/components/atomic/atoms/Footer'
import './global.css'
import { AppProvider } from '@/contexts/AppContext';

function App() {
  return (
    <AppProvider>
      <div className="flex flex-col justify-center items-center min-h-screen bg-white">
        <div className="flex bg-[#d3dbb1] min-h-[900px] w-[60%] h-[90%] p-5 justify-center items-center">
          <AppRoutes />
        </div>
          <Footer />
      </div>
    </AppProvider>
  )
}

export default App
