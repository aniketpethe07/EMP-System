import React from 'react'
import Header from '../Others/Header'
import TaskCount from '../Others/TaskCount'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-7 bg-zinc-900 h-screen'>
      <Header/>
      <TaskCount/>
      <TaskList/>
    </div>
  )
}

export default EmployeeDashboard