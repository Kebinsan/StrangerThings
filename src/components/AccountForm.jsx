import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { registerUser } from "../api";

const AccountForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const newUser = async () => {
      try {
        const result = await registerUser("Welcome", "Hello");
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };
    newUser();
  });
};
export default AccountForm;
