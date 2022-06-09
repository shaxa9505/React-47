import React, {useState, useEffect} from 'react';
import { getAllCategories } from '../api';
import CategoryList from '../CategoryList';
import Loader from '../Loader';

function Home(props) {

    const [catalog, setCatalog] = useState([]);

    useEffect(() => {
        getAllCategories().then(data => {
            setCatalog(data.categories)
            console.log(data.categories);
        })
    }, [])

    return (
        <div>
            {!catalog.length ? <Loader/> : <CategoryList catalog={catalog} />}
        </div>
    );
}

export default Home;