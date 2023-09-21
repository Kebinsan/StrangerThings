import Post from "./Post";
import NewPost from "./NewPost";

export default function Posts({ posts, token, removePost, setPosts }) {
  return (
    <>
      {token && (
        <div className="new-post-container">
          <NewPost token={token} setPosts={setPosts} posts={posts} />
        </div>
      )}

      <div className="post-container">
        {/* loops through each post object and displays its data in Post.jsx
        component */}
        {posts.map((post) => {
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
    </>
  );
}
