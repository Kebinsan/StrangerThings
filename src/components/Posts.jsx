import { useEffect, useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";

export default function Posts({ posts, token, removePost, setPosts, setPost }) {
  const [displayPosts, setDisplayPosts] = useState(posts);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setDisplayPosts(
      posts.filter((entry) =>
        Object.values(entry).some(
          (val) => typeof val === "string" && val.includes(query)
        )
      )
    );
  }, [query]);

  return (
    <>
      {token && (
        <div className="new-post-container">
          <NewPost token={token} setPosts={setPosts} posts={posts} />
        </div>
      )}

      <div className="post-container">
        {/*Search form*/}
        <div className="search-container">
          <form className="search">
            <label className="search-font">
              <b>Search: </b>
            </label>
            <input
              className="search-form"
              id="query"
              name="query"
              type="text"
              placeholder="search..."
              onChange={(event) => setQuery(event.target.value)}
            />
          </form>
        </div>

        {/* loops through each post object and displays its data in Post.jsx
        component */}
        {displayPosts.map((post) => {
          return (
            <Post
              key={post._id}
              token={token}
              post={post}
              removePost={removePost}
              setPost={setPost}
            />
          );
        })}
      </div>
    </>
  );
}
