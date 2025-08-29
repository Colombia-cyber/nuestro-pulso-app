import React from 'react'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Nuestro Pulso
          </h1>
          <p className="text-gray-600">
            Una aplicación para monitorear el pulso de nuestra comunidad
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-blue-800 mb-2">
              ¡Bienvenido!
            </h2>
            <p className="text-blue-700 text-sm">
              La aplicación se está ejecutando correctamente y está lista para ser desplegada en Vercel.
            </p>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <span>Construido con</span>
            <span className="font-semibold">React + Vite + Tailwind CSS</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App