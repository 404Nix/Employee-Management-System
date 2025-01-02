import React, { useEffect } from 'react'
import Login from './components/Auth/login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'

export const App = () => {
  useEffect(() => {
    setLocalStorage();
    getLocalStorage();
  },)
  
  return (
    <>
    <Login/>
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard /> */}
    </>
  )
}
