import { React, useEffect, useState } from "react";
import { fetchAllPosts } from "../api";
import Post from "./Post";

export default function Posts() {
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
