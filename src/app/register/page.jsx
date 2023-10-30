"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import classes from "./register.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username === "" || email === "" || password === "") {
      toast.error("Please fill in all fields!");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long!");
      return;
    }
    try {
      const res = await fetch(
        "http://localhost:3000/api/register?timestamp=${Date.now()}",
        {
          method: "POST",
          body: JSON.stringify({ username, email, password }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // const json = await res.json();
      console.log("Response Status:", res.status);
      const jsonData = await res.json();
      console.log("Response Data:", jsonData);

      if (res.ok) {
        toast.success("Account created successfully");
        setTimeout(() => {
          signIn();
        }, 2000);
      } else {
        toast.error("Please enter valid email and/or password");
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username..."
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={classes.submitButton}>Register</button>
          <button className={classes.registerNow} onClick={() => signIn()}>
            Don&apos;t have an account? <br /> Register now.
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
