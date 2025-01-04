import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import React from 'react'
import AuthProvider from './context/AuthProvider'

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <App />
        </AuthProvider>
    </React.StrictMode>
)
