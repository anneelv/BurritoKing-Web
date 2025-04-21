"use client";

import React, { useState } from "react";
import "./loginForm.css";

export default function LoginForm() {
  const initialState = {
    username: "",
    pass: "",
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
      <div className="row">
        <input
          type="text"
          name="username"
          value={text.username}
          placeholder="Username"
          onChange={handleTextChange}
        />
      </div>
    </form>
  );
}
