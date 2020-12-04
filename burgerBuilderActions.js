import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = (name) => {
	return {
		type: actionTypes.ADD_INGREDIENT,
		ingredientName: name
	};
};

export const removeIngredient = (name) => {
	return {
		type: actionTypes.REMOVE_INGREDIENT,
		ingredientName: name
	};
};

export const setIngredients = (ingredients) => {
	return {
		type: actionTypes.SET_INGREDIENTS,
		ingredients: ingredients
	};
};

export const fetchIngredientsFailed = () => {
	return {
		type: actionTypes.FETCH_INGREDIENTS_FAILED
	};
};

export const initIngredients = () => {
	//return() receives the dispatch
	return dispatch => {
		//Go to the BurgerBuilder.js file.
		//Go to the componentDidMount()
		//Cut the code below console.log()
		//Paste it here
		axios.get( 'https://react-my-burger-b5a40.firebaseio.com/ingredients.json' )
			.then( response => {
				dispatch(setIngredients(response.data));
			} )
			.catch( error => {
				dispatch(fetchIngredientsFailed())
			} );
	};
};