import axios from "axios";

const instance = axios.create({
    baseURL: 'https://ad6c-103-28-113-244.ngrok-free.app/',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;