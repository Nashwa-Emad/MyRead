import React from "react";
import PropTypes from "prop-types";

import BookControl from "./BookControl";

import BookCoverError from "../icons/image-unavailable-icon.jpg";


const Book = props => {
  const { book, books, bookControl } = props;


  const bookCover =
    book.imageLinks && book.imageLinks.thumbnail
      ? book.imageLinks.thumbnail
      : BookCoverError;
  const bookTitle = book.title ? book.title : "Title Unavailable";
  const bookAuthors = book.authors
    ? Array.isArray(book.authors)
      ? book.authors.join(", ")
      : ""
    : "Author Unavailable";

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
    width: 128, 
    height: 193,
              backgroundImage: `url(${bookCover})`
            }}
          />
          <BookControl book={book} books={books} bookControl={bookControl} />
        </div>
        <div className="book-title">{bookTitle}</div>
        <div className="book-authors">{bookAuthors}</div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  bookControl: PropTypes.func.isRequired
};

export default Book;
