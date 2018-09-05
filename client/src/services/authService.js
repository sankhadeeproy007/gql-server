import axios from 'axios';

export const fetchUserData = async () => {
  const response = await axios.get('/api/current_user');
  return response;
};

// const fetchUserData = () => {
//   return axios.get('/api/current_user').then(response => {
//     return response;
//   });
// };
