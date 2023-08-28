import React from "react";

export default function Post({ username, title, description, userData }) {
  console.log(username, userData);
  return (
    <div className="post">
      <p className="user">{username}</p>
      <p>
        {" "}
        <b>Item: </b>
        {title}
      </p>
      <p className="description">{description}</p>
      {username === userData.data.username ? (
        <button>remove</button>
      ) : (
        <button>Send Message</button>
      )}
    </div>
  );
}
