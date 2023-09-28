import { useState } from "react";
import { postMessage } from "../api";

export default function PostPage({ post, token }) {
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(null);

  console.log(post.messages);
  const submitHandler = () => {
    event.preventDefault();
    const sendMessage = async () => {
      const result = await postMessage(token, post._id, message);
      setIsSent(result.success);
    };
    sendMessage();
  };

  return (
    <>
      <div className="post-page-container">
        <h1>{post.title}</h1>
        <h3>Created By: {post.author.username}</h3>
        <h4>{post.price}</h4>
        <p>{post.description}</p>
        <span>
          Delivery?:{" "}
          {post.willDeliver ? (
            <span>
              <b>Yes</b>
            </span>
          ) : (
            <span>
              <b>No</b>
            </span>
          )}
        </span>
        {token &&
          (post.isAuthor ? (
            <>
              <h3>Messages: </h3>
              {post.messages.length ? (
                <>
                  {post.messages.map((msg) => {
                    console.log(msg.fromUser.username);
                    console.log(msg.content);
                  })}
                </>
              ) : (
                <h4>No Messages</h4>
              )}
            </>
          ) : (
            <>
              <h3>Send Message</h3>
              <form onSubmit={submitHandler}>
                <input
                  className="message-form"
                  id="message"
                  type="text"
                  onChange={(event) => {
                    setMessage(event.target.value);
                  }}
                  required
                ></input>
                <button type="submit" className="send">
                  Send
                </button>
              </form>
              {typeof isSent === "boolean" &&
                (isSent ? (
                  <p className="sent">Message Sent</p>
                ) : (
                  <p className="sent-failed">Error sending message</p>
                ))}
            </>
          ))}
      </div>
    </>
  );
}
