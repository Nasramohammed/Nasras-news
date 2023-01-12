import React, { useEffect, useState } from "react";
import { fetchArticleComments } from "../ApiRequests";

function Comments({ article_id }) {
  const [isCommentsVisible, setCommentsVisible] = useState(false);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticleComments(article_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div> Loading....</div>;
  }
  return (
    <div>
      <button onClick={() => setCommentsVisible(!isCommentsVisible)}>
        <p>View all Comments</p>
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
}

export default Comments;
