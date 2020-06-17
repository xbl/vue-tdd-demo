import axios from 'axios';

const login = (user) => axios.post('/users/token', user);

export default {
  login,
};
