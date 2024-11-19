import axios from "axios";
import React from "react";

export const ApiDemo5 = () => {
  const addUser = async () => {
    const url = "https://gorest.co.in/public/v2/users";
    const data = {
      name: "parth",
      gender: "male",
      email: "parth@gmail.com",
      status: "active",
    };

    try {
      const res = await axios.post(url, data, {
        headers: {
          Authorization:
            "Bearer 87a6e693c6ad5316132fb9df78c80553c9fe17fbee4945d3704e2b55fd94c2b5",
        },
      });
      console.log(res.data);
    } catch (err) {
      alert("error..");
    }
  };
  return (
    <div>
      <h1>API DEMO 5</h1>
      <button
        onClick={() => {
          addUser();
        }}
      >
        ADD USER
      </button>
    </div>
  );
};
