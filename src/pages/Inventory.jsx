import React, { useState, useEffect } from "react";
import { Avatar, Rate, Typography, Space, Table } from "antd";
import { getInventory } from "../api/data";

const Inventory = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getInventory().then((res) => {
      console.log(res);
      setDataSource(res?.products);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      <Space size={20} direction="vertical">
        <Typography.Title level={4}>Inventory </Typography.Title>
        <Table
          columns={[
            {
              title: "Thumbnail",
              dataIndex: "thumbnail",
              render: (link) => {
                return <Avatar src={link} />;
              },
            },
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
              title: "Rating",
              dataIndex: "rating",
              render: (rating) => {
                return <Rate value={rating} allowHalf disabled />;
              },
            },
            {
              title: "Stock",
              dataIndex: "stock",
            },
            {
              title: "Brand",
              dataIndex: "brand",
            },
            {
              title: "Category",
              dataIndex: "category",
            },
          ]}
          loading={loading}
          dataSource={dataSource}
          pagination={{
            pageSize:6
          }}
          key={dataSource.id}
        ></Table>
      </Space>
    </div>
  );
};

export default Inventory;
