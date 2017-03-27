// @flow

import { ACTIVE_BOOK } from '../actions/type';

type State = {
	book: Object
};

type Action = {
	type: ACTIVE_BOOK,
	book: Object
};

export default (state: ?State = null,  action: Action)=> {
	switch(action.type){
		case ACTIVE_BOOK:
			return action.book;
	}
	return state;
}