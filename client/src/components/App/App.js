import React, {useEffect} from 'react';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import jwtDecode from "jwt-decode";
import './App.scss';
import Login from "../../pages/Login/Login";
import Home from "../../pages/Home/Home";
import Main from "../Main/Main";
import Posts from "../../pages/Posts/Posts";
import tokenService from "../../services/tokenService";
import eventBus from "../../utils/eventBus";

function App() {

  const navigation = useNavigate();
  let payload = null;
  const token = tokenService.getToken();
  if (token) {
    payload = jwtDecode(tokenService.getToken());
  }

  useEffect(() => {
    eventBus.on("logout", () => {
      tokenService.removeToken();
      navigation('login');
    });

    return () => {
      eventBus.remove("logout");
    };
  }, [])

  return (
    <div className="app">
      <Routes>
        <Route path="login" element={<Login/>}/>
        <Route path="/" element={<Main />}>
          <Route index  element={<Home />}/>
          <Route path="posts" element={<Posts />}/>
        </Route>
        <Route path="*" element={<div>
          <strong>404: </strong>
          Page not found
        </div>} />
      </Routes>
    </div>
  );
}

export default App;
