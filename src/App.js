import React from "react";
import { Route, Link } from "react-router-dom";

import BookGroup from "./components/BookGroup";
import Search from "./components/Search";

import * as BooksAPI from "./BooksAPI";

import "./App.css";

class BooksApp extends React.Component {
  state = { books: [] };

  bookControl = (bookNew, newShelf) => {
    BooksAPI.update(bookNew, newShelf).then(response => {
      bookNew.shelf = newShelf;
      var updatedBooks = this.state.books.filter(
        book => book.id !== bookNew.id
      );
      updatedBooks.push(bookNew);
      this.setState({ books: updatedBooks });
    });
  };

    componentDidMount() {
        BooksAPI.getAll().then(books => {
            this.setState({ books });
        });
    }
  render() {
    const { books } = this.state;
    return (
      <div className="app">
        {/* Book Shelf Page */}
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <BookGroup books={books} bookControl={this.bookControl} />
              <div className="open-search">
                <Link to="/search">Search</Link>
              </div>
            </div>
          )}
        />

        {/* Search Page */}
        <Route
          path="/search"
          render={({ history }) => (
            <Search books={books} bookControl={this.bookControl} />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
