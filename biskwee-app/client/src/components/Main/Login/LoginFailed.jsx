import React from "react";
import Login from "./Login";

function LoginFailed() {
  return (
    <div>
      <h3>login unsuccessful; please try again</h3>
      <Login />
    </div>
  );
}

export default LoginFailed;
