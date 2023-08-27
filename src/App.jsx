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

  const logIn = () => {
    navigate("/account/login");
  };

  return (
    <div>
      <nav className="navBar">
        <Link className="left item" to="/">
          Home
        </Link>
        <Link className="left item" to="/posts">
          Posts
        </Link>
        <div className="right-menu">
          {token ? (
            <>
              <Link className="profile item" to="/profile">
                Profile
              </Link>
              <button className="item logout btn" onClick={logOut}>
                Log Out
              </button>
            </>
          ) : (
            <>
              <button className="item login btn" onClick={logIn}>
                Login
              </button>
              <Link className="item signup" to="/account/register">
                Sign up
              </Link>
            </>
          )}
        </div>
      </nav>
      <h1>All Posts</h1>
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
