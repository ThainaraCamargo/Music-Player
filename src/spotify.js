import axios from "axios";

const authEndpoint = "https://account.spotify.com/authorize?";
const clientId =  "c8b06653580843d8add7ba1cb034c8aa";
const redirectUri = "https://localhost:3000";
const scopes = ["user-library-read", "playlist-read-private"];


export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;
  
  // const apiClient = axios.create({
  //   baseURL: "https://api.spotify.com/v1/",
  // });
  
  // export const setClientToken = (token) => {
  //   apiClient.interceptors.request.use(async function (config) {
  //     config.headers.Authorization = "Bearer " + token;
  //     return config;
  //   });
  // };
  
  // export default apiClient;