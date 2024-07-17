import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bfea090f4cc6413e9141d7a9a0960bcc",
  },
});
