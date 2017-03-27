// @flow

import { ACTIVE_BOOK } from './type';

type Action = {
	type: ACTIVE_BOOK,
	book: Object
};

export const activeBook = (book: Object): Action=> {
	return {
		type: ACTIVE_BOOK,
		book
	}
};