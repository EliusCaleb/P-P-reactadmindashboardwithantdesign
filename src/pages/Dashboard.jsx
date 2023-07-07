import React, { useState, useEffect } from "react";
import { Typography, Card, Space, Statistic, Table } from "antd";
import { getOrders, getRevenue } from "../api/data";
import {
  ShoppingCartOutlined,
  DollarCircleOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
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
          <DashboardChart />
        </Space>
      </Space>
    </div>
  );
};
//card on the upperpart of the dashboard
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
//recentorders
function RecentOrders() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      console.log(res);
      setDataSource(res?.products.splice(0, 4));
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Typography.Text style={{ fontWeight: "bold" }}>
        Recent Orders
      </Typography.Text>
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
        key={dataSource.id}
        pagination={false}
      ></Table>
    </>
  );
}
//charts bargraph

function DashboardChart() {
  const [revenueData, setRevenueData] = useState({
    labels: [],
    datasets: [],
  });
  useEffect(() => {
    getRevenue().then((res) => {
      const labels = res.carts.map((cart) => {
        return `User ${cart.userId}`;
      });
      const data = res.carts.map((cart) => {
        return cart.discountedTotal;
      });

      const dataSource = {
        labels,
        datasets: [
          {
            label: "Renegade",
            data: data,
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
          {
            label: "Compass",
            data: data,
            backgroundColor: "rgba(53, 162, 235, 0.5)",
          },
        ],
      };

      setRevenueData(dataSource);
    });
  }, []);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "P&P Revenue Bar Chart",
      },
    },
  };

  return (
    <>
      <Card style={{ width: 600, height: 350, marginLeft: 5, padding: 3 }}>
        <Bar options={options} data={revenueData} />;
      </Card>
    </>
  );
}
export default Dashboard;
