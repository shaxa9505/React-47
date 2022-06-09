import React from 'react';
import {Link} from "react-router-dom"

function MealsItem(props) {

    const {strMeal, strMealThumb, idMeal} = props

    return (
        <div key={idMeal} className="card">
            <div className="card-image">
                <img src={strMealThumb} alt={strMeal} />
            </div>
            <div className="card-action">
                <Link className="link" to={`/recipe/${idMeal}`}>{strMeal}</Link>
            </div>
        </div>
    );
}

export default MealsItem;