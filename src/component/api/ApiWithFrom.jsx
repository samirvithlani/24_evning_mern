import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const ApiWithFrom = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const submitHandler = async (data) => {
    console.log(data);
    data.isActive = data.isActive == "active"? true :false
    try {
      const res = await axios.post(
        "https://node5.onrender.com/user/user",
        data
      );
      if (res.status === 201) {
        //redirect..
        navigate("/apidemo1");
      } else {
        //toast.
        alert("error while adding data..");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>NAme</label>
          <input
            type="text"
            {...register("name")}
            placeholder="enter name"
          ></input>
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            {...register("email")}
            placeholder="enter Email"
          ></input>
        </div>
        <div>
          <label>age</label>
          <input
            type="text"
            {...register("age")}
            placeholder="enter age"
          ></input>
        </div>
        <div>
          <label>STATUS</label>
          Active:{" "}
          <input
            type="radio"
            name="isActive"
            {...register("isActive")}
            value="active"
          ></input>
          Not Active:{" "}
          <input
            type="radio"
            name="isActive"
            {...register("isActive")}
            value="notactive"
          ></input>
        </div>
        <div>
          <input type="submit" value="submit"></input>
        </div>
      </form>
    </div>
  );
};
