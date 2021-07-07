import React, { useContext } from 'react';
import Categories from './Categories/Categories';
import { CategoryContext } from '../../App';

const Home = () => {
     const category = useContext(CategoryContext)
    return (
         <div>
            <h2>This is home: {category}</h2>
            <Categories ></Categories>
        </div>
    );
};

export default Home;