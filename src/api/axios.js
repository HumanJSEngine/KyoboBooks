import axios from "axios";
const instance = axios.create({
  baseURL: "",
  params: {
    api_key: 3000,
    a: "hello",
  },
});
export default instance;
