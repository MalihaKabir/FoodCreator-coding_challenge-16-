import React from 'react';

const ingredientList = ({ ingredients }) => (<ol>
    {ingredients.map = ingredient => (
        <li>{ingredient.text} </li>
    )}
</ol>)

export default ingredientList
