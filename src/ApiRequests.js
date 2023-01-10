import axios from "axios";

// do correct error handling later.

const articlesApi = axios.create({
   baseURL: "https://nc-news-50fb.onrender.com/api"
});

  export const fetchArticles = () => {
   return articlesApi.get("/articles").then((response) => {
   return response.data.articles;
   })
}

 export const fetchSingleArticle = (article_id) => {
   return articlesApi.get(`articles/${article_id}`).then((response) => {
     return response.data.article;
   });
 };

