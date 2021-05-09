import React from "react";
import PropTypes from "prop-types";

import Book from "./Book";

const BookShelf = props => {
  const { books, bookControl } = props;

  return (
    <ol className="books-grid">
      {books.map(book => (
        <Book book={book} key={book.id} books={books} bookControl={bookControl} />
      ))}
    </ol>
  );

  BookShelf.propTypes = {
    books: PropTypes.array.isRequired,
    bookControl: PropTypes.func.isRequired
  };
};

export default BookShelf;
