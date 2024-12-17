import React, { useState } from 'react';
import './styles.css'; 

const FoodTracker = ({ addCalorieItem }) => {
  const [dailyCalorieGoal, setDailyCalorieGoal] = useState(2000);
  const [foods, setFoods] = useState({
    breakfast: [],
    lunch: [],
    dinner: [],
    snacks: []
  });
  const [newFood, setNewFood] = useState({
    name: '',
    calories: '',
    meal: 'breakfast'
  });

  const calculateTotalCaloriesConsumed = () => {
    return Object.values(foods).flat().reduce((total, food) => 
      total + parseFloat(food.calories), 0);
  };

  const calculateRemainingCalories = () => {
    const consumedCalories = calculateTotalCaloriesConsumed();
    return dailyCalorieGoal - consumedCalories;
  };

  const addFood = () => {
    if (newFood.name && newFood.calories) {
      const newFoodItem = { 
        name: newFood.name, 
        calories: parseFloat(newFood.calories) 
      };
      setFoods(prev => ({
        ...prev,
        [newFood.meal]: [
          ...prev[newFood.meal], 
          newFoodItem
        ]
      }));
      addCalorieItem(newFoodItem);
      setNewFood({ name: '', calories: '', meal: 'breakfast' });
    }
  };

  return (
    <div className="card">
      <h2>Daily Nutrition Tracker</h2>
      <div>
        <h3>Calories Remaining: {calculateRemainingCalories()}</h3>
        <input 
          type="number" 
          placeholder="Daily Calorie Goal" 
          value={dailyCalorieGoal}
          onChange={(e) => setDailyCalorieGoal(e.target.value)}
        />
      </div>

      <div className="grid-container">
        <input 
          placeholder="Food Name" 
          value={newFood.name}
          onChange={(e) => setNewFood(prev => ({
            ...prev, 
            name: e.target.value
          }))}
        />
        <input 
          type="number" 
          placeholder="Calories" 
          value={newFood.calories}
          onChange={(e) => setNewFood(prev => ({
            ...prev, 
            calories: e.target.value
          }))}
        />
        <select 
          value={newFood.meal}
          onChange={(e) => setNewFood(prev => ({
            ...prev, 
            meal: e.target.value
          }))}
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snacks">Snacks</option>
        </select>
      </div>
      <button onClick={addFood} className="add-food">Add Food</button>

      {Object.entries(foods).map(([meal, foodList]) => (
        <div key={meal}>
          <h4>{meal}</h4>
          {foodList.map((food, index) => (
            <div key={index} className="food-item">
              <span>{food.name}</span>
              <span>{food.calories} cal</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FoodTracker;
