import axios from "axios";
// access token - токен доступа
// refresh token - токен который оживляет access token

const createAxios = () =>
  axios.create({
    baseURL: "https://edu-market.online/api/v1",
  });

const $mainApi = createAxios(); // for public endpoints
const $authApi = createAxios(); // for private

$authApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { $mainApi, $authApi };
