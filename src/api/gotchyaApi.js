import axios from "axios";

const gotchya = axios.create({
  baseURL: "http://13.58.39.193/api",
});

export default gotchya;
