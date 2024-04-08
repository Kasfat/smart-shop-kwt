import axios from "axios";

const ApiData = axios.create({
  baseURL: "https://dummyjson.com",
});

export default ApiData;
