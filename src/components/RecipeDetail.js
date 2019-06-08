import React from 'react';

const RecipeDetail = (props) => (
    <div style={props.style}>
        <h2>Cupcake</h2>
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dd7224b7-e4df-494c-a6ed-71ec0489d092/d1hvgzm-fd61dde9-8c0c-408b-82fb-cc7efebab69b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RkNzIyNGI3LWU0ZGYtNDk0Yy1hNmVkLTcxZWMwNDg5ZDA5MlwvZDFodmd6bS1mZDYxZGRlOS04YzBjLTQwOGItODJmYi1jYzdlZmViYWI2OWIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.nKSgjA39MU6e2m6PSIjI-OUtaKBRe7bp5EbOt4h0Ktg"/>
        <div>
            <span>Dessert</span>
            <span>1200 cal</span>
        </div>
        <h3>Ingredients</h3>
         <div>
             <ul>
        <li>Ingredient 1</li>
        <li>Ingredient 2</li>
        <li>Ingredient 3</li>
         </ul>
         </div>
         
        <h3>Steps</h3>
        <div>
        <ol>
        <li>Step 1</li>
        <li>Step 2</li>
        <li>Step 3</li>
        </ol>
        </div>
    </div>
);

export default RecipeDetail;