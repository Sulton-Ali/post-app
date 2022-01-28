import React from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";

import logo from '../../assets/images/hijaab-uz-logo.jpg';
import {Link} from "react-router-dom";
import jwtDecode from "jwt-decode";
import tokenService from "../../services/tokenService";
import {ROLES} from "../../utils/constants";
import loginService from "../../services/httpServices/loginService";

function NavigationBar() {

  // const [user, setUser] = useState(null);

  let payload = null;
  const token = tokenService.getToken();
  if (token) {
    payload = jwtDecode(tokenService.getToken());
  }

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
            <Link to="/posts" className="btn btn-success text-white py-2 px-4">Postlar</Link>
          </Nav.Item>
        </Nav>

        <Nav className="ms-32">
          {(payload?.roles.includes(ROLES.ADMIN) || payload?.roles.includes(ROLES.USER))
            ? (
              <Nav.Item>
                <Button variant="success" to="/about" className="nav-link text-white py-2 px-4" onClick={() => loginService.logout()}>Chiqish</Button>
              </Nav.Item>
            ) : (
              <Nav.Item>
                <Link to="/login" className="nav-link text-white py-2 px-4">Kirish</Link>
              </Nav.Item>
            )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;