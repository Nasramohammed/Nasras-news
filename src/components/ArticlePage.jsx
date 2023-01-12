import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleArticle, updateArticleVote } from "../ApiRequests";
import "./ArticlePage.css";
import { Comments, Votes } from "./index";
// todo - complete is error state

function ArticlePage() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchSingleArticle(article_id).then((articleFromApi) => {
      setArticle(articleFromApi);
      setIsLoading(false);
    });
  }, []);

  const handleVote = (articleId, vote) => {
    updateArticleVote(articleId, vote).then((updatedArticleFromApi) => {
      setArticle(updatedArticleFromApi);
    });
  };

  if (isLoading) {
    return <div> Loading....</div>;
  }

  return (
    <div>
      <p>title: {article.title}</p>
      <p>author: {article.author}</p>
      <p>body: {article.body}</p>
      <p>date created at: {article.created_at}</p>
      <p>topic: {article.topic}</p>

      <Votes
        votes={article.votes}
        article_id={article_id}
        handleVote={handleVote}
      />

      <Comments article_id={article_id} />
    </div>
  );
}

export default ArticlePage;
