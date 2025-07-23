import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🌱 Welcome to EcoTrack</h1>
      <p style={styles.subtext}>
        Track your daily activities and calculate your <strong>carbon</strong> and <strong>water</strong> footprint.  
        Get smart tips to live more sustainably!
      </p>
      <div style={styles.buttonGroup}>
        <Link to="/dashboard" style={styles.button}>Go to Dashboard</Link>
        <Link to="/log" style={styles.secondaryButton}>Log Activity</Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '60px 20px',
    backgroundColor: '#f0f9f3',
    borderRadius: '12px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#2e7d32',
  },
  subtext: {
    fontSize: '1.2rem',
    color: '#333',
    marginBottom: '30px',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '12px 25px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: '#2196f3',
    color: 'white',
    padding: '12px 25px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
  }
};

export default Home;
