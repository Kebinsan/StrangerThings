import React from "react";

export default function Post({ username, title, description, price }) {
  return (
    <div className="post">
      <p>{username}</p>
      <p>{title}</p>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
}
