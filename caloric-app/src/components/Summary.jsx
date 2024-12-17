import React from "react";

const Summary = ({ calorieData, workoutData }) => {
  const totalCalories = calorieData.reduce((total, item) => total + item.calories, 0);
  const workoutCount = workoutData.length;

  return (
    <div>
      <h2>Summary</h2>
      <p><strong>Total Calories:</strong> {totalCalories}</p>
      <p><strong>Total Workouts:</strong> {workoutCount}</p>
      <h3>Food Summary:</h3>
      <ul>
        {calorieData.map((item, index) => (
          <li key={index}>{item.name} - {item.calories} cal</li>
        ))}
      </ul>
      <h3>Workout Summary:</h3>
      <ul>
        {workoutData.map((item, index) => (
          <li key={index}>{item.workoutName} - {item.duration} min - {item.caloriesBurned} kcal</li>
        ))}
      </ul>
    </div>
  );
};

export default Summary;
