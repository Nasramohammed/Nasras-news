import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleArticle } from '../ApiRequests';


function ArticlePage() {
  const { article_id } = useParams(); 
  console.log(article_id,"aRTICLEPage")
    const [article, setArticle] = useState({})
    useEffect(() => {
      fetchSingleArticle(article_id).then((articleFromApi) => {
        console.log("article from api", articleFromApi);
        setArticle(articleFromApi);
      });
    }, {});
  return (
    <div>
          <p>{article.title}</p>
          <p>{article.author}</p>
          <p>{article.created_at}</p>
          <p>{article.topic}</p>
          <p>{article.comment_count}</p>
          <p>{article.votes}</p>
    </div>
  );
};

export default ArticlePage ;