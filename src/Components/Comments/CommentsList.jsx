import CommentSingleCard from "./CommentSingle";
import AddComment from "./AddComments";
import useComments from "../../hooks/useComments";

const CommentsList = (props) => {
  const { article_id } = props;
  const { comments } = useComments(article_id);
  return (
    <div className="Comments-List">
      <AddComment />
      {comments.map((c) => (
        <CommentSingleCard comment={c} key={c.comment_id} />
      ))}
    </div>
  );
};

export default CommentsList;
