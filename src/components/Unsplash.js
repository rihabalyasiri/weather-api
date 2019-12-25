import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: ' Client-ID 5ec0f30e90227c6868bdcf2ba852ead95dcf7cb32f1bcc52c5ccef2233f9bfab'
      }
})