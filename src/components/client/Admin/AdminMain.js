import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from "next/image";

const AdminMain = () => {
  const [cards, setCards] = useState([]);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState(null);

  // Fetch cards from the backend
  const fetchCards = async () => {
    try {
      const response = await axios.get('https://client-ra9o.onrender.com/api/cards');
      setCards(response.data);
    } catch (err) {
      console.error('Error fetching cards:', err);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 10 * 1024 * 1024) {
      alert('File size should be less than 2MB');
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cardData = { name, date, image };

    try {
      await axios.post('https://client-ra9o.onrender.com/api/upload', cardData);
      alert('Client uploaded successfully!');
      fetchCards(); 
    } catch (err) {
      console.error(err);
      alert('Failed to upload');
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this card?')) return;

    try {
      setCards((prevCards) => prevCards.filter((card) => card._id !== id));

      await axios.delete(`https://client-ra9o.onrender.com/api/cards/${id}`);
      alert('Card deleted successfully!');
    } catch (err) {
      console.error('Error deleting card:', err);
      alert('Failed to delete card');

      fetchCards();
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      <header>
        <title>Admin Panel - PK PHOTOGRAPHY</title>
        <meta
          name="description"
          content="Admin panel for managing and uploading wedding cards with names, dates, and images. Easily add, view, and delete wedding card details."
        />
        <meta name="keywords" content="Wedding Cards, Admin Panel, Upload Cards, Manage Cards" />
        <meta name="author" content="Your Name" />
      </header>

      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4 mt-12">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="block w-full px-3 py-2 border border-gray-300 rounded-md"
            aria-label="Wedding card name"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="block w-full px-3 py-2 border border-gray-300 rounded-md"
            aria-label="Wedding card date"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
            required
            className="block w-full"
            aria-label="Wedding card image upload"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Upload
        </button>
      </form>

      <div>
        <h2 className="text-lg font-bold mb-4">Uploaded Cards</h2>
        {cards.map((card) => (
          <article
            key={card._id}
            className="mb-4 p-4 border border-gray-300 rounded-md"
          >
            <h3 className="text-md font-bold">{card.name}</h3>
            <p className="text-sm text-gray-600">{card.date}</p>
            <Image
              src={card.image}
              alt={`Wedding card for ${card.name}`}
              className="w-full h-32 object-cover mt-2"
            />
            <button
              onClick={() => handleDelete(card._id)}
              className="mt-2 px-4 py-2 bg-red-600 text-white rounded-md"
            >
              Delete
            </button>
          </article>
        ))}
      </div>
    </div>
  );
};

export default AdminMain;
