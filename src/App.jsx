import { react, useState, useEffect } from "react";
import { fetchAllPosts } from "./api";
//add api functions here when importing
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import AccountForm from "./components/AccountForm";
import Posts from "./components/Posts";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(
    window.localStorage.getItem("token") || null
  );
  const navigate = useNavigate();

  /* fetch posts using api file function fetchAllPosts*/
  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const result = await fetchAllPosts();
        setPosts(result);
      } catch (error) {
        console.error(error);
      }
    };
    getAllPosts();
  }, []);
  useEffect(() => {
    if (token) {
      window.localStorage.setItem("token", token);
    } else {
      window.localStorage.removeItem("token");
    }
  }, [token]);

  const logOut = () => {
    setToken(null);
    navigate("/");
  };

  return (
    <div>
      <nav className="navBar">
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/profile">Profile</Link>
        <div className="right menu">
          {token ? (
            <button className="item" onClick={logOut}>
              Log Out
            </button>
          ) : (
            <>
              <Link className="item" to="/account/login">
                Login
              </Link>
              <Link className="item" to="/account/register">
                Sign up
              </Link>
            </>
          )}
        </div>
      </nav>
      <h1>test</h1>
      <Routes>
        <Route path="/posts" element={<Posts posts={posts} />} />
        <Route
          path="/account/:action"
          element={<AccountForm setToken={setToken} />}
        />
      </Routes>
    </div>
  );
}
