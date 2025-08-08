import React from 'react'
import Eheader from '../others/Eheader'
import TaskListNumber from '../others/TaskListNumber'
import Tasklist from '../TaskList/Tasklist'



const EmployeeDashboard = (props) => {

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        
        <Eheader changeUser={props.changeUser} data={props.data}/>
        <TaskListNumber data= {{ taskCounts: props.data.taskCounts }}  />
        <Tasklist data={props.data} />
    </div>
  )
}

export default EmployeeDashboard