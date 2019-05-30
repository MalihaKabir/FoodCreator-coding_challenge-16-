import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from '../Components/Recipe';
import Scroll from '../Components/Scroll';

const App = () => {
	// CAUTION !!!
	// DO NOT USE THESE "appID" AND "appKey" GIVEN BELOW. BECAUSE THESE ARE UNIQUE FOR EVERY USERS(IP Address)!
	// SO, To get your own "appID" and "appKey" for your own website/app,
	// > kindly go to "https://www.edamam.com/"
	// > then Sign Up for 'Recipe Search API'
	// > after signing up, go to "Dashboard" option
	// > then go to "Applications"
	// > and lastly, from there, click "view". Simple :)
	// You'll get your own Application ID & Application Key.
	// CAUTION !!!
	const appID = 'YourOwnApiID';
	const appKey = 'YourOwnApiKey';

	const [ recipes, setRecipes ] = useState([]);
	const [ search, setSearch ] = useState('');
	const [ query, setQuery ] = useState('ice-cream');

	useEffect(
		() => {
			getRecipes();
		},
		[ query ]
	);

	const getRecipes = async () => {
		const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${appID}&app_key=${appKey}`);
		const data = await response.json();
		setRecipes(data.hits);
	};

	const updateSearch = (event) => {
		setSearch(event.target.value);
	};

	const getSearch = (event) => {
		event.preventDefault();
		setQuery(search);
		setSearch('');
	};

	return (
		<div className="App tc pb5">
			<form onSubmit={getSearch} className="search-form pt5">
				<input
					type="text"
					placeholder="Search Your Favourite Recipes . . ."
					className="search-bar br2 pa3 ph4 mt2 mr3 mb4 bw2 shadow-5"
					value={search}
					onChange={updateSearch}
				/>
				<button type="submit" className="search-button br2 pa3 ph4 mt2 mb4 bw2 shadow-5">
					Search
				</button>
			</form>
			<Scroll>
				{!recipes.length ? (
					<div>
						<h1 className="f2">Loading... </h1>
						<p className="f4">
							(kindly make sure you've given the correct name of a food item if it takes too much time to
							render your desired items...)
						</p>
					</div>
				) : (
					<div className="all-recipes">
						{recipes.map((rcp, i) => (
							<Recipe
								key={i}
								title={rcp.recipe.label}
								calories={rcp.recipe.calories}
								img={rcp.recipe.image}
								ingredients={rcp.recipe.ingredients}
							/>
						))}
					</div>
				)}
			</Scroll>
		</div>
	);
};

export default App;
