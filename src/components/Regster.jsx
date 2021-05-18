import React from "react";
import Input from "./Input";

function Register() {
  return (
    <form className="form">
      <Input type="text" placeholder="username" />
      <Input type="password" placeholder="password" />
      <Input type="password" placeholder=" Confirm Password" />

      <button type="submit">Register</button>
    </form>
  );
}
export default Register;
