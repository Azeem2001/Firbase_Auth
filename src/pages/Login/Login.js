import React, { useState } from "react";
import { auth, signInWithEmailAndPassword } from "../../config/firebase";

const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const registerUser = async () => {
    if (!email) {
      alert("Email not found");
    } else if (!password && password.length < 6) {
      alert("Password not found or password should be 6 character long");
    } else {
      try {
        let response = await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <br />
      <h1>Login</h1>
      <input
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />{" "}
      <br />
      <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={registerUser}>Register</button>
    </div>
  );
};

export default Login;
