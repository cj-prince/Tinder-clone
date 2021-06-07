import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinderclone-b.herokuapp.com/'
//     baseURL: 'https://localhost;8001'
// })

export default instance;