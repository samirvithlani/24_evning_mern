import axios from "axios";
import React from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ApiDemo4 = () => {
  const addUser = async () => {
    const user = {
      name: "kunal",
      age: 23,
      email: "kunal@gmail.com",
      isActive: true,
    };

    const res = await axios.post("https://node5.onrender.com/user/user", user);
    console.log(res);
    if (res.status === 201) {
      //   alert("user Added")
      toast.success("🦄 Wow so easy!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } else {
      alert("error..");
    }
  };
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />

      <h1>API DEMO 4 post api</h1>
      <button
        onClick={() => {
          addUser();
        }}
        className="btn btn-info"
      >
        ADD USER
      </button>
    </div>
  );
};
