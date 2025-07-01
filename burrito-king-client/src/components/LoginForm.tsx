"use client";

import React, { useState } from "react";
import "./loginForm.css";

export default function LoginForm() {
  const initialState = {
    username: "",
    password: "",
    validate: "",
  };

  const [text, setText] = useState(initialState);

  const handleTextChange = (e: Event | any) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value, validate: "" });
  };

  const handleSubmitForm = () => {};

  return (
    <form className="login-form" onSubmit={handleSubmitForm}>
      <div className="form-group row mt-3">
        <input
          type="text"
          name="username"
          className="form-control"
          value={text.username}
          placeholder="Username"
          onChange={handleTextChange}
        />
      </div>
      <div className="form-group row mt-3">
        <input
          type="password"
          name="password"
          className="form-control"
          value={text.password}
          placeholder="Password"
          onChange={handleTextChange}
        />
      </div>
      <div className="text-center">
        <button type="submit">LOGIN</button>
      </div>
    </form>
  );
}
