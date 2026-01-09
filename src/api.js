import axios from "axios";

const baseURL = axios.create({ baseURL: "http://localhost:9090" });

export const fetchAllArticles = async () => {
  const result = await baseURL.get(`/api/articles/`);
  return result.data.articles;
};

export const fetchSingleArticle = async (id) => {
  const result = await baseURL.get(`/api/articles/${id}`);
  return result.data.article;
};

export const getCommentsByID = async (id) => {
  const res = await baseURL.get(`/api/articles/${id}/comments`);
  return res.data.comments;
};

export const handleVote = (id, incVotes) => {
  return baseURL.patch(`/api/articles/${id}`, {
    inc_votes: incVotes,
  });
};

export const postCommentById = async (id, comment) => {
  return baseURL.post(`/api/articles/${id}`, {
    username: "topPoster69",
    comment: comment,
  });
};
