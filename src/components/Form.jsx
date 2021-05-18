import React from "react";
import Input from "./Input";
function Form(props){
  return(<form className="form">
  <Input type="text" placeholder="username"/>
  <Input type="password" placeholder="password" />
  {props.registered===false &&  (<Input type="password" placeholder="Confirm Password" />)}
  <button type="submit">{props.Registered? "login" : "Register"}</button>
</form>
  );
} 
export default Form;