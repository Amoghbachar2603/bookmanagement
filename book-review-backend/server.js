const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON data

// 📌 Test Route - Check if the server is running
app.get("/", (req, res) => {
    res.send("📚 Book Review API is running!");
});

// 📌 Test Database Connection
app.get("/test-db", async (req, res) => {
    try {
        const result = await pool.query("SELECT NOW() as current_time");
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send("Database connection failed!");
    }
});

// 📌 Get All Books
app.get("/books", async (req, res) => {
    try {
        const books = await pool.query("SELECT * FROM books");
        res.json(books.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching books");
    }
});

// 📌 Get a Single Book by ID
app.get("/books/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const book = await pool.query("SELECT * FROM books WHERE id = $1", [id]);

        if (book.rows.length === 0) {
            return res.status(404).send("Book not found");
        }
        res.json(book.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching book details");
    }
});

// 📌 Add a New Book
app.post("/books", async (req, res) => {
    try {
        const { title, author } = req.body;
        const newBook = await pool.query(
            "INSERT INTO books (title, author) VALUES ($1, $2) RETURNING *",
            [title, author]
        );
        res.status(201).json(newBook.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error adding book");
    }
});

// 📌 Get Reviews for a Specific Book
app.get("/reviews/:book_id", async (req, res) => {
    try {
        const { book_id } = req.params;
        const reviews = await pool.query("SELECT * FROM reviews WHERE book_id = $1", [book_id]);
        res.json(reviews.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching reviews");
    }
});

// 📌 Submit a New Review
app.post("/reviews", async (req, res) => {
    try {
        const { book_id, user_name, rating, review_text } = req.body;
        const newReview = await pool.query(
            "INSERT INTO reviews (book_id, user_name, rating, review_text) VALUES ($1, $2, $3, $4) RETURNING *",
            [book_id, user_name, rating, review_text]
        );
        res.status(201).json(newReview.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error submitting review");
    }
});

// 📌 Get User Profile (Mock Example)
app.get("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await pool.query("SELECT * FROM users WHERE id = $1", [id]);

        if (user.rows.length === 0) {
            return res.status(404).send("User not found");
        }
        res.json(user.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching user profile");
    }
});

// 📌 Update User Profile (Mock Example)
app.put("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;

        const updatedUser = await pool.query(
            "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
            [name, email, id]
        );

        if (updatedUser.rows.length === 0) {
            return res.status(404).send("User not found");
        }
        res.json(updatedUser.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating user profile");
    }
});

// Start the Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
