import React, { useRef } from "react";
import useSimpleAuth from "../../hooks/ui/UseSimpleAuth";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

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
      props.history.push({ pathname: "/ingredients" });
    });
  };

  return (
    <main>
      <Form className="loginRegister" onSubmit={handleLogin}>
        <h1>Sign In</h1>
        <FormGroup>
          <Label htmlFor="inputUsername">Username </Label>
          <Input
            innerRef={username}
            type="username"
            className="form-control"
            required
            autoFocus
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="inputPassword">Password </Label>
          <Input
            innerRef={password}
            type="password"
            className="form-control"
            required
          />
        </FormGroup>
        <FormGroup>
          <Button type="submit">Enter</Button>
        </FormGroup>
      </Form>
    </main>
  );
};

export default Login;
