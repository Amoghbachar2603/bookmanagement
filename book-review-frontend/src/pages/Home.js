import React, { useEffect, useState } from "react";
import { getBooks } from "../api";
import BookCard from "../components/BookCard";

const Home = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks().then(setBooks);
    }, []);

    return (
        <div>
            <h1>📖 Book List</h1>
            {books.length === 0 ? <p>Loading...</p> : books.map((book) => (
                <BookCard key={book.id} book={book} />
            ))}
        </div>
    );
};

export default Home;
