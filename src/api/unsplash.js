import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID e97cc16ab84636f75f322c690e21b7f9b885603c0974433d6f5d203f3d50adc7'
  }
})
