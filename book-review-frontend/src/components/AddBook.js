import React, { useState } from "react";
import { addBook } from "../api";

const AddBook = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addBook({ title, author });
        alert("Book added!");
        setTitle("");
        setAuthor("");
    };

    return (
        <div>
            <h2>Add a New Book</h2>
            <form onSubmit={handleSubmit}>
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
        </div>
    );
};

export default AddBook;
