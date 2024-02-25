import axios from "axios";

const instancerealcount = axios.create({
    baseURL: 'https://sirekap-kpu.heirro.dev',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instancerealcount;