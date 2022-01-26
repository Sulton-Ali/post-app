import React from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";

import logo from '../../assets/images/hijaab-uz-logo.jpg';
import {Link, useNavigate} from "react-router-dom";
import jwtDecode from "jwt-decode";
import tokenService from "../../services/tokenService";
import {ROLES} from "../../utils/constants";
import loginService from "../../services/httpServices/loginService";

function NavigationBar() {

  let payload = null;
  const token = tokenService.getToken();
  if (token) {
    payload = jwtDecode(tokenService.getToken());
  }

  return (
    <Navbar bg="success" variant="success">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="text-decoration-none">
            <img
              alt="brand"
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-middle rounded-circle"
            />{' '}
            <span className="text-white ms-2">Islamic posts</span>
          </Link>
        </Navbar.Brand>

        <Nav>
          <Nav.Item>
            <Link to="/posts" className="btn btn-success text-white py-2 px-4">Posts</Link>
          </Nav.Item>
          {(payload?.roles.includes(ROLES.ADMIN) || payload?.roles.includes(ROLES.USER))
            ? (
              <Nav.Item>
                <Button variant="success" to="/about" className="nav-link text-white py-2 px-4" onClick={() => loginService.logout()}>Выйти</Button>
              </Nav.Item>
            ) : (
              <Nav.Item>
                <Link to="/login" className="nav-link text-white py-2 px-4">Войти</Link>
              </Nav.Item>
            )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;