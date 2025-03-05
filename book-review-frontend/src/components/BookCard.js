import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
    return (
        <div className="book-card">
            <h3><Link to={`/books/${book.id}`}>{book.title}</Link></h3>
            <p>By {book.author}</p>
        </div>
    );
};

export default BookCard;
