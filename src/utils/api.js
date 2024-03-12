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

export const fetchArticleById = (article_id) => {
  return articlesApi.get(`/articles/${article_id}`).then((res) => {
    console.log(res.data.article)
    return res.data.article;
  });
};
