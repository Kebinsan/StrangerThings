import Post from "./Post";
import NewPost from "./NewPost";

export default function Posts({
  posts,
  token,
  userData,
  removePost,
  setPosts,
}) {
  return (
    <>
      <div className="new-post-container">
        {token && (
          <>
            <NewPost token={token} setPosts={setPosts} />
          </>
        )}
      </div>

      <div className="post-container">
        {/* loops through each post object and displays its data in Post.jsx
        component */}
        {posts &&
          posts.map((post) => {
            return (
              <Post
                key={post._id}
                id={post._id}
                token={token}
                username={post.author.username}
                title={post.title}
                description={post.description}
                price={post.price}
                userData={userData}
                removePost={removePost}
              />
            );
          })}
      </div>
    </>
  );
}
