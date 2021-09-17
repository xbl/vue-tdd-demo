import axios from 'axios';

const login = (user) => axios.post('/users/token', user);
const logout = (user) => axios.post(                    '/users/token/revoke', user);
export default {
  login,
};
