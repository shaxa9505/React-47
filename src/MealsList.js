import React from 'react';
import MealsItem from './MealsItem';

function MealsList({meals = []}) {
    return (
        <div className="list">
            {meals.map(item => (
                <MealsItem key={item.idMeal} {...item} />
            ))}
        </div>
    );
}

export default MealsList;