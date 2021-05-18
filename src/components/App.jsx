import React from "react";
import Form from "./Form";



var isRegistered = true;

function App() {
  return (
    <div className="container">
      <h1>Hello</h1>
      <Form registered={isRegistered}/>
    </div>
  );
}

export default App;
