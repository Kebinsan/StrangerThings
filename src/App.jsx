import { useState, useEffect } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
//import components
import AccountForm from "./components/AccountForm";
import Posts from "./components/Posts";
import Profile from "./components/Profile";
import Home from "./components/Home";
//import api functions
import { fetchAllPosts, myData, deletePost } from "./api";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [isNewPost, setIsNewPost] = useState(false);
  const [token, setToken] = useState(
    window.localStorage.getItem("token") || null
  );
  const [userData, setUserData] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  /**
   * fetches all posts
   */
  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const result = await fetchAllPosts(token);
        if (isNewPost || !posts.length) {
          setPosts(result);
          setIsNewPost(false);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getAllPosts();
  }, [posts]);

  /**
   * sets token in local storage
   */
  useEffect(() => {
    if (token) {
      window.localStorage.setItem("token", token);
    } else {
      window.localStorage.removeItem("token");
    }
  }, [token]);

  /**
   * fetches user data
   */
  useEffect(() => {
    const fetchUserData = async () => {
      const result = await myData(token);
      setUserData(result);
    };
    fetchUserData();
  }, [token]);

  /**
   * resets token when logging out
   */
  const logOut = () => {
    setToken(null);
    navigate("/");
    setMessage("Successfully logged out");
  };

  /**
   * login button handler, navigates to log
   */
  const logIn = () => {
    navigate("/account/login");
  };

  const removePost = async (token, id) => {
    try {
      const result = await deletePost(token, id);
      setPosts((previousPost) =>
        previousPost.filter((post) => post._id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <nav className="navBar">
        <Link className="item left" to="/">
          Home
        </Link>
        <Link className="item left" to="/posts">
          Posts
        </Link>
        <div className="right-menu">
          {token ? (
            <>
              <Link className="item profile" to="/account/profile">
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
      <Routes>
        <Route path="/" element={<Home message={message} />} />
        <Route
          path="/posts"
          element={
            <Posts
              posts={posts}
              token={token}
              userData={userData}
              removePost={removePost}
              setPosts={setPosts}
              setIsNewPost={setIsNewPost}
            />
          }
        />
        <Route
          path="/account/:action"
          element={<AccountForm setToken={setToken} setMessage={setMessage} />}
        />
        <Route
          path="/account/profile"
          element={
            <Profile token={token} posts={posts} removePost={removePost} />
          }
        />
      </Routes>
    </div>
  );
}
