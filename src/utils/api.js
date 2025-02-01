import axios from 'axios';

const API_URL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';

export const fetchCampers = async (filters, page = 1) => {
  try {
    const params = new URLSearchParams();

    const ITEMS_PER_PAGE = 5;

    if (filters.location) params.append('location', filters.location);
    if (filters.form) params.append('form', filters.form);

    if (filters.AC) params.append('AC', 'true');
    if (filters.automatic) params.append('transmission', 'automatic');
    if (filters.petrol) params.append('engine', 'petrol');
    if (filters.kitchen) params.append('kitchen', 'true');
    if (filters.radio) params.append('radio', 'true');
    if (filters.bathroom) params.append('bathroom', 'true');
    if (filters.refrigerator) params.append('refrigerator', 'true');
    if (filters.microwave) params.append('microwave', 'true');
    if (filters.gas) params.append('gas', 'true');
    if (filters.water) params.append('water', 'true');

    params.append('page', page);
    params.append('limit', ITEMS_PER_PAGE);

    const response = await axios.get(`${API_URL}?${params.toString()}`);
    return response.data.items || [];
  } catch (error) {
    console.error('Помилка отримання кемперів:', error);
    return [];
  }
};

export const fetchCamperById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
