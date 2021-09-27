import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import React from "react";
//componente che si occupa di unire i componenti Mealssummary-AvilableMeals
const Meals=()=>{
    return <React.Fragment>
        <MealsSummary/>
        
        
        <AvailableMeals/>
        
    </React.Fragment>
};

export default Meals;