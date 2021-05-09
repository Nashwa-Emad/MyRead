import React from "react";
import PropTypes from "prop-types";

import BookShelf from "./BookShelf";


class BookGroup extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    bookControl: PropTypes.func.isRequired
  };

  render() {
    const { books, bookControl } = this.props;

    
    const bookShelfs = [
      { type: "currentlyReading", title: "Currently Reading" },
      { type: "wantToRead", title: "Want to Read" },
      { type: "read", title: "Read" }
    ];

    return (
      <div className="list-books-content">
        {bookShelfs.map((shelf, index) => {
          const shelfBooks = books.filter(book => book.shelf === shelf.type);

          return (
            <div className="bookshelf" key={index}>
              <h2 className="bookshelf-title">{shelf.title}</h2>
              <div className="bookshelf-books">
                <BookShelf books={shelfBooks} bookControl={bookControl} />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default BookGroup;
