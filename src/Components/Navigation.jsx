import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate;
  return (
    <ul className="NavList">
      <button>ALL ARTICLES</button>

      <button>ALL TOPICS</button>

      <button>ALL USERS</button>
    </ul>
  );
};

export default Navigation;
