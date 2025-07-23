// Leaderboard.js
import React, { useState } from 'react';
import './Leaderboard.css';

const leaderboardData = {
  Weekly: [
    { name: 'Janarthanan', carbon: 21.5, water: 130 },
    { name: 'Riya Sharma', carbon: 18.3, water: 120 },
    { name: 'Rahul Das', carbon: 15.9, water: 110 },
    { name: 'Anika Roy', carbon: 14.2, water: 100 },
  ],
  Monthly: [
    { name: 'Riya Sharma', carbon: 82.1, water: 530 },
    { name: 'Janarthanan', carbon: 75.5, water: 490 },
    { name: 'Rahul Das', carbon: 69.8, water: 460 },
    { name: 'Tanya Jain', carbon: 64.3, water: 440 },
    { name: 'Suresh Kumar', carbon: 60.7, water: 420 },
  ],
  AllTime: [
    { name: 'Janarthanan', carbon: 260.5, water: 1500 },
    { name: 'Riya Sharma', carbon: 250.2, water: 1480 },
    { name: 'Priya Mehta', carbon: 240.7, water: 1440 },
    { name: 'Mohit Verma', carbon: 233.1, water: 1390 },
    { name: 'Rahul Das', carbon: 225.6, water: 1370 },
  ],
};

const getMedal = (index) => ['🥇', '🥈', '🥉'][index] || `${index + 1}`;

const Leaderboard = () => {
  const [timeframe, setTimeframe] = useState('Weekly');
  const [searchTerm, setSearchTerm] = useState('');

  const users = leaderboardData[timeframe];
  const maxCarbon = Math.max(...users.map((u) => u.carbon));
  const maxWater = Math.max(...users.map((u) => u.water));

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="leaderboard-container">
      <h2 className="leaderboard-title">🏆 Leaderboard Overview</h2>
      <p className="leaderboard-subtitle">Track top eco warriors across different timeframes</p>

      <div className="leaderboard-controls">
        <div className="tabs">
          {['Weekly', 'Monthly', 'AllTime'].map((tab) => (
            <button
              key={tab}
              className={timeframe === tab ? 'tab active' : 'tab'}
              onClick={() => setTimeframe(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Search by name..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="leaderboard-table">
        <div className="leaderboard-header">
          <div>Rank</div>
          <div>Name</div>
          <div>Carbon Saved (Kg)</div>
          <div>Water Saved (Liters)</div>
        </div>

        {filteredUsers.map((user, index) => (
          <div className="leaderboard-row" key={index}>
            <div>{getMedal(index)}</div>
            <div>{user.name}</div>
            <div>
              <div className="bar-container">
                <div
                  className="carbon-bar"
                  style={{ width: `${(user.carbon / maxCarbon) * 100}%` }}
                ></div>
              </div>
              <span>{user.carbon}</span>
            </div>
            <div>
              <div className="bar-container">
                <div
                  className="water-bar"
                  style={{ width: `${(user.water / maxWater) * 100}%` }}
                ></div>
              </div>
              <span>{user.water}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;