const Main = () => {
  return (
    <div className="main">
      <h2>
        <button>
          <div>Article 1</div>
        </button>
        <div className="commentbox">
          Top Comment, This is a really long comment that will eventually get
          cut off when it reaches the end of the box. But with even more text
          because its not quite there yet.
        </div>
      </h2>
      <h2>
        <button>
          <div>Article 2</div>
        </button>
        <div className="commentbox">Top Comment</div>
      </h2>
      <h2>
        <button>
          <div>Article 3</div>
        </button>
        <div className="commentbox">Top Comment</div>
      </h2>
    </div>
  );
};

export default Main;
