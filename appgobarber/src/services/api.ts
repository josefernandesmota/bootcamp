import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

//baseURL: 'http://10.0.2.2:8081',
//baseURL: 'http://localhost:3333',
export default api;