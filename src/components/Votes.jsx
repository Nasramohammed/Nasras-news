import React from 'react'
import './Votes.css';

function Votes({ votes, article_id, handleVote}) {

    
  return (
    <div className="votes-wrapper">
      <button onClick={ () => handleVote(article_id, 1)}>voteup</button>
      <span>{votes}</span>
      <button onClick={ () => handleVote(article_id, -1)}>votedown</button>
    </div>
  );
}

export default Votes;
