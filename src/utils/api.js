import axios from "axios";

export const articlesApi = axios.create({
  baseURL: "https://newmakers.onrender.com/api",
});

export const getAllUsers = () => {
  return articlesApi
    .get("/users")
    .then(({ data }) => {
      return data.users;
    });
};

export const getAllArticles = (topic) => {
  return articlesApi
    .get("/articles")
    .then(({ data }) => {
      return data.articles;
    });
};
