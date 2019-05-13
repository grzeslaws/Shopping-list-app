import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { accountReducer } from "./account/reducers";
import { authInProgressReducer } from "./auth/reducers";
import { sharingListReducer } from "./sharing/reducers";
import { shoppingListReducer, currentShoppingListReducer } from './shopping-list/reducers';
import { messagesReducer } from './messages/reducers';
import { spinnerReducer } from './spinner/reducers';
import { i18nReducer, checkedLanguageReducer } from './i18n/reducers';

const rootReducer = combineReducers({
	account: accountReducer,
	authInProgress: authInProgressReducer,
	shoppingList: shoppingListReducer,
	currentShoppingList: currentShoppingListReducer,
	sharingList: sharingListReducer,
	messages: messagesReducer,
	spinner: spinnerReducer,
	i18n: i18nReducer,
	checkedLanguage: checkedLanguageReducer
});

export type AppState = ReturnType<typeof rootReducer>;

const configureStore = () => {
	const middlewares = [thunkMiddleware];
	const middleWareEnhancer = applyMiddleware(...middlewares);

	const store = createStore(
		rootReducer,
		composeWithDevTools(middleWareEnhancer)
	);

	return store;
};

export default configureStore;
