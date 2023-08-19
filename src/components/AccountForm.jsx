import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { registerUser, loginUser } from "../api";

const AccountForm = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const { action } = useParams();

  const title = action === "login" ? "Login In" : "Sign Up";

  const onSubmitHandler = async () => {
    event.preventDefault();

    const authFn = action === "register" ? registerUser : loginUser;

    const data = await authFn(username, password);
    // console.log("data", data.data.token);
    console.log(data);
    if (data.success) {
      setToken(data.data.token);
      setMessage(data.data.message);
    } else {
      setMessage(data.error.message);
    }
  };

  return (
    <div>
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
      {message ? <div>{message}</div> : <div></div>}
    </div>
  );
};

export default AccountForm;
