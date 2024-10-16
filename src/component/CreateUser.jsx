import React, { useState } from "react";

export const CreateUser = () => {
    const [name, setname] = useState("")
    const [age, setage] = useState()
    const [isSubbmited, setisSubbmited] = useState(false)
    const nameHandler = (event)=>{
        //console.log(event)
        console.log(event.target.value)
        setname(event.target.value)
    }
    const submitHandler =()=>{
        console.log(name)
        console.log(age)
        setisSubbmited(true)
    }
  return (
    <div>
      <h1>Create User..</h1>
      <div className="container">
        <div className="col">
          <div className="col-md-6">
            <label>Name: </label>
            <input onChange={(event)=>{nameHandler(event)}} type="text" placeholder="enter Name"></input>
            {/* {name} */}
          </div>
          <div className="col-md-6">
            <label>Age :</label>
            <input onChange={(event)=>{setage(event.target.value)}} type="text" placeholder="enter Age"></input>
            {/* {age} */}
          </div>
            <div className="col-md-6">
                <button onClick={submitHandler} className="btn btn-primary">Submit</button>
            </div>
        </div>
      </div>
       { isSubbmited &&
      <div>
        <h1>OUTPUT</h1>
        <h2>Name: {name}</h2>
        <h2>Age: {age}</h2>
      </div>
    }
    </div>
  );
};
