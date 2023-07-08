import React,{useEffect,useState} from 'react';
import {Image,Typography,Space, Badge,List, Drawer} from 'antd'
import { BellFilled, MailOutlined } from "@ant-design/icons";
import { getComments,getOrders } from '../../api/data';

const AppHeader = () => {
  const [comments,setComments] = useState([])
  const [orders,setOrders] = useState([])
  const [commentsOpen, setCommentsOpen]= useState(false)
  const [notificationOpen, setNotificationOpen]= useState(false)
  useEffect(()=>{
    
     getComments().then(
        (res) =>{
            setComments(res.comments.splice(0, 13))
        }
    )  
    getOrders().then(
      (res) =>{
          setOrders(res.products)
      }
  )    
},[])
  return (
    <div className='appHeader'>
        <Image
          width={40}
          src={'https://thumbs.dreamstime.com/b/zoo-concept-driver-man-jeep-car-isolated-illustration-219055248.jpg'}>

        </Image>
        <Typography.Title>PHONES & PERFUMES</Typography.Title>
        <Space>
          <Badge count={comments.length} dot>
          <MailOutlined style={{fontSize:24}} onClick={()=> setCommentsOpen(true)}/>
          </Badge>
          <Badge count={orders.length}> 
          <BellFilled style={{fontSize:24}} onClick={()=> setNotificationOpen(true)}/>

          </Badge>
         
        </Space>
        <Drawer title='Comments' open={commentsOpen}
        onClose={() => {
          setCommentsOpen(false);
        }}
        maskClosable>
          
          <List
          dataSource={comments}
          renderItem={(item) => {
            return <List.Item>{item.body}</List.Item>;
          }}
        ></List>

          
        </Drawer>

       <Drawer title='Notification' open={notificationOpen}
        onClose={() => {
          setNotificationOpen(false);
        }}
        maskClosable>
          <List
          dataSource={orders}
          renderItem={(item) => {
            return (
              <List.Item>
                <Typography.Text strong>{item.title}</Typography.Text> has been
                ordered!
              </List.Item>
            );
        
          }}
        ></List>
        </Drawer>


    </div>
  )
}

export default AppHeader