import React, { useEffect,useState } from 'react'
import {Menu} from 'antd'
import {AppstoreOutlined,ShoppingCartOutlined,ShopOutlined,UserOutlined} from '@ant-design/icons'
import { useLocation, useNavigate } from 'react-router-dom'

const SideMenu = () => {
   const location = useLocation()
   const navigate = useNavigate()
   const [ selectedKeys,setSelectedKeys] = useState('/')

   useEffect(()=>{
          const pathName=location.pathname
          setSelectedKeys(pathName)
   },[location.pathname])
  return (
    <div className='sideMenu'>
      <Menu
        className='sideMenuVertical'
        mode='vertical'
        onClick={(item)=>{
          navigate(item.key)
        }}
        selectedKeys={[selectedKeys,]}
         items={
          [
            {
              label: 'Dashboard',
              icon:<AppstoreOutlined/>,
              key:'/'
            },
            {
              label: 'Inventory',
              key:'/inventory',
              icon:<ShopOutlined/>
            },
            {
              label: 'Orders',
              key:'/orders',
              icon:<ShoppingCartOutlined/>
            },
            {
              label: 'Customers',
              key:'/customers',
              icon:<UserOutlined/>
            }
           
          ]

         } 
         
         
         >

      </Menu>
      







    </div>
  )
}

export default SideMenu