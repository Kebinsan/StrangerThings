import React from "react";

export default function NewPost() {
  return (
    <form>
      <h1>new post form</h1>
      <label>Title</label>
      <input type="text"></input>

      <label>Description</label>
      <input type="text"></input>

      <label>Price</label>
      <input type="text"></input>

      <label>Location</label>
      <input type="text"></input>

      <input type="checkbox"></input>
      <label>Willing to Deliver?</label>

      <button>Create Post</button>
    </form>
  );
}
