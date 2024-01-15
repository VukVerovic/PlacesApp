import React, { useContext, useState } from "react";

import "./Auth.css";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import { AuthContext } from "../../shared/Context/auth-context";

const Auth = () => {
  const auth = useContext(AuthContext);

  const [isLoginMode, setIsLoginMode] = useState(true);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const authHandler = (event) => {
    event.preventDefault();
    console.log(password + "  " + email + " " + name);
    auth.login();
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const switchLoginMode = () => {
    setIsLoginMode(!isLoginMode);
  };

  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <hr></hr>
      <div className="form-control">
        <form onSubmit={authHandler}>
          {!isLoginMode && (
            <React.Fragment>
              <label>Name:</label>
              <input type="name" onChange={nameHandler} required></input>
            </React.Fragment>
          )}
          <label>E-mail:</label>
          <input type="email" onChange={emailHandler} required></input>
          <label>Password:</label>
          <input type="password" onChange={passwordHandler} required></input>
          <Button type="submit"> {isLoginMode ? "LOGIN" : "SIGN UP"} </Button>
        </form>
        <Button type="submit" inverse onClick={switchLoginMode}>
          {" "}
          SWITCH TO {isLoginMode ? "SIGN UP" : "LOGIN"}{" "}
        </Button>
      </div>
    </Card>
  );
};
export default Auth;
