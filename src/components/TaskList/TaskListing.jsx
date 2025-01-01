import React from "react";

const TaskListing = () => {
  return (
    <div
      id="tasklist"
      className="flex py-5 overflow-x-auto gap-5 flex-nowrap items-center justify-start h-[55%] w-full mt-10"
    >
      <div className="h-full w-[300px] bg-red-500 rounded-xl shrink-0 p-3">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 p-2 rounded-xl text-xs">High</h3>
          <h4 className="text-sm">01 jan 2025</h4>
        </div>
        <h1 className="text-xl font-semibold mt-5">Make a youtube video</h1>
        <p className="text-sm mt-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
          ullam minima voluptate autem laborum optio necessitatibus numquam ad,
          repudiandae itaque.
        </p>
      </div>

      <div className="h-full w-[300px] bg-blue-500 rounded-xl shrink-0 p-3">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 p-2 rounded-xl text-xs">High</h3>
          <h4 className="text-sm">01 jan 2025</h4>
        </div>
        <h1 className="text-xl font-semibold mt-5">Make a youtube video</h1>
        <p className="text-sm mt-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
          ullam minima voluptate autem laborum optio necessitatibus numquam ad,
          repudiandae itaque.
        </p>
      </div>

      <div className="h-full w-[300px] bg-green-500 rounded-xl shrink-0 p-3">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 p-2 rounded-xl text-xs">High</h3>
          <h4 className="text-sm">01 jan 2025</h4>
        </div>
        <h1 className="text-xl font-semibold mt-5">Make a youtube video</h1>
        <p className="text-sm mt-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
          ullam minima voluptate autem laborum optio necessitatibus numquam ad,
          repudiandae itaque.
        </p>
      </div>

      <div className="h-full w-[300px] bg-yellow-500 rounded-xl shrink-0 p-3">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 p-2 rounded-xl text-xs">High</h3>
          <h4 className="text-sm">01 jan 2025</h4>
        </div>
        <h1 className="text-xl font-semibold mt-5">Make a youtube video</h1>
        <p className="text-sm mt-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
          ullam minima voluptate autem laborum optio necessitatibus numquam ad,
          repudiandae itaque.
        </p>
      </div>
      
    </div>
    
  );
};

export default TaskListing;
