import React from "react";
import PropTypes from "prop-types";

const BookControl = props => {
  const { book, books, bookControl } = props;
  let bookShelf = "none";

  for (let item of books) {
    if (item.id === book.id) {
      bookShelf = item.shelf;
      break;
    }
  }

  return (
    <div className="book-shelf-changer">
      <select
        onChange={event => bookControl(book, event.target.value)}
        defaultValue={bookShelf}
      >
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Already Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

BookControl.propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  bookControl: PropTypes.func.isRequired
};

export default BookControl;
