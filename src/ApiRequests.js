import axios from "axios";

// todo - correct error handling later.

const articlesApi = axios.create({
  baseURL: "https://nc-news-50fb.onrender.com/api/",
});

export const fetchArticles = () => {
  return articlesApi.get("articles").then((response) => {
    return response.data.articles;
  });
};

export const fetchSingleArticle = (article_id) => {
  return articlesApi.get(`articles/${article_id}`).then((response) => {
    return response.data.article;
  });
};

export const fetchArticleComments = (article_id) => {
  return articlesApi.get(`articles/${article_id}/comments`).then((response) => {
    return response.data.comments;
  });
};
export const updateArticleVote = (article_id, vote) => {
  return articlesApi
    .patch(`articles/${article_id}`, { inc_votes: vote })
    .then((response) => {
      return response.data.article;
    });
};
