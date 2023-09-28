import { useState, useEffect } from "react";
import Post from "./Post";

export default function Profile({ token, posts, removePost, setPost }) {
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    setUserPosts(posts.filter((post) => post.isAuthor === true));
  }, [posts.length]);

  return (
    <div className="post-container">
      {/* loops through each post object and displays its data in Post.jsx
    component */}
      {userPosts.length > 0 ? (
        userPosts.map((post) => {
          return (
            <Post
              key={post._id}
              token={token}
              post={post}
              removePost={removePost}
              setPost={setPost}
            />
          );
        })
      ) : (
        <h1>No Posts</h1>
      )}
    </div>
  );
}
