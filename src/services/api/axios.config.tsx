import axios from "axios";

const dataServer = axios.create({
  baseURL: "http://localhost:4000",
  timeout: 100000000,
  headers: { Accept: "application/json", "Content-Type": "application/json" },
});

dataServer.interceptors.response.use(
  (response) => response,
  (error) => {
    const { status } = error.response;
    if (status === 401) {
      localStorage.removeItem("user");
      window.location.href = "/login";
      window.location.reload();
    } else {
      return Promise.reject(error);
    }
  }
);

export { dataServer };
