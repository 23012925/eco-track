import React, { useState } from 'react';
import './LogActivity.css';

const LogActivity = () => {
  const [activity, setActivity] = useState('');
  const [category, setCategory] = useState('Transport');
  const [log, setLog] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activity.trim() === '') return;

    const newEntry = {
      id: Date.now(),
      text: activity,
      category,
      date: new Date().toLocaleString(),
    };

    setLog([newEntry, ...log]);
    setActivity('');
    setCategory('Transport');
  };

  return (
    <div className="log-container">
      <h2>🌍 Log Your Eco Activity</h2>
      <p>Track your green steps and inspire a sustainable lifestyle!</p>

      <form onSubmit={handleSubmit} className="log-form">
        <textarea
          rows="2"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          placeholder="e.g., Used reusable bags instead of plastic"
          className="log-input"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="log-select"
        >
          <option>Transport</option>
          <option>Energy</option>
          <option>Food</option>
          <option>Recycling</option>
          <option>Water Usage</option>
          <option>Others</option>
        </select>

        <button type="submit" className="log-button">
          ➕ Add Activity
        </button>
      </form>

      <h3 className="log-history-title">📝 Activity History</h3>
      {log.length === 0 ? (
        <p className="log-empty">No activities logged yet. Start logging today!</p>
      ) : (
        <ul className="log-list">
          {log.map((entry) => (
            <li key={entry.id} className="log-item">
              <strong>🗂️ {entry.category}</strong> — {entry.text}
              <div className="log-date">📅 {entry.date}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LogActivity;
