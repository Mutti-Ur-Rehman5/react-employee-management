import React from 'react';

const TaskListNumber = ({ data }) => {
  const cardStyle = `rounded-xl py-6 px-6 text-white shadow-lg transform transition-all duration-300 hover:scale-105`;

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10'>

      {/* New Task */}
      <div className={`${cardStyle} bg-blue-500`}>
        <h2 className='text-4xl font-bold mb-2'>{data.taskCounts.newTask}</h2>
        <p className='text-lg font-medium tracking-wide'>🆕 New Task</p>
      </div>

      {/* Completed Task */}
      <div className={`${cardStyle} bg-green-500`}>
        <h2 className='text-4xl font-bold mb-2'>{data.taskCounts.completed}</h2>
        <p className='text-lg font-medium tracking-wide'>✅ Completed</p>
      </div>

      {/* Accepted Task */}
      <div className={`${cardStyle} bg-yellow-400 text-black`}>
        <h2 className='text-4xl font-bold mb-2'>{data.taskCounts.active}</h2>
        <p className='text-lg font-medium tracking-wide'>📥 Accepted</p>
      </div>

      {/* Failed Task */}
      <div className={`${cardStyle} bg-red-500`}>
        <h2 className='text-4xl font-bold mb-2'>{data.taskCounts.failed}</h2>
        <p className='text-lg font-medium tracking-wide'>❌ Failed</p>
      </div>

    </div>
  );
};

export default TaskListNumber;
