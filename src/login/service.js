import axios from 'axios';

const login = (user) => axios.post(null, user);
export default {
  login,
};
