import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.fda.gov/drug/ndc.json?limit=10',
});

export const fetchProducts = async () => {
  const { data } = await api.get('');
  return data?.results || [];
};
