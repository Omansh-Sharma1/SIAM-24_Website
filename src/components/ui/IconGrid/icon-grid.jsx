import React from "react";
import "./icon-grid.css";
const IconGrid = () => {
  const items = [
    { id: 1, icon: "/path/to/icon1.svg", label: "Innovation" },
    { id: 2, icon: "/path/to/icon2.svg", label: "Research" },
    { id: 3, icon: "/path/to/icon3.svg", label: "Education" },
    { id: 4, icon: "/path/to/icon4.svg", label: "Collaboration" },
    { id: 5, icon: "/path/to/icon5.svg", label: "Growth" },
    { id: 6, icon: "/path/to/icon6.svg", label: "Community" },
  ];

  return (
    <div className="icon-grid-container">
      {items.map((item, index) => (
        <div className="icon-item" key={item.id} data-index={index}>
          <img src={item.icon} alt={item.label} className="icon" />
          <span className="icon-label">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default IconGrid;
