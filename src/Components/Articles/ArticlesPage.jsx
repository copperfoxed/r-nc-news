import { useEffect, useState } from "react";
import { fetchAllArticles } from "../../api";

import ArticlesList from "./ArticlesList";

const articlesPage = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // fetchAllArticles().then((articlesData) => {
    //   setArticles(articlesData);
    //   setIsLoading(false);
    // });
    const fetchArticles = async () => {
      const articlesData = await fetchAllArticles();
      setArticles(articlesData);
      setIsLoading(false);
    };
    fetchArticles();
  }, []);

  return (
    <div className="Articles-Page">
      <h2>ARTICLES :3</h2>
      <ArticlesList articles={articles} />
    </div>
  );
};

export default articlesPage;
