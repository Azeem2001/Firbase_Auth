import React from "react";
import { auth, signOut } from "../../config/firebase";

const Logout = () => {
  const logoutUser = async () => {
    try {
      await signOut(auth);
      alert("User logout");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={logoutUser}>Logout</button>
    </div>
  );
};

export default Logout;
