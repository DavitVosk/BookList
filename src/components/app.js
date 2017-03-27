import React, { Component } from 'react';
import BookList from './BookList';
import ActiveBookDetails from './ActiveBookDetails';

export default class App extends Component {
  render() {
    return (
      <div className="app">
		  <BookList />
		  <ActiveBookDetails />
	  </div>
    );
  }
}
