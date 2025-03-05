import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookDetails, addReview } from "../api";

const BookDetails = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [reviewText, setReviewText] = useState("");
    const [rating, setRating] = useState(5);

    useEffect(() => {
        getBookDetails(id).then(data => {
            setBook(data.book);
            setReviews(data.reviews);
        });
    }, [id]);

    const handleReviewSubmit = async () => {
        const newReview = await addReview({ book_id: id, user_name: "Guest", rating, review_text: reviewText });
        setReviews([...reviews, newReview]);
        setReviewText(""); // Clear input after submission
    };

    return (
        <div>
            {book ? (
                <>
                    <h1>{book.title}</h1>
                    <p>By {book.author}</p>
                    <h2>Reviews</h2>
                    {reviews.length === 0 ? <p>No reviews yet.</p> : 
                        reviews.map(r => <p key={r.id}><strong>{r.user_name}:</strong> {r.review_text} ({r.rating}⭐)</p>)
                    }
                    <h3>Add a Review</h3>
                    <textarea value={reviewText} onChange={(e) => setReviewText(e.target.value)} />
                    <button onClick={handleReviewSubmit}>Submit</button>
                </>
            ) : <p>Loading...</p>}
        </div>
    );
};

export default BookDetails;
