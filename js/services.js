const API_KEY = "58ed2fe5a2d0a86a4e80242248c0acb3";
const BASE_URL = "https://api.themoviedb.org/3/";
const LANGUAGE = "&language=ru-RU";
/* 
https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>> */

const getData = (url) =>
  fetch(url)
    .then(
      (response) => {
        if (response.ok) {
          return response.json();
        }
        throw `Что-то пошло не так! Ошибка ${response.status}`;
      }
      // console.log(response);
    )
    .catch((err) => console.error(err));

export const getTrends = async (type = "all", period = "week", page = 1) => {
  const url = `${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
  console.log("url", url);

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
  console.log("🚀  url", url);
  return await getData(url);
};
