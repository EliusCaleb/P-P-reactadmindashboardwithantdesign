import React from 'react'
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import Dashboard from '../../pages/Dashbaord/Dashboard'

const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default  AppRoutes