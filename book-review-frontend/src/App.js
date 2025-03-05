import React, { useEffect, useState } from "react";
import { getBooks, addBook } from "./api";
import "./App.css";

function App() {
    const [books, setBooks] = useState([]);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    // Fetch all books on component mount
    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        const data = await getBooks();
        setBooks(data);
    };

    const handleAddBook = async (e) => {
        e.preventDefault();
        if (!title || !author) {
            alert("Title and Author are required!");
            return;
        }

        await addBook({ title, author });
        setTitle("");
        setAuthor("");
        fetchBooks(); // Refresh book list
    };

    return (
        <div className="app">
            <h1>📚 Book Review Platform</h1>

            {/* Add Book Form */}
            <form onSubmit={handleAddBook} className="add-book-form">
                <input 
                    type="text" 
                    placeholder="Book Title" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    required 
                />
                <input 
                    type="text" 
                    placeholder="Author" 
                    value={author} 
                    onChange={(e) => setAuthor(e.target.value)} 
                    required 
                />
                <button type="submit">Add Book</button>
            </form>

            {/* Display Books */}
            <h2>📖 Book List</h2>
            <ul>
                {books.length > 0 ? (
                    books.map((book) => (
                        <li key={book.id}>
                            <strong>{book.title}</strong> by {book.author}
                        </li>
                    ))
                ) : (
                    <p>No books available</p>
                )}
            </ul>
        </div>
    );
}

export default App;
