import axios from "axios";

// openapi --input http://localhost:8080/api/v3/api-docs --output ./generated --client axios
axios.defaults.withCredentials = true;
axios.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);