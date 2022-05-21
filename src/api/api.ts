import axios from "axios";

const instance = axios.create({
  params: {
    api_key: "bb61dc25dd053645f0c0e694cadfcc24",
  },
  baseURL: "https://api.themoviedb.org/3",
});

export const filmApi = {
  async popularFilms() {
    return await instance.get(`/movie/popular?page=1`).then((response) => {
      return response.data;
    });
  },
  async addFilms(page: number) {
    return await instance
      .get(`/movie/popular?page=${page}`)
      .then((response) => {
        return response.data;
      });
  },
  async movieInformation(movieId: number) {
    return await instance.get(`/movie/${movieId}`).then((response) => {
      return response.data;
    });
  },
};
