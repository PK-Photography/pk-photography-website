import { useRouter } from 'next/router';
import ClientHome from '../../components/ClientHome';
import { useEffect, useState } from 'react';
import axiosInstance from '../../utils/axiosConfig';

const ClientPage = () => {
  const router = useRouter();
  const { id } = router.query; // Extract the card ID from the URL
  const [card, setCard] = useState(null);

  useEffect(() => {
    const fetchCardData = async () => {
      if (id) {
        try {
          const { data } = await axiosInstance.get(`/cards/${id}`);
          setCard(data);
        } catch (error) {
          console.error('Error fetching card data:', error);
        }
      }
    };

    fetchCardData();
  }, [id]);

  if (!card) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Pass card data to ClientHome */}
      <ClientHome card={card} />
    </div>
  );
};

export default ClientPage;
