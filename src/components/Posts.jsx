import Post from "./Post";
import NewPost from "./NewPost";

export default function Posts({ posts, token, userData }) {
  return (
    <>
      <div className="new-post-container">
        {token && (
          <>
            <NewPost token={token} />
          </>
        )}
      </div>
      <div className="post-container">
        {/* loops through each post object and displays its data in Post.jsx
        component */}
        {posts.map((post) => {
          return (
            <Post
              key={post._id}
              username={post.author.username}
              title={post.title}
              description={post.description}
              price={post.price}
              userData={userData}
              // removePost={removePost}
            />
          );
        })}
      </div>
    </>
  );
}
