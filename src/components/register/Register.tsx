import React from "react";
import RegisterForm from "./register-form";
import RegisterHeader from "./register-heading";

function Register() {
  return (
    <div className="container-fluid" style={{ marginBottom: 150 }}>
      <div className="register-container">
        <RegisterHeader />
        <RegisterForm />
      </div>
    </div>
  );
}

export default Register;
