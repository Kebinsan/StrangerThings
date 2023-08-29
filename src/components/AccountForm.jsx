import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { registerUser, loginUser } from "../api";
import Home from "./Home";

const AccountForm = ({ setToken, setMessage }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { action } = useParams();
  const title = action === "login" ? "Login In" : "Sign Up";
  const Navigate = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const authFn = action === "register" ? registerUser : loginUser;

    const data = await authFn(username, password);
    // console.log("data", data.data.token);
    console.log(data);
    if (data.success) {
      setToken(data.data.token);
      setMessage(data.data.message);
      Navigate("/");
    } else {
      setMessage(data.error.message);
    }
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <h1>{title}</h1>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            placeholder="username"
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="text"
            value={password}
            placeholder="password"
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default AccountForm;
