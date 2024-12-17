import React, { useState } from "react";
import Button from "./Button";
import "./styles.css";

const WorkoutTracker = ({ addWorkoutItem }) => {
  const [workouts, setWorkouts] = useState([]);
  const [workoutName, setWorkoutName] = useState("");
  const [duration, setDuration] = useState("");
  const [caloriesBurned, setCaloriesBurned] = useState(0);

  const addWorkout = () => {
    if (workoutName && duration && caloriesBurned) {
      const newWorkout = {
        workoutName,
        duration: parseInt(duration),
        caloriesBurned: parseInt(caloriesBurned),
      };
      setWorkouts([...workouts, newWorkout]);
      addWorkoutItem(newWorkout);
      setWorkoutName("");
      setDuration("");
      setCaloriesBurned(0);
    }
  };

  const deleteWorkout = (index) => {
    setWorkouts((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="card">
      <h2>Workout Tracker</h2>
      <div className="grid-container">
        <input
          type="text"
          value={workoutName}
          onChange={(e) => setWorkoutName(e.target.value)}
          placeholder="Enter workout name"
        />
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="Duration (minutes)"
        />
        <input
          type="number"
          value={caloriesBurned}
          onChange={(e) => setCaloriesBurned(e.target.value)}
          placeholder="Calories burned"
        />
        <Button onClick={addWorkout}>Add Workout</Button>
      </div>

      <div>
        <h3>Workouts</h3>
        {workouts.map((workout, index) => (
          <div key={index} className="workout-item">
            <span>
              {workout.workoutName} - {workout.duration} min -{" "}
              {workout.caloriesBurned} kcal
            </span>
            <button
              className="delete-button"
              onClick={() => deleteWorkout(index)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutTracker;
