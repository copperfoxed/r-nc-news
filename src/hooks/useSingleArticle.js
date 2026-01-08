import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleArticle, getCommentsByID } from "../api";

export default function useSingleArticle() {
  const { articleId } = useParams();
  const [comments, setComments] = useState([]);
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
    const getComments = async () => {
      const commentsData = await getCommentsByID(articleId);
      setComments(commentsData);
      setIsLoading(false);
    };
    getComments();
    getSingleArticle();
  }, [articleId]);

  return { comments, article, isLoading, isError };
}
