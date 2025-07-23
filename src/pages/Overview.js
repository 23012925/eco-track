// Overview.js
import React from 'react';
import './Overview.css';

const overviewData = [
  { icon: "📊", label: "Total Activities Logged", value: "123 activities" },
  { icon: "💧", label: "Water Saved", value: "245 Liters" },
  { icon: "🌿", label: "Carbon Offset", value: "18.7 Kg CO₂" },
  { icon: "🔥", label: "Weekly Streak", value: "4 Days Active" },
  { icon: "♻️", label: "Recycled Items", value: "89 Items" },
  { icon: "🌞", label: "Solar Hours Logged", value: "12 hrs" },
  { icon: "🚲", label: "Green Transport", value: "36 Rides" },
  { icon: "🌱", label: "Trees Planted", value: "3 Saplings" },
];

const Overview = () => {
  return (
    <div className="overview-container">
      <h2 className="overview-title">🌍 Environmental Overview</h2>
      <p className="overview-subtitle">
        Track your sustainable journey and impact below
      </p>

      <div className="overview-grid">
        {overviewData.map((item, index) => (
          <div key={index} className="overview-card">
            <h3>{item.icon} {item.label}</h3>
            <p className="metric">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
