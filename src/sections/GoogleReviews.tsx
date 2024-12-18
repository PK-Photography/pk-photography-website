import React, { useEffect, useState } from "react";
import axios from "axios";

interface Review {
  author_name: string;
  rating: number;
  text: string;
  time: string;
}

const GoogleReviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [error, setError] = useState<string | null>(null);

  const apiKey = "AIzaSyCZv3XS3cicdPsznsJG7QxF1O_nQWSGoSM"; // Replace with your Google API Key
  const placeId = "6MEUy1hNRRxrxVJcA"; // Replace with the actual Place ID of the locationhttps://maps.app.goo.gl/6MEUy1hNRRxrxVJcA

  const fetchReviews = async () => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`
      );

      const reviewsData = response.data.result.reviews || [];
      setReviews(reviewsData);
    } catch (err: any) {
      setError(
        "Failed to fetch reviews. Please check your API key and Place ID."
      );
      console.error(err);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Google Reviews</h1>
      {error && <p className="text-red-500">{error}</p>}
      {reviews.length > 0 ? (
        <div>
          {reviews.map((review, index) => (
            <div key={index} className="p-4 border-b border-gray-200">
              <h2 className="font-semibold">{review.author_name}</h2>
              <p className="text-sm text-gray-500">Rating: {review.rating}/5</p>
              <p className="mt-2">{review.text}</p>
              <p className="text-xs text-gray-400 mt-1">{review.time}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No reviews found.</p>
      )}
    </div>
  );
};

export default GoogleReviews;
