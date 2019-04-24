import React from 'react';
import '../Containers/App.css';

const Recipe = ({ title, calories, img, ingredients }) => {
	return (
		<div className="recipe-card dib br3 pa3 ma3 grow bw2 shadow-5">
			<h2 className="tc f3">{title}</h2>
			<p className="tc">
				<span className="f4">Calories:</span> {calories}
			</p>
			<h3 className="f4">Ingredients:</h3>
			<ol className="tl">{ingredients.map((ingredient, i) => <li key={i}>{ingredient.text}</li>)}</ol>
			<img src={img} alt="RecipeImage" className="tc br3" />
		</div>
	);
};

export default Recipe;
