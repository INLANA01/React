import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://myburger-66d64.firebaseio.com/'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;