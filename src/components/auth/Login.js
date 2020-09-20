import React, { useRef } from "react";
import useSimpleAuth from "../../hooks/ui/UseSimpleAuth";

const Login = (props) => {
  const username = useRef();
  const password = useRef();
  const { login } = useSimpleAuth();

  const handleLogin = (e) => {
    e.preventDefault();

    const credentials = {
      username: username.current.value,
      password: password.current.value,
    };

    login(credentials).then(() => {
      props.history.push({ pathname: "/" });
    });
  };

  return (
    <main>
      <form className="form--login" onSubmit={handleLogin}>
        <h1 className="">Sign In</h1>
        <fieldset>
          <label htmlFor="inputUsername">Username </label>
          <input
            ref={username}
            type="username"
            className="form-control"
            required
            autoFocus
          />
        </fieldset>
        <fieldset>
          <label htmlFor="inputPassword">Password </label>
          <input
            ref={password}
            type="password"
            className="form-control"
            required
          />
        </fieldset>
        <fieldset>
          <button type="submit">Enter</button>
        </fieldset>
      </form>
    </main>
  );
};

export default Login;
