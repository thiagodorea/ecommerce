import axios from "axios";

const api = axios.create({
    baseURL: 'https://api-products-dh-next.vercel.app/',
    authURL:'https://api-products-dh-next.vercel.app/auth'
})

export default api;