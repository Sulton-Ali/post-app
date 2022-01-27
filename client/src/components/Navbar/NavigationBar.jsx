import React, {useEffect, useState} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";

import logo from '../../assets/images/hijaab-uz-logo.jpg';
import {Link, useNavigate} from "react-router-dom";
import jwtDecode from "jwt-decode";
import tokenService from "../../services/tokenService";
import {ROLES} from "../../utils/constants";
import loginService from "../../services/httpServices/loginService";
import userService from "../../services/httpServices/userService";

function NavigationBar() {

  // const [user, setUser] = useState(null);

  let payload = null;
  const token = tokenService.getToken();
  if (token) {
    payload = jwtDecode(tokenService.getToken());
  }

  // useEffect(() => {
  //   if (payload) {
  //     userService.getUserById(payload.id)
  //       .then(res => setUser(res.data))
  //       .catch(e => console.log(e))
  //   }
  // }, [])



  return (
    <Navbar bg="success" variant="success">
      <Container className="justify-content-start">
        <Navbar.Brand>
          <Link to="/" className="text-decoration-none">
            <img
              alt="brand"
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-middle rounded-circle"
            />{' '}
            <span className="text-white ms-2">Blog</span>
          </Link>
        </Navbar.Brand>

        <Nav className="ms-auto">
          <Nav.Item>
            <Link to="/posts" className="btn btn-success text-white py-2 px-4">Публикации</Link>
          </Nav.Item>
        </Nav>

        <Nav className="ms-3">
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
          {/*{user && (<Nav.Item className="px-4 d-flex align-items-center justify-content-between">*/}
          {/*  <div className="rounded-circle bg-secondary me-2" style={{width: "40px", height: "40px"}}></div>*/}
          {/*  <h6 className="fs-6 m-0 fw-bold text-white text-uppercase">{user.username}</h6>*/}
          {/*</Nav.Item>)}*/}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;