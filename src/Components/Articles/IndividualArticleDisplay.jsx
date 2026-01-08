import upvote from "../../assets/upvote-svgrepo-com.svg";
import downvote from "../../assets/downvote-svgrepo-com.svg";
import { UpVoteArticle, DownVoteArticle } from "../UtilComps/Utils";

const IndividualArticleDisplay = (props) => {
  const { article } = props;
  const formattedArticleDate = new Date(article.created_at).toLocaleString();

  return (
    <div>
      <div className="Article-Display">
        <header>{article.title}</header>
        <img src={`${article.article_img_url}`} />
        <p>Written by: {article.author}</p>
        <p>{article.body}</p>
        <footer>Created at: {formattedArticleDate}</footer>
      </div>
      <div className="Voting">
        <button
          className="upvote"
          onClick={() => UpVoteArticle(article.article_id)}
        >
          <img src={upvote} />
        </button>
        <h4>Votes:</h4>
        <p> {article.votes}</p>
        <button
          className="downvote"
          onClick={() => DownVoteArticle(article.article_id)}
        >
          <img src={downvote} />
        </button>
      </div>
    </div>
  );
};

export default IndividualArticleDisplay;
