import { react, useState, useEffect } from "react";
import { fetchAllPosts } from "./api";
//add api functions here when importing
import { Link, Route, Routes } from "react-router-dom";
import AccountForm from "./components/AccountForm";
import Posts from "./components/Posts";

export default function App() {
  const [posts, setPosts] = useState([]);

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
  return (
    <div>
      <nav className="navBar">
        {/* <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/profile">Profile</Link> */}
        <Link to="/register">Register</Link>
      </nav>
      <h1>test</h1>
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/register" element={<AccountForm />} />
      </Routes>
    </div>
  );
}
