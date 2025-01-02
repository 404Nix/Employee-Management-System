import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import React from 'react'
import AuthContext from './context/AuthContext'
import TaskContext from './context/TaskContext'

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthContext>
            <TaskContext>
                <App />
            </TaskContext>
        </AuthContext>
    </React.StrictMode>
)
