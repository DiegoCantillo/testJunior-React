import axios from "axios";


const BASE_URL = "https://jsonplaceholder.typicode.com/posts";


export const createPublication = (data) => {
    const response = axios.post(BASE_URL, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response;
}