import React from "react";
import { useEffect, useState } from 'react';
import { fetchArticles } from '../ApiRequests';
import './HomePage.css';
import { Link } from "react-router-dom";


function HomePage() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
      fetchArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi)
       setIsLoading(false)
    });
    }, []);

    if (isLoading) {
    return <div> Loading....</div>;
  }
  return (
   
    <div className="homepage_wrapper">
      {
        articles.map((article, index) => (
        <div key={index} className="article_card" >
          <Link to={`/article/${article.article_id}`}>
          
            <p>{article.title}</p>
            <p>{article.author}</p>
            <p>{article.created_at}</p>
            <p>{article.topic}</p>
            <p>{article.comment_count}</p>
            <p>{article.votes}</p>
          </Link>
             </div>
        ))}
    </div>
  );
};

export default HomePage;



