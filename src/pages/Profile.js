import React from 'react';
import './Profile.css';

const Profile = () => {
  const user = {
    name: 'Janarthanan',
    email: 'janarthanan@example.com',
    joinDate: '2024-06-01',
    totalActivities: 25,
    totalCarbonSaved: 78.5,
    totalWaterSaved: 120,
    avatar: 'https://i.ibb.co/5Y4dxRR/avatar-eco.png', // You can replace with a local image or another eco avatar
  };

  return (
    <div className="profile-container">
      <h2>🌿 EcoWarrior Profile</h2>

      <div className="profile-card">
        <img src={user.avatar} alt="User Avatar" className="profile-avatar" />

        <div className="profile-info">
          <h3>{user.name}</h3>
          <p className="profile-email">📧 {user.email}</p>
          <p>🗓️ Joined on: {user.joinDate}</p>

          <hr />

          <p><strong>🌱 Total Activities:</strong> {user.totalActivities}</p>
          <p><strong>🌍 Carbon Saved:</strong> {user.totalCarbonSaved} kg</p>
          <p><strong>💧 Water Saved:</strong> {user.totalWaterSaved} liters</p>

          <div className="profile-quote">
            “Small actions lead to big changes. Keep going green!”
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
