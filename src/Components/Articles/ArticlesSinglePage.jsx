import useSingleArticle from "../../hooks/useSingleArticle";
import CommentsList from "../Comments/CommentsList";
import { Loader } from "../UtilComps/Utils";
import IndividualArticleDisplay from "./IndividualArticleDisplay";

const ArticlesSinglePage = () => {
  const { comments, article, isLoading, isError } = useSingleArticle();
  if (isLoading) return <Loader />;
  if (!article) return <p>{article.articleId} not found</p>;
  if (isError) return <p>Uh oh! We ran into a problem!</p>;

  return (
    <div className="ArticleSinglePage">
      <IndividualArticleDisplay article={article} />
      <CommentsList comments={comments} />
    </div>
  );
};

export default ArticlesSinglePage;
