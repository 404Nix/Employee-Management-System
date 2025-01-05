import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className="h-full w-[300px] bg-yellow-500 rounded-xl shrink-0 p-3">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 p-2 rounded-xl text-xs">{data.category}</h3>
          <h4 className="text-sm">{data.taskDate}</h4>
        </div>
        <h1 className="text-xl font-semibold mt-5">{data.taskTitle}</h1>
        <p className="text-sm mt-3">{data.description}
        </p>
        <div className='mt-4 text-sm'>
            <button className='w-1/3 px-2 py-1 bg-red-500'>Failed</button>
        </div>
      </div>
  )
}

export default FailedTask