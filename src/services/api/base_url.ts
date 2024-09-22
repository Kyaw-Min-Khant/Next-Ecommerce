import axios from 'axios';
const BASE_URL = axios.create({
    baseURL: 'https://fakestoreapi.com/',
  });
  
  export default BASE_URL