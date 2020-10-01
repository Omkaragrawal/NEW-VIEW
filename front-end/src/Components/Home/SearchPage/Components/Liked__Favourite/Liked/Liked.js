import axios from "axios";
import React from "react";
import "./Liked.css";
function Liked() {
  const a = () => {
    axios
      .get("http://localhost:8081/users/like", {
        withCredentials: true,
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <button onClick={a}>Click here to see the movies you have Liked</button>
    </div>
  );
}

export default Liked;
