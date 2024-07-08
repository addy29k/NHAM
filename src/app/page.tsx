import React from "react";
import Layout from "../components/Layout/Layout";

const Home: React.FC = () => {
  return (
    <Layout>
      <h2 className="text-xl mb-4">Dashboard Overview</h2>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white p-4 shadow rounded">
          <h3>Total Assets</h3>
          <p>100</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h3>Assets in Use</h3>
          <p>80</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h3>Assets in Maintenance</h3>
          <p>10</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h3>Total Asset Value</h3>
          <p>$1,000,000</p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
