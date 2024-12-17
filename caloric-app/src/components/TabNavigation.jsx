import React from "react";

const TabNavigation = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tab-navigation">
      <button
        className={`tab-button ${activeTab === "food" ? "active" : ""}`}
        onClick={() => setActiveTab("food")}
      >
        Food Tracker
      </button>
      <button
        className={`tab-button ${activeTab === "workout" ? "active" : ""}`}
        onClick={() => setActiveTab("workout")}
      >
        Workout Tracker
      </button>
      <button
        className={`tab-button ${activeTab === "summary" ? "active" : ""}`}
        onClick={() => setActiveTab("summary")}
      >
        Summary
      </button>
    </div>
  );
};

export default TabNavigation;
