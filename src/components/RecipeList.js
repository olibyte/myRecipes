import React from 'react';

const RecipeList = (props) => (
    <div style={props.style}>
        <h2>Recipes</h2>
        <ul>
            <li>
                <span>Cupcakes</span>
                <span>Dessert</span>
            </li>
            <li>
                <span>Coffee Cake</span>
                <span>Dessert</span>

            </li>
            <li>
                <span>Amazing Pork</span>
                <span>Main</span>
            </li>
        </ul>
    </div>
);

export default RecipeList;