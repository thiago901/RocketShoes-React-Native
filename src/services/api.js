import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-rocketshoes01.herokuapp.com',
});

export default api;

// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'https://api.github.com',
// });
// export default api;
