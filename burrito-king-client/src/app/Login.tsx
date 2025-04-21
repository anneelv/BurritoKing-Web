import React from "react";
import "./login.css";
import LoginForm from "@/components/LoginForm";

export default function Login() {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="box">
        <h2>Burrito King</h2>
        <LoginForm />
      </div>
    </div>
  );
}
