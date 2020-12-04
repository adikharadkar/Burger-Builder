export { addIngredient, removeIngredient, initIngredients } from './burgerBuilderActions';
export { purchaseBurger, purchaseInit, fetchOrders } from './orderActions';
export {
	//this is the auth method we set in the authActions.js file
	auth, logout, setAuthRedirectPath, authCheckState
} from './authActions';