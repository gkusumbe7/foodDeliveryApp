import axios from "axios";
const API  = axios.create({
    baseURL:"www.themealdb.com/api/json/v1/",
})
export default API;