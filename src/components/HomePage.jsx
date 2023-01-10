import React from "react";
import { useEffect, useState } from 'react';
import { fetchArticles } from '../ApiRequests';
import './HomePage.css';
import { Link } from "react-router-dom";


function Homepage() {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
      fetchArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
    }, []);
  
  return articles.length ? (
   
    <div>
    {
      articles.map((article, index) => (
        
        <Link to={`/article/${article.article_id}`}>
          <p>{article.title}</p>
          <p>{article.author}</p>
          <p>{article.created_at}</p>
          <p>{article.topic}</p>
          <p>{article.comment_count}</p>
          <p>{article.votes}</p>
         </Link>
      ))}
  </div>
   ) :  
  null;
}

export default Homepage;



