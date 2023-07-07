import React from 'react';
import {Image,Typography,Space, Badge} from 'antd'
import { BellFilled, MailOutlined } from "@ant-design/icons";

const AppHeader = () => {
  return (
    <div className='appHeader'>
        <Image
          width={40}
          src={'https://thumbs.dreamstime.com/b/zoo-concept-driver-man-jeep-car-isolated-illustration-219055248.jpg'}>

        </Image>
        <Typography.Title>PHONES & PERFUMES</Typography.Title>
        <Space>
          <Badge count={10} dot>
          <MailOutlined style={{fontSize:24}}/>
          </Badge>
          <Badge count={20}> 
          <BellFilled style={{fontSize:24}}/>

          </Badge>
         
        </Space>

      









    </div>
  )
}

export default AppHeader