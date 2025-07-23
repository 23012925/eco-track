import React from 'react';
import './EcoTips.css';

const ecoTips = [
  { category: 'Energy Saving', tips: [
    "💡 Switch to LED light bulbs to save energy.",
    "📴 Unplug devices when not in use.",
    "🔋 Use energy-efficient appliances.",
    "🌞 Make use of natural light during the day.",
    "📉 Set thermostat a few degrees lower in winter."
  ] },
  { category: 'Water Conservation', tips: [
    "🚿 Take shorter showers (5 mins max).",
    "🛠️ Fix leaky taps and pipes promptly.",
    "🌧️ Collect rainwater for gardening.",
    "🍽️ Run dishwashers only when full.",
    "🪣 Use a bucket instead of hose for washing cars."
  ] },
  { category: 'Waste Reduction', tips: [
    "♻️ Recycle paper, plastics, metals and electronics.",
    "🛍️ Carry a reusable shopping bag.",
    "📦 Reuse packaging material.",
    "🍌 Compost food scraps at home.",
    "🚯 Avoid single-use plastics."
  ] },
  { category: 'Sustainable Living', tips: [
    "🌱 Grow your own herbs or vegetables.",
    "🚴 Use bicycles or public transport.",
    "👕 Buy clothes made from natural fibers.",
    "🥦 Eat more locally grown, plant-based food.",
    "🐾 Support eco-friendly businesses."
  ] },
  { category: 'Digital Impact', tips: [
    "📧 Unsubscribe from unnecessary emails.",
    "🌐 Limit unnecessary cloud storage usage.",
    "🔌 Turn off Wi-Fi routers at night.",
    "🎮 Reduce time spent on power-hungry devices.",
    "📱 Extend the life of your gadgets before replacing them."
  ] }
];

const EcoTips = () => {
  return (
    <div className="eco-tips-container">
      <h2 className="eco-title">🌍 Eco-Friendly Tips</h2>
      {ecoTips.map((section, index) => (
        <div key={index} className="eco-section">
          <h3 className="eco-category">{section.category}</h3>
          <ul className="eco-list">
            {section.tips.map((tip, i) => (
              <li key={i} className="eco-item">{tip}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default EcoTips;
