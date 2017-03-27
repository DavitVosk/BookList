// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

type Props= {
	activeBook: { title: string, pages: number },
};

class ActiveBookDetails extends Component {
	props: Props;

	render () {
		const { activeBook } = this.props;

		if ( ! activeBook ) {
			return <div>Select the book to see the details</div>
		} else {
			return (
				<div className="col-sm-8">
					<h2>Book Details</h2>
					<p>Title: {activeBook.title}</p>
					<p>Pages: {activeBook.pages}</p>
				</div>
			)
		}
	}
}

const mapStateToProps = ({ activeBook }) => {
	return { activeBook }
};

export default connect(mapStateToProps)(ActiveBookDetails);