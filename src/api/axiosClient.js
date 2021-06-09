import axios from 'axios'
let token = localStorage.getItem("token")
export const axiosClient = axios.create({
    baseURL: 'http://localhost:4000/api',
    headers: {
        // 'Content-Type': 'application/json',
        'Content-Type': ' multipart/form-data',
       
        Authorization: `Bearer ${token}`
    },
});