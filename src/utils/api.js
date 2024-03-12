import axios from "axios";

export const getAllUsers = () => {
    return axios
      .get("https://newmakers.onrender.com/api/users")
      .then(({data}) => {
        return data.users;
      })
  };

  export const getAllArticles = (topic) => {
    return axios
      .get("https://newmakers.onrender.com/api/articles")
      .then(({data}) => {
        return data.articles;
      })
  };