const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "book_review_db",
    password: "Amogh#1234", // Replace with your PostgreSQL password
    port: 5432, // Default PostgreSQL port
});

// Test the database connection
pool.connect((err, client, release) => {
    if (err) {
        console.error("Database connection failed!", err);
    } else {
        console.log("✅ Connected to PostgreSQL database!");
        release();
    }
});

module.exports = pool;
