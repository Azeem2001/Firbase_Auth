import React, { useEffect, useState } from "react";
import { auth } from "../../config/firebase";

const Home = ({ data }) => {
  if (!data) return <div>Loading....</div>;
  return (
    <div>
      <h1>Home</h1>
      <h2>Email : {data?.email}</h2>
      <p>User unique: {data?.uid}</p>
    </div>
  );
};

export default Home;
