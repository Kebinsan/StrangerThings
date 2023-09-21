export default function Post({ token, post, removePost }) {
  // console.log(username, userData);
  return (
    <div className="post">
      <p className="user">{post.author?.username}</p>
      <p>
        {" "}
        <b>Item: </b>
        {post.title}
      </p>
      <p className="description">{post.description}</p>

      {token &&
        (post.isAuthor ? (
          <button
            onClick={() => {
              removePost(token, post._id);
            }}
          >
            remove
          </button>
        ) : (
          <button>Send Message</button>
        ))}
    </div>
  );
}
