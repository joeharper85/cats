import axios from "axios";

export default axios.create({
  baseURL: "https://api.thecatapi.com/v1",
  headers: {
    "x-api-key": "f32a3a1a-4b58-4c1d-972d-68b3d17200eb",
  },
});
