import React from 'react'
import { Demo } from './components/Demo'
import { Topbar } from './scenes/navbars/Topbar'
import { Routes, Route } from 'react-router-dom'
import { Dashboard } from './scenes/dashboard/Dashboard';
import { Sidebar } from './scenes/navbars/Sidebar';
import { Employees } from './scenes/employees/Employees'
import { Students } from './scenes/students/Students'
import { Classes } from './scenes/classes/Classes'
import { Attendance } from './scenes/attendance/Attendance'
import { Usersection } from './scenes/usersection/Usersection'
import { Documentation } from './scenes/documentation/Documentation'


// App.jsx Used to wrap all components and rendered by main.jsx
const App = () => {
  return (
    <div className='app'>
      <Sidebar />
      
      <main className='content'>
        <Topbar />
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/employees' element={<Employees/>}/>
          <Route path='/students' element={<Students/>}/>
          <Route path='/classes' element={<Classes/>}/>
          <Route path='/attendance' element={<Attendance/>}/>
          <Route path='/usersection' element={<Usersection/>}/>
          <Route path='/documentation' element={<Documentation/>}/>
        </Routes>
      </main>
      
    </div>
  )
}

export default App