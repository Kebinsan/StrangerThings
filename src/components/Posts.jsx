import { React, useEffect, useState } from "react";
import { fetchAllPosts } from "../api";
import Post from "./Post";

export default function Posts() {
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
    <div className="post-container">
      {/* loops through each post object and displays its data in Post.jsx component */}
      {posts.map((post) => {
        return (
          <Post
            key={post._id}
            username={post.author.username}
            title={post.title}
            description={post.description}
            price={post.price}
          />
        );
      })}
    </div>
  );
}
