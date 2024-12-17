import React, { useState } from "react";
import TabNavigation from "./TabNavigation";
import FoodTracker from "./FoodTracker";
import WorkoutTracker from "./WorkoutTracker";
import Summary from "./Summary";
import "./styles.css";
import Header from "./Header";
const App = () => {
  const [activeTab, setActiveTab] = useState("food");

  // State to manage food and workout data
  const [calorieData, setCalorieData] = useState([]);
  const [workoutData, setWorkoutData] = useState([]);

  // Functions to update the calorie and workout data
  const addCalorieItem = (foodItem) => {
    setCalorieData((prevData) => [...prevData, foodItem]);
  };

  const addWorkoutItem = (workoutItem) => {
    setWorkoutData((prevData) => [...prevData, workoutItem]);
  };

  // Render content based on the active tab
  const renderContent = () => {
    if (activeTab === "food") {
      return <FoodTracker addCalorieItem={addCalorieItem} />;
    } else if (activeTab === "workout") {
      return <WorkoutTracker addWorkoutItem={addWorkoutItem} />;
    } else {
      return <Summary calorieData={calorieData} workoutData={workoutData} />;
    }
  };

  return (
    <div className="App">
      <Header />  {/* Include the Header component here */}
      <div className="container">
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        {renderContent()}
      </div>
    </div>
  );
};

export default App;
