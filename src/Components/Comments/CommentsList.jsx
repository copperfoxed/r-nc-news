import CommentSingleCard from "./CommentSingle";

const CommentsList = (props) => {
  const { comments } = props;
  return (
    <div className="Comments-List">
      {comments.map((c) => (
        <CommentSingleCard comment={c} key={c.comment_id} />
      ))}
    </div>
  );
};

export default CommentsList;
