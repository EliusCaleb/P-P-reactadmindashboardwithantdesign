import React, { useState, useEffect } from "react";
import { Typography, Card, Space, Statistic, Table } from "antd";
import { getOrders } from "../api/data";
import {
  ShoppingCartOutlined,
  DollarCircleOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";

const Dashboard = () => {
  return (
    <div>
      <Space size={20} direction="vertical">
        <Typography.Title level={4}>Dashboard </Typography.Title>
        <Space direction="horizontal">
          <DashboardCard
            icon={
              <ShoppingCartOutlined
                style={{
                  color: "green",
                  background: "rgba(0,255,0,0.5)",
                  borderRadius: 12,
                  fontWeight: 32,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={"Orders"}
            value={12345}
          />
          <DashboardCard
            icon={
              <ShoppingOutlined
                style={{
                  color: "blue",
                  background: "rgba(0,0,255,0.5)",
                  borderRadius: 12,
                  fontWeight: 32,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={"Inventory"}
            value={12345}
          />
          <DashboardCard
            icon={
              <UserOutlined
                style={{
                  color: "purple",
                  background: "rgba(0,255,255,0.25)",
                  borderRadius: 12,
                  fontWeight: 32,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={"Customers"}
            value={12345}
          />
          <DashboardCard
            icon={
              <DollarCircleOutlined
                style={{
                  color: "red",
                  background: "rgba(255,0,0,0.5)",
                  borderRadius: 12,
                  fontWeight: 32,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={"Revenue"}
            value={12345}
          />
        </Space>
        <Space>
          <RecentOrders />
        </Space>
      </Space>
    </div>
  );
};
function DashboardCard({ title, value, icon }) {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}

function RecentOrders() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      console.log(res.products);
      setDataSource(res?.products.splice(0,4));
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Typography.Text style={{fontWeight:'bold'}}>Recent Orders</Typography.Text>
      <Table
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
          },
          {
            title: "Price",
            dataIndex: "discountedPrice",
          },
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={false}
      ></Table>
    </>
  );
}

export default Dashboard;
