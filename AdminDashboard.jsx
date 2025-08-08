import React from 'react'
import Eheader from '../others/Eheader'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = (props) => {
    return (
        <div className='h-screen w-full p-7'>
            <Eheader changeUser={props.changeUser} />
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard