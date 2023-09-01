import React from "react";
import Post from "./Post";

export default function Profile({ token, posts, removePost }) {
  return (
    <div className="post-container">
      {/* loops through each post object and displays its data in Post.jsx
    component */}
      {posts &&
        posts.map((post) => {
          return (
            <Post
              key={post._id}
              token={token}
              post={post}
              removePost={removePost}
            />
          );
        })}
    </div>
  );
}
