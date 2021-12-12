const API_KEY = "58ed2fe5a2d0a86a4e80242248c0acb3";
const BASE_URL = "https://api.themoviedb.org/3/";
const LANGUAGE = "&language=ru-RU";
/* 
https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>> */

const getData = (url) =>
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw `Что-то пошло не так, ошибка ${response.status}`;
    })
    .catch((err) => console.error(err));

export const getTrends = async (type = "all", period = "week", page = 1) => {
  const url = `${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
  //console.log("url", url);

  //const data = await getData("https://jsonplaceholder.typicode.com/todos/1");
  return await getData(url);

  //console.log("data", data);
};

export const getTop = async (type, page = 1) => {
  const url = `${BASE_URL}${type}/top_rated?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
  console.log("🚀  url", url);

  return await getData(url);
};

export const getPopular = async (type, page = 1) => {
  const url = `${BASE_URL}${type}/popular?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
  console.log("🚀 ~ file: services.js ~ line 36 ~ getPopular ~ url", url);
  return await getData(url);
};

export const getVideo = async (id, type) => {
  const url = `${BASE_URL}${type}/${id}/videos?api_key=${API_KEY}${LANGUAGE}`;
  return await getData(url);
};

/*
Movies
${BASE_URL}${type}/${id}?api_key=${API_KEY}${LANGUAGE}
Tv
https://api.themoviedb.org/3/tv/{tv_id}/videos?api_key=<<api_key>>&language=en-US

*/

export const search = async (query, page = 1) => {
  const url = `${BASE_URL}search/multi?api_key=${API_KEY}${LANGUAGE}&page=${page}&include_adult=false&query=${query}`;
  console.log("🚀 url", url);
  return await getData(url);
};

/*
${BASE_URL}search/multi?api_key=${API_KEY}${LANGUAGE}&page=${page}&include_adult=false&query=${query}
https://api.themoviedb.org/3/search/multi?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
*/
