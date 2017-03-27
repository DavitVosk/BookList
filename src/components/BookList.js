// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

type
Props = {
	books: Array < Object >,
	activeBook: () => void
};

class BookList extends Component {
	props: Props;

	renderBooks: ()=> number[];

	renderBooks () {
		const { books } = this.props;
		return (
			books.map(book => {
				return (
					<li
						key={book.id}
						className="list-group-item"
						onClick={() => this.props.activeBook(book)}
					>
						{book.title}
					</li>
				)
			})
		)
	}

	render () {
		return (
			<div>
				<ul className="list-group col-sm-4">
					{this.renderBooks()}
				</ul>
			</div>
		)
	}
}

const mapStateToProps = ({ books }) => {
	return { books }
};

export default connect(mapStateToProps, actions)(BookList);