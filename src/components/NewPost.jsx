import { useState, useEffect } from "react";
import { addNewPost } from "../api";

export default function NewPost({ token, setPosts }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [delivery, setDelivery] = useState(false);

  console.log(title, description, price, location);
  const submitHandler = async () => {
    event.preventDefault();
    const postNewPost = await addNewPost(
      {
        title,
        description,
        price,
        location,
        delivery,
      },
      token
    );
    console.log(postNewPost, "New");
    setPosts((previousPost) => [postNewPost, ...previousPost]);
  };

  return (
    <form onSubmit={submitHandler}>
      <h1>new post form</h1>
      <label>Title</label>
      <input
        type="text"
        value={title}
        placeholder="title"
        onChange={(event) => setTitle(event.target.value)}
        required
      ></input>

      <label>Description</label>
      <input
        type="description"
        value={description}
        placeholder="description"
        onChange={(event) => setDescription(event.target.value)}
        required
      ></input>

      <label>Price</label>
      <input
        type="price"
        value={price}
        placeholder="price"
        onChange={(event) => setPrice(event.target.value)}
        required
      ></input>

      <label>Location</label>
      <input
        type="location"
        value={location}
        placeholder="location"
        onChange={(event) => setLocation(event.target.value)}
        required
      ></input>

      <input
        type="checkbox"
        value="delivery"
        onChange={(event) => setDelivery(event.target.value)}
      ></input>
      <label>Willing to Deliver?</label>

      <button type="submit">Create Post</button>
    </form>
  );
}
