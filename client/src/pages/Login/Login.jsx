import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import loginService from "../../services/httpServices/loginService";
import tokenService from "../../services/tokenService";
import logo from "../../assets/images/hijaab-uz-logo.jpg";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigate();

  const login = () => {
    loginService
      .login({
        username,
        password,
      })
      .then((res) => {
        tokenService.setToken(res.data.token);
        navigation("/");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="container">
      <div className="login row justify-content-center align-items-center">
        <Form className="col-lg-6 p-5 bg-success text-white rounded-3">
          <div className="d-flex justify-content-center">
            <img
              src={logo}
              alt="site logo"
              width="100"
              height="100"
              className="rounded-circle"
            />
          </div>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Login</Form.Label>
            <Form.Control
              type="username"
              placeholder="Loginingizni kiriting..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Parol</Form.Label>
            <Form.Control
              type="password"
              placeholder="Parolingizni kiritisng..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="button" onClick={login}>
            Kirish
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
