export default async function handler(req, res) {
  const placeId = "ChIJweAY44_O5zsRWG9RzBGE_YY";
  const apiKey = "AIzaSyCZv3XS3cicdPsznsJG7QxF1O_nQWSGoSM";

  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`
  );

  const data = await response.json();
  console.log("✅ Google API full response:", data); // Add this line

  if (data.result?.reviews) {
    res.status(200).json(data.result.reviews);
  } else {
    console.warn("⚠️ No reviews found or invalid structure:", data);
    res.status(200).json([]); // Return empty array to avoid frontend crash
  }
}
