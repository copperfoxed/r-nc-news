const ArticleSingleCard = (props) => {
  const { article } = props;
  const formattedDate = new Date(article.created_at).toLocaleString();

  return (
    <div className="Article-Single">
      <a href={`/articles/${article.article_id}`}>{article.title}</a>
      <footer>created at: {formattedDate}</footer>
    </div>
  );
};

export default ArticleSingleCard;
