import ArticleSingleCard from "./ArticleSingle";

const ArticlesList = (props) => {
  const { articles } = props;
  return (
    <div className="Articles-List">
      {articles.map((a) => (
        <ArticleSingleCard article={a} key={a.article_id} />
      ))}
    </div>
  );
};

export default ArticlesList;
