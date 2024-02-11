import axios from "axios";

const instance = axios.create({
    baseURL: 'https://go-smartchoice-production.up.railway.app',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;