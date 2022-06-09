import React, {useState, useEffect} from 'react';
import { getFilterCategory } from '../api';
import {useParams} from "react-router-dom"
import Loader from '../Loader';
import MealsList from '../MealsList';

function Category(props) {

    const [meals, setMeals] = useState([]);
    const {name} = useParams();

    useEffect(() => {
        getFilterCategory(name).then(data => {
            setMeals(data.meals)
        })
    }, [])

    return (
        <div>
            {!meals.length ? <Loader/> : <MealsList meals={meals} />}
        </div>
    );
}

export default Category;