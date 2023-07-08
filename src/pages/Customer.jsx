import React, { useState, useEffect } from "react";
import { Avatar, Typography, Space, Table } from "antd";
import { getCustomers} from "../api/data";

const Customer = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCustomers().then((res) => {
      console.log(res);
      setDataSource(res?.users);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      <Space size={20} direction="vertical">
        <Typography.Title level={4}>Customers </Typography.Title>
        <Table
          columns={[
            {
              title: "Profile",
              dataIndex: "image",
              render: (link) => {
                return <Avatar src={link} />;
              },
            },
            {
              title: "First Name",
              dataIndex: "firstName",
            },
            {
                title: "Last Name",
                dataIndex: "lastName",
              },
            {
              title: "Address",
              dataIndex: "address",
              render: (address) => <span>{address.address},{address.city}</span>,
            },
            {
              title: "Email",
              dataIndex: "email",
            },
            {
              title: "Phone",
              dataIndex: "phone",
            },
            
          ]}
          loading={loading}
          dataSource={dataSource}
          pagination={{
            pageSize:6
          }}
          
        ></Table>
      </Space>
    </div>
  );
};

export default Customer;
