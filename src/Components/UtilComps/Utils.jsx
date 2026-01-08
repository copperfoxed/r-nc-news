import { handleVote } from "../../api";

export const Loader = () => {
  return <p>Loading...</p>;
};

export const UpVoteArticle = (articleID) => {
  return handleVote(articleID, 1);
};

export const DownVoteArticle = (articleID) => {
  return handleVote(articleID, -1);
};
