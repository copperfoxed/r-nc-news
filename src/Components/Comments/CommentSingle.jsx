

const CommentSingleCard = (props) => {
  const { comment } = props;
  const formattedDate = new Date(comment.created_at).toLocaleString();

  return (
    <div className="Comment-Single">
      <p>
        <strong>{comment.author}:</strong>
      </p>
      <p>{comment.body}</p>
      <p>Votes: {comment.votes}</p>
      <footer>Created at: {formattedDate}</footer>
    </div>
  );
};

export default CommentSingleCard;
