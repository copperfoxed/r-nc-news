import { useState } from "react";

const AddComment = () => {
  const [input, setInput] = useState("");
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    // post comment api
    // find comments
    // reset comments with new comments (old comments + new comment)
  };

  return (
    <form>
      <h5>Article Comment goes here</h5>
      <label htmlFor="text-input">Type your comment here!:</label>
      <input
        type="text"
        required
        id="text-input"
        onChange={handleChange}
        value={input}
      />
      <button onClick={handleClick}>Post Comment</button>
    </form>
  );
};

export default AddComment;

// google react state updater functions in order to get latest version of comments