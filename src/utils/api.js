import axios from 'axios'
console.log(process.env.REACT_APP_API_BACKEND_URL);
export const api = axios.create({
    baseURL: process.env.REACT_APP_API_BACKEND_URL,
    headers: {
        'Content-Type':'application/json'
    }
})


const token = localStorage.getItem('shoppingify-user-token')

if (token) {    
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
}
