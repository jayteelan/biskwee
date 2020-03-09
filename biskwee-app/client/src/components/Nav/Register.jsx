import React, { Component } from "react";

const Register = props => {
  return (
    <form onSubmit={props.handleRegister}>
      <h1>Register</h1>
      <input
        type="email"
        name="email"
        placeholder="email"
        value={props.new_user.email}
        onChange={props.handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={props.new_user.password}
        onChange={props.handleChange}
      />
      <input
        type="password"
        name="confirm"
        placeholder="confirm password"
        value={props.new_user.confirm}
        onChange={props.handleChange}
      />
      <button>Register</button>
    </form>
  );
};

export default Register;
