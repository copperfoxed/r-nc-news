import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleArticle } from "../api";

export default function useSingleArticle() {
  const { articleId } = useParams();

  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getSingleArticle = async () => {
      const articlesData = await fetchSingleArticle(articleId);
      setArticle(articlesData);
      setIsLoading(false);
    };

    getSingleArticle();
  }, [articleId]);

  return { article, isLoading, isError };
}
