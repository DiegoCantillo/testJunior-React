import axios from "axios";


const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export const getAllPublications = () => {
    const response = axios.get(BASE_URL);
    return response;
}