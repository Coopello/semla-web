/* eslint-disable @typescript-eslint/naming-convention */
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://qiita.com",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * @package
 */
export { axiosInstance as axios };
