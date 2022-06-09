import React, {useState, useEffect} from 'react';
import {useParams, useHistory} from "react-router-dom"
import { getMailById } from './api';
import Loader from './Loader';

function Recipe(props) {

    const [recipe, setRecipe] = useState([]);
    const {id} = useParams()
    const {goBack} = useHistory()

    useEffect(() => {
        getMailById(id).then(data => setRecipe(data.meals[0]))
    }, [])

    return (
        <>
            {!recipe.idMeal ? <Loader/> : (
                <div className="recipe">
                    <img style={{width: "700px", height: "550px"}} src={recipe.strMealThumb} alt={recipe.strMeal} />
                    <h5>Title: {recipe.strMeal}</h5>
                    <p>Category: {recipe.strCategory}</p>
                    <span style={{marginBottom: "20px"}}>{recipe.strInstructions}</span>
                    <iframe width="600px" height="300px" src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} allowFullScreen frameborder="0"></iframe>
                    <button style={{marginTop: "10px"}} onClick={goBack} className="btn">Goo back</button>
                </div>
            )}
        </>
    );
}

export default Recipe;