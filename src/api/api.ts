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

// Список самых популярных фильмов на сегодня для создания коллекции на главной странице.
/* export function popularFilms() {
  return fetchApi(`${BASE_URL}/movie/popular?api_key=${KEY}&page=1`);
} */

/* export async function addFilms(page: number) {
  return await fetchApi(
    `${BASE_URL}/movie/popular?api_key=${KEY}&page=${page}`
  );
}

// запрос полной информации о фильме для страницы кинофильма.
export function movieInformation(movieId: number) {
  return fetchApi(`${BASE_URL}/movie/${movieId}?api_key=${KEY}`);
} */
