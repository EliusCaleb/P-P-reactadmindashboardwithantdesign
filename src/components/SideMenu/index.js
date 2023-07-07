import React from 'react'
import {Menu} from 'antd'
import {AppstoreOutlined,ShoppingCartOutlined,ShopOutlined,UserOutlined} from '@ant-design/icons'

const SideMenu = () => {
  return (
    <div className='sideMenu'>
      <Menu
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