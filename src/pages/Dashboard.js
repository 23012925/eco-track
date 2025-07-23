import React from 'react';
import ChartComponent from '../components/ChartComponent';
import mockData from '../data/mockData';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Welcome to EcoTrack Dashboard</h1>
      <p className="subtitle">Here's your estimated carbon footprint breakdown</p>

      <div className="cards">
        <div className="card green">
          <h3>Carbon Saved</h3>
          <p>23.5 kg</p>
        </div>
        <div className="card blue">
          <h3>Water Saved</h3>
          <p>187 L</p>
        </div>
        <div className="card yellow">
          <h3>Eco Activities</h3>
          <p>12 Logged</p>
        </div>
      </div>

      <div className="chart-container">
        <h2>Footprint Breakdown</h2>
        <ChartComponent data={mockData} />
      </div>
    </div>
  );
};

export default Dashboard;
