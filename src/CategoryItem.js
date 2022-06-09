import React from 'react';
import {Link} from "react-router-dom";

function CategoryItem({idCategory, strCategory, strCategoryThumb, strCategoryDescription}) {
    return (
        <div key={idCategory} className="card">
            <div className="card-image">
                <img src={strCategoryThumb} alt={strCategory} />
            </div>
            <div className="card-content">
                <p>{strCategoryDescription.slice(0, 60)}...</p>
            </div>
            <div className="card-action">
                <Link className="link"  to={`/category/${strCategory}`}>{strCategory}</Link>
            </div>
        </div>
    );
}

export default CategoryItem;