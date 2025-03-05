import axios from "axios";

const API_URL = "http://localhost:5000"; // Backend URL

// Fetch all books from backend
export const getBooks = async () => {
    try {
        const res = await axios.get(`${API_URL}/books`);
        return res.data;
    } catch (error) {
        console.error("Error fetching books:", error);
        return [];
    }
};

// Get book details by ID
export const getBookDetails = async (id) => {
    try {
        const res = await axios.get(`${API_URL}/books/${id}`);
        return res.data;
    } catch (error) {
        console.error("Error fetching book details:", error);
        return null;
    }
};

// Add a new book
export const addBook = async (book) => {
    try {
        const res = await axios.post(`${API_URL}/books`, book);
        return res.data;
    } catch (error) {
        console.error("Error adding book:", error);
    }
};

// Fetch reviews for a book
export const getReviews = async (book_id) => {
    try {
        const res = await axios.get(`${API_URL}/reviews/${book_id}`);
        return res.data;
    } catch (error) {
        console.error("Error fetching reviews:", error);
        return [];
    }
};

// Submit a new review
export const addReview = async (review) => {
    try {
        const res = await axios.post(`${API_URL}/reviews`, review);
        return res.data;
    } catch (error) {
        console.error("Error adding review:", error);
    }
};
