import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getCommentsByID } from "../api";

export default function useComments(id) {
  const article_id = id;
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      setIsLoading(true);
      const commentsData = await getCommentsByID(article_id);
      setComments(commentsData);
      setIsLoading(false);
    };

    getComments();
  }, [article_id]);
  return { comments };
}
