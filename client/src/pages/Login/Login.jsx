import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
import loginService from "../../services/httpServices/loginService";
import tokenService from "../../services/tokenService";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigate();

  const login = () => {
    loginService.login({
      username,
      password
    })
      .then(res => {
        tokenService.setToken(res.data.token);
        navigation('/');
      })
      .catch(e => console.log(e))
  }

  return (
    <div className="container">
      <div className="login min-vh-100 d-flex justify-content-center align-items-center">
        <Form className="w-50 p-5 bg-success text-white rounded-3">
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Логин</Form.Label>
            <Form.Control
              type="username"
              placeholder="Введите свой логин..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Пароль</Form.Label>
            <Form.Control
              type="password"
              placeholder="Введите свой пароль..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="button" onClick={login}>
            Войти
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;