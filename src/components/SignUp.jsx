import React from "react";
import "./SignUp.css";
import { useState } from "react";

function SignUp() {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-full  lg:w-4/12 lg:h-5/6 h-full bg-white rounded-lg">
        <div className=" m-10 text-5xl text-blue-700 flex flex-col gap-5 items-center">
          <div>
            <h1>{action}</h1>
          </div>
          <div className="under-line"></div>
        </div>

        <div className="flex flex-col items-center gap-8 mt-16">
          {action === "Sign Up" ? (
            <div className="w-11/12 h-14 bg-gray-300 text-centern rounded-md">
              <span className="text-2xl m-5 lg:m-6 text-gray-400">
                <ion-icon name="person"></ion-icon>
              </span>
              <input
                type="text"
                placeholder="Name"
                className="h-full w-9/12 lg:w-10/12 bg-transparent text-2xl outline-0"
              />
            </div>
          ) : (
            <div> </div>
          )}

          <div className="w-11/12 h-14 bg-gray-300 text-centern rounded-md">
            <span className="text-2xl m-5 lg:m-6 text-gray-400">
              <ion-icon name="mail"></ion-icon>
            </span>
            <input
              type="email"
              placeholder="Email"
              className="h-full w-9/12 lg:w-10/12 bg-transparent text-2xl outline-0"
            />
          </div>

          <div className="w-11/12 h-14 bg-gray-300 text-centern rounded-md">
            <span className="text-2xl m-5 lg:m-6 text-gray-400">
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input
              type="password"
              placeholder="Password"
              className="h-full w-9/12 lg:w-10/12 bg-transparent text-2xl outline-0"
            />
          </div>
        </div>

        {action === "Sign Up" ? (
          <div> </div>
        ) : (
          <p className="mx-5 my-2">
            for reset Password?{" "}
            <a href="#" className="text-blue-900">
              Click Here!
            </a>{" "}
          </p>
        )}

        <div className="text-center m-16 flex justify-around">
          <button
            className={action === "Login" ? "submit graycolor" : "submit"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </button>
          <button
            className={action === "Sign Up" ? "submit graycolor" : "submit"}
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </button>
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default SignUp;
