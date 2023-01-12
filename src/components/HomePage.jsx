import React from 'react';
import { useEffect, useState } from 'react';
import { fetchArticles } from '../ApiRequests';
import './HomePage.css';
import { Link } from "react-router-dom";

function HomePage() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div> Loading....</div>;
  }
  return (
    <div className="homepage_wrapper">
      {articles.map((article, index) => (
        <div key={index} className="article_card">
          <Link to={`/article/${article.article_id}`}>
            <p>title: {article.title}</p>
            <p>author: {article.author}</p>
            <p>date created at: {article.created_at}</p>
            <p>topic: {article.topic}</p>
            <p>comment count: {article.comment_count}</p>
            <p>votes: {article.votes}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
