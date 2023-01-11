import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleArticle,fetchArticleComments } from '../ApiRequests';
import './ArticlePage.css';

// complete is error state 

function ArticlePage() {
  const { article_id } = useParams(); 
 const [isCommentsVisible, setCommentsVisible] = useState(false)
  const [article, setArticle] = useState({})
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(true)
 
  
    useEffect(() => {
      fetchSingleArticle(article_id)
        .then((articleFromApi) => {
        setArticle(articleFromApi)
        setIsLoading(false)
      });
    }, []);
  
  useEffect(() => {
    fetchArticleComments(article_id)
      .then((commentsFromApi) => {
     setComments(commentsFromApi);
   
   });
  }, []);
  
  if (isLoading) {
    return <div>Is Loading....</div>;
  }
  
  return (
    <div>
      <p>{article.title}</p>
      <p>{article.author}</p>
      <p>{article.created_at}</p>
      <p>{article.topic}</p>
      <p>{article.votes}</p>
      <button onClick={() => setCommentsVisible(!isCommentsVisible)}>
        <p>{article.comment_count} comments </p>
      </button>
      {isCommentsVisible ? (
        <div>
          All comments
          {comments.map((comment, index) => (
            <div>
              <p>{comment.author}</p>
              <p>{comment.created_at}</p>
              <p>{comment.votes}</p>
              <p>{comment.body}</p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default ArticlePage ;