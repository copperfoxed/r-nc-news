import upvote from "../../assets/upvote-svgrepo-com.svg";
import downvote from "../../assets/downvote-svgrepo-com.svg";
import { handleVote } from "../../api";
import { useState, useEffect } from "react";

const Voting = (props) => {
  const { articleid, articlevotes } = props;
  const [optimisticVotes, setOptimisticVotes] = useState(0);

  const handleVotes = (inc) => {
    setOptimisticVotes((currOptimisticVotes) => currOptimisticVotes + inc);
    handleVote(articleid, inc).catch(() => {
      setOptimisticVotes((currOptimisticVotes) => currOptimisticVotes - inc);
    });
  };
  const totalVotes = articlevotes + optimisticVotes;

  return (
    <div className="Voting">
      <button className="upvote" onClick={() => handleVotes(1)}>
        <img src={upvote} />
      </button>

      <h4>Votes:</h4>
      <p>{totalVotes}</p>

      <button className="downvote" onClick={() => handleVotes(-1)}>
        <img src={downvote} />
      </button>
    </div>
  );
};
export default Voting;
