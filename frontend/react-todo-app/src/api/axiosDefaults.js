import axios from "axios";

//axios.defaults.baseURL = 'https://todo-bianca-9a72e771f0e2.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true

export const axiosReq = axios.create();
export const axiosRes = axios.create();