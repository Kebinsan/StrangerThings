import { useNavigate } from "react-router-dom";
export default function Post({ token, post, removePost, setPost }) {
  const navigate = useNavigate();
  const clickHandler = () => {
    setPost(post);
    navigate(`/posts/${post._id}`);
  };
  return (
    <div className="post">
      <div className="post-content" onClick={clickHandler}>
        <p className="user">{post.author?.username}</p>
        <p>
          {" "}
          <b>Item: </b>
          {post.title}
        </p>
        <p className="description">{post.description}</p>
      </div>
      {token &&
        (post.isAuthor ? (
          <button
            className="btn remove"
            onClick={() => {
              removePost(token, post._id);
            }}
          >
            X
          </button>
        ) : (
          <></>
        ))}
    </div>
  );
}
