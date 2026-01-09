import Voting from "./ArticleVoting";

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
      {/* OPTOMISTIC RENDERING CHECK IT OUT YOU  
      .then() useState to update the voting, if the promise doesnt resolve
      .catch() and go "uh oh?!"
      */}

      <Voting articleid={article.article_id} articlevotes={article.votes} />
    </div>
  );
};

export default IndividualArticleDisplay;
