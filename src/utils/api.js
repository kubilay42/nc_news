import axios from "axios";

export const articlesApi = axios.create({
  baseURL: "https://newmakers.onrender.com/api",
});

export const getAllUsers = () => {
  return articlesApi.get("/users").then(({ data }) => {
    return data.users;
  });
};

export const getAllArticles = (topic) => {
  return articlesApi.get("/articles", {
    params: { topic },
  }).then(({ data }) => {
    return data.articles;
  });
};

export const fetchArticleById = (article_id) => {
  return articlesApi.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

export const getComments = (article_id) => {
  return articlesApi.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const updateArticleVotes = (article_id, voteChange) => {
  return articlesApi
    .patch(`/articles/${article_id}`, { inc_votes: voteChange })
    .then((response) => {
      return response.data.article;
    });
};

export const postComment = (newCommentText, article_id, user) => {
  const postBody = {
    username: user.username,
    body: newCommentText,
  };
    return articlesApi
      .post(`/articles/${article_id}/comments`, postBody)
      .then(({ data }) => {
        return data.comment;
      });
  }

export const deleteComment = (comment_id, user) => {
  return articlesApi.delete(`/comments/${comment_id}`);
};

export const getAllTopics = () => {
  return articlesApi.get("/topics").then(({data}) => {
    return data.topics
})
}

