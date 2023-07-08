import React, { useState, useEffect } from "react";
import {  Typography, Space, Table } from "antd";
import { getOrders } from "../api/data";

const Order = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      console.log(res);
      setDataSource(res?.products);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      <Space size={20} direction="vertical">
        <Typography.Title level={4}>Orders </Typography.Title>
        <Table
          columns={[
            
            {
              title: "Title",
              dataIndex: "title",
            },
            {
              title: "Price",
              dataIndex: "price",
              render: (value) => <span>${value}</span>,
            },
            {
              title: "DiscountedPrice",
              dataIndex: "discountedPrice",
              render: (value) => <span>${value}</span>,

              
            },
            {
              title: "Quantity",
              dataIndex: "quantity",
            },
            {
              title: "Total",
              dataIndex: "total",
            },
          ]}
          loading={loading}
          dataSource={dataSource}
          pagination={false}
          key={dataSource.id}
        ></Table>
      </Space>
    </div>
  );
};

export default Order;
