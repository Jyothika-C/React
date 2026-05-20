// import axios from "axios";
// import { configs } from "eslint-plugin-react-hooks";
// const api=axios.create({
//     baseURL:'http://localhost:8000'
// });
// api.interceptors.request.use((config)=>{
//     const token=localStorage.getItem('access_token');
//     if(token){
//         config.headers.Authorization=`Bearer ${token}`;
//     }
//     return config;
// },
// (error)=>{
//     return Promise.reject(error);
// }
// );
// export default api;


import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000",
});

api.interceptors.request.use(
    (config) => {

        const token = localStorage.getItem("access_token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },

    (error) => {
        return Promise.reject(error);
    }
);

export default api;