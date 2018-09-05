import axios from 'axios';

export const handleTokenData = async token => {
  const response = await axios.post('/api/stripe', token);
  return response;
};
