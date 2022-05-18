const KEY = "bb61dc25dd053645f0c0e694cadfcc24";
const BASE_URL = `https://api.themoviedb.org/3`;

function fetchApi(url: string) {
  return fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    }
    console.log(response.json());
    return Promise.reject(new Error(`Такого названия нет`));
  });
}

// Список самых популярных фильмов на сегодня для создания коллекции на главной странице.
export function popularFilms() {
  return fetchApi(`${BASE_URL}/movie/popular?api_key=${KEY}&page=1`);
}

export async function addFilms(page: number) {
  return await fetchApi(
    `${BASE_URL}/movie/popular?api_key=${KEY}&page=${page}`
  );
}

// запрос полной информации о фильме для страницы кинофильма.
export function movieInformation(movieId: number) {
  return fetchApi(`${BASE_URL}/movie/${movieId}?api_key=${KEY}`);
}
