import React from 'react'

const TaskOverview = () => {
  return (
    <div className='flex justify-between mt-10 gap-5'>
        <div className='w-[45%] bg-red-500 px-6 py-9 rounded-xl'>
            <h2 className='text-3xl font-bold'>0</h2>
            <h3 className='text-2xl font-semibold'>New Task</h3>
        </div>
        <div className='w-[45%] bg-emerald-500 px-6 py-9 rounded-xl'>
            <h2 className='text-3xl font-bold'>0</h2>
            <h3 className='text-2xl font-semibold'>New Task</h3>
        </div>
        <div className='w-[45%] bg-blue-500 px-6 py-9 rounded-xl'>
            <h2 className='text-3xl font-bold'>0</h2>
            <h3 className='text-2xl font-semibold'>New Task</h3>
        </div>
        <div className='w-[45%] bg-yellow-400 px-6 py-9 rounded-xl'>
            <h2 className='text-3xl font-bold'>0</h2>
            <h3 className='text-2xl font-semibold'>New Task</h3>
        </div>
    </div>
  )
}

export default TaskOverview