import React, { useRef } from "react";
import { withRouter } from "react-router-dom";
import useSimpleAuth from "../../hooks/ui/UseSimpleAuth";

const Register = (props) => {
  const email = useRef();
  const userName = useRef();
  const firstName = useRef();
  const lastName = useRef();
  const password = useRef();
  const verifyPassword = useRef();
  const companyName = useRef();
  const { register } = useSimpleAuth();

  const handleRegister = (e) => {
    e.preventDefault();

    const newUser = {
      username: userName.current.value,
      first_name: firstName.current.value,
      last_name: lastName.current.value,
      password: password.current.value,
      email: email.current.value,
      company: companyName.current.value,
    };

    register(newUser).then(() => {
      props.history.push({
        pathname: "/ingredients",
      });
    });
  };

  return (
    <main>
      <form className="loginRegister" onSubmit={handleRegister}>
        <h1 className="">Register to use PRIX</h1>
        <fieldset>
          <label htmlFor="userName">Username </label>
          <input
            ref={userName}
            type="text"
            name="userName"
            className="form-control"
            required
            autoFocus
          />
        </fieldset>
        <fieldset>
          <label htmlFor="firstName">First Name </label>
          <input
            ref={firstName}
            type="text"
            name="firstName"
            className="form-control"
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="lastName">Last Name </label>
          <input
            ref={lastName}
            type="text"
            name="lastName"
            className="form-control"
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="inputEmail">Email Address </label>
          <input
            ref={email}
            type="text"
            name="email"
            className="form-control"
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="companyName">Company Name </label>
          <input
            ref={companyName}
            type="text"
            name="companyName"
            className="form-control"
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="inputPassword">Password </label>
          <input
            ref={password}
            type="password"
            name="password"
            className="form-control"
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="verifyPassword">Verify Password </label>
          <input
            ref={verifyPassword}
            type="password"
            name="verifyPassword"
            className="form-control"
            required
          />
        </fieldset>
        <fieldset>
          <button type="submit">Submit </button>
        </fieldset>
      </form>
    </main>
  );
};

export default withRouter(Register);
