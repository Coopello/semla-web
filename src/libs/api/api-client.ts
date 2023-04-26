/* eslint-disable @typescript-eslint/naming-convention */
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://qiita.com",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

export { axiosInstance as axios };
