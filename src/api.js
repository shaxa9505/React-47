import {API_URl} from "./config";

const getMailById = async mealId => {
    const response = await fetch(API_URl + "lookup.php?i=" + mealId);
    return await response.json()           
}

const getAllCategories = async () => {
    const response = await fetch(API_URl + "categories.php")
    return await response.json()
}

const getFilterCategory = async (categoryName) => {
    const response = await fetch(API_URl + "filter.php?c=" + categoryName);
    return await response.json()
}

export {getMailById, getAllCategories, getFilterCategory}