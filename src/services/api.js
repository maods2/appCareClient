import axios from 'axios';

const api = axios.create({
    baseURL: 'https://appsaudebackend.herokuapp.com/'
})

export default api;