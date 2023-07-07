import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Dashboard from '../../pages/Dashboard'
import Inventory from '../../pages/Inventory'
import Order from '../../pages/Order'
import Customer from '../../pages/Customer'
const AppRoutes = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/inventory' element={<Inventory/>}/>
        <Route path='/orders' element={<Order/>}/>
        <Route path='/customers' element={<Customer/>}/>
      </Routes>
      
    </div>
  )
}

export default  AppRoutes