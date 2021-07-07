import React, { useContext } from 'react';
import { CategoryContext } from '../../../../App';

const CategoryDetail = () => {
    
    const category = useContext(CategoryContext);
    return (
        <div>
            <h1>This is grand grand children:</h1>
            <p>This is : {category}</p>
        </div>
    );
};

export default CategoryDetail;