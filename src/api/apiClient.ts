import axios, { AxiosRequestConfig } from "axios";

const key = import.meta.env.VITE_RAWG_API_KEY;

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key }
});

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (id: string) => {
    return axiosInstance
      .get<T>(`${this.endpoint}/${id}`)
      .then((res) => res.data);
  };
}

export default ApiClient;
