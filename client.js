const axios = require('axios');

const query = `
  query {
    hello
  }
`;

axios.post('http://localhost:3000/graphql', { query })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

