import { combineReducers } from 'redux';
import BookListReducer from './BookListReducer';
import ActiveBookReducer from './ActiveBookReducer';

const rootReducer = combineReducers({
	books: BookListReducer,
	activeBook: ActiveBookReducer
});

export default rootReducer;
