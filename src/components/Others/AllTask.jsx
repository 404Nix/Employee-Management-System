import React, {useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const authdata = useContext(AuthContext)
    
  return (
    <div className='bg-[#1c1c1c] mt-2 p-5 h-44 rounded overflow-auto'>
        
        {authdata.employees.map((elem, idx) => {

            return <div key={idx} className='flex justify-between bg-red-500 p-2 rounded-md mt-2'>
            <h1>{elem.firstName}</h1>
            <h3>Make a Youtube Video</h3>
            <h5>status</h5>
        </div>
        })}

    
    </div>
  )
}

export default AllTask