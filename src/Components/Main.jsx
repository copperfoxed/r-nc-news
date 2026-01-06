const Main = () => {
  return (
    <div className="main">
      <h2>
        <button>Article 1</button>
        <div className="commentbox">
          Top Comment, This is a really long comment that will eventually get
          cut off when it reaches the end of the box. But with even more text
          because its not quite there yet.
        </div>
      </h2>
      <h2>
        <button>Article 2</button>
        <div className="commentbox">Top Comment</div>
      </h2>
      <h2>
        <button>Article 3</button>
        <div className="commentbox">Top Comment</div>
      </h2>
    </div>
  );
};

export default Main;
